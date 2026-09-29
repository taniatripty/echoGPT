
"use client";

import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from "react";

import { useSearchParams } from "next/navigation";

import {
  Loader2,
  Send,
  Sparkles,
} from "lucide-react";

import ChatResponse from "@/components/chat/ChatResponse";

import {
  PromptCategory,
  PromptSuggestion,
  promptSuggestions,
} from "@/components/data/ChatPrompt";

import ChatToast from "@/components/chat/ChatToster";

import {
  AIModelId,
  aiModels,
} from "@/components/data/AImodels";

import AIModelSelector from "@/components/chat/AIModelSector";

import {
  getChatHistory,
  saveConversation,
} from "@/lib/chatHistory";

import type {
  ChatConversation,
  ChatMessage,
} from "@/types/chat.types";

type ToastType = "success" | "loading";

type ToastState = {
  visible: boolean;
  message: string;
  type: ToastType;
};

interface ChatWorkspaceProps {
  conversationId: string | null;
  modelId: string | null;
}

const categories: {
  id: PromptCategory;
  label: string;
}[] = [
  {
    id: "coding",
    label: "Coding",
  },
  {
    id: "writing",
    label: "Writing",
  },
  {
    id: "learning",
    label: "Learning",
  },
  {
    id: "research",
    label: "Research",
  },
  {
    id: "productivity",
    label: "Productivity",
  },
];

function isAIModelId(
  value: string | null,
): value is AIModelId {
  return aiModels.some((model) => model.id === value);
}

export default function ChatDashboard() {
  const searchParams = useSearchParams();

  const conversationId =
    searchParams.get("conversation");

  const modelId = searchParams.get("model");

  return (
    <ChatWorkspace
      key={conversationId ?? "new-chat"}
      conversationId={conversationId}
      modelId={modelId}
    />
  );
}

function ChatWorkspace({
  conversationId: urlConversationId,
  modelId,
}: ChatWorkspaceProps) {
  const existingConversation =
    urlConversationId
      ? getChatHistory().find(
          (conversation) =>
            conversation.id ===
            urlConversationId,
        ) ?? null
      : null;

  const initialModel: AIModelId = isAIModelId(
    modelId,
  )
    ? modelId
    : "echogpt-fast";

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState<ChatMessage[]>(
      () =>
        existingConversation?.messages ?? [],
    );

  const [conversationId, setConversationId] =
    useState<string | null>(
      () =>
        existingConversation?.id ??
        urlConversationId ??
        null,
    );

  const conversationIdRef =
    useRef<string | null>(
      existingConversation?.id ??
        urlConversationId ??
        null,
    );

  const [
    activeCategory,
    setActiveCategory,
  ] = useState<PromptCategory>("coding");

  const [
    selectedModel,
    setSelectedModel,
  ] = useState<AIModelId>(initialModel);

  const [
    responseIndexes,
    setResponseIndexes,
  ] = useState<Record<string, number>>(
    {},
  );

  const [
    selectedPromptId,
    setSelectedPromptId,
  ] = useState<string | null>(null);

  const [
    isGenerating,
    setIsGenerating,
  ] = useState(false);

  const [toast, setToast] =
    useState<ToastState>({
      visible: false,
      message: "",
      type: "success",
    });

  const toastTimerRef =
    useRef<number | null>(null);

  const activePrompts =
    promptSuggestions[activeCategory];

  // ----------------------------------------------------------
  // TOAST
  // ----------------------------------------------------------

  const showToast = useCallback(
    (
      toastMessage: string,
      type: ToastType = "success",
    ) => {
      if (
        toastTimerRef.current !== null
      ) {
        window.clearTimeout(
          toastTimerRef.current,
        );
      }

      setToast({
        visible: true,
        message: toastMessage,
        type,
      });

      toastTimerRef.current =
        window.setTimeout(() => {
          setToast((previous) => ({
            ...previous,
            visible: false,
          }));

          toastTimerRef.current = null;
        }, 1200);
    },
    [],
  );

  // ----------------------------------------------------------
  // FIND PROMPT
  // ----------------------------------------------------------

  const findPromptById = useCallback(
    (
      promptId: string,
    ): PromptSuggestion | undefined => {
      return Object.values(
        promptSuggestions,
      )
        .flat()
        .find(
          (prompt) =>
            prompt.id === promptId,
        );
    },
    [],
  );

  // ----------------------------------------------------------
  // PROMPT CLICK
  // ----------------------------------------------------------

  const handlePromptClick = (
    prompt: PromptSuggestion,
  ) => {
    setMessage(prompt.prompt);

    setSelectedPromptId(prompt.id);

    showToast("Prompt added");
  };

  // ----------------------------------------------------------
  // NEXT PREDEFINED RESPONSE
  // ----------------------------------------------------------

  const getNextResponse = (
    promptId: string,
  ) => {
    const prompt =
      findPromptById(promptId);

    if (!prompt) {
      return null;
    }

    if (prompt.responses.length === 0) {
      return null;
    }

    const currentIndex =
      responseIndexes[promptId] ?? 0;

    const response =
      prompt.responses[
        currentIndex %
          prompt.responses.length
      ];

    setResponseIndexes(
      (previous) => ({
        ...previous,
        [promptId]:
          (currentIndex + 1) %
          prompt.responses.length,
      }),
    );

    return response;
  };

  // ----------------------------------------------------------
  // CURRENT AI MODEL
  // ----------------------------------------------------------

  const getCurrentModel = () => {
    return (
      aiModels.find(
        (model) =>
          model.id === selectedModel,
      ) ?? aiModels[0]
    );
  };

  // ----------------------------------------------------------
  // CONVERSATION ID
  // ----------------------------------------------------------

  const getConversationId =
    (): string => {
      if (conversationIdRef.current) {
        return conversationIdRef.current;
      }

      const newConversationId =
        crypto.randomUUID();

      conversationIdRef.current =
        newConversationId;

      setConversationId(
        newConversationId,
      );

      return newConversationId;
    };

  // ----------------------------------------------------------
  // SAVE CONVERSATION
  // ----------------------------------------------------------

  const saveCurrentConversation = (
    updatedMessages: ChatMessage[],
    currentConversationId: string,
  ) => {
    if (updatedMessages.length === 0) {
      return;
    }

    const history = getChatHistory();

    const existingConversation =
      history.find(
        (conversation) =>
          conversation.id ===
          currentConversationId,
      );

    const firstUserMessage =
      updatedMessages.find(
        (item) =>
          item.role === "user",
      );

    const title =
      firstUserMessage?.content
        .trim()
        .slice(0, 50) ||
      "New Chat";

    const conversation: ChatConversation =
      {
        id: currentConversationId,

        title,

        messages: updatedMessages,

        createdAt:
          existingConversation?.createdAt ??
          new Date().toISOString(),

        updatedAt:
          new Date().toISOString(),
      };

    saveConversation(
      conversation,
    );
  };

  // ----------------------------------------------------------
  // SUBMIT MESSAGE
  // ----------------------------------------------------------

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const trimmedMessage =
      message.trim();

    if (
      !trimmedMessage ||
      isGenerating
    ) {
      return;
    }

    const currentMessage =
      trimmedMessage;

    const currentPromptId =
      selectedPromptId;

    const currentModel =
      getCurrentModel();

    const currentConversationId =
      getConversationId();

    // --------------------------------------------------------
    // USER MESSAGE
    // --------------------------------------------------------

    const userMessage: ChatMessage =
      {
        id: crypto.randomUUID(),

        role: "user",

        content: currentMessage,

        promptId:
          currentPromptId ??
          undefined,
      };

    const messagesAfterUser:
      ChatMessage[] = [
        ...messages,
        userMessage,
      ];

    setMessages(
      messagesAfterUser,
    );

    saveCurrentConversation(
      messagesAfterUser,
      currentConversationId,
    );

    setMessage("");

    setSelectedPromptId(null);

    setIsGenerating(true);

    showToast(
      "Generating response...",
      "loading",
    );

    // --------------------------------------------------------
    // DEMO DELAY
    // --------------------------------------------------------

    await new Promise<void>(
      (resolve) => {
        window.setTimeout(
          resolve,
          1000,
        );
      },
    );

    // --------------------------------------------------------
    // ASSISTANT RESPONSE
    // --------------------------------------------------------

    let assistantMessage: ChatMessage;

    if (currentPromptId) {
      const response =
        getNextResponse(
          currentPromptId,
        );

      if (response) {
        assistantMessage = {
          id: crypto.randomUUID(),

          role: "assistant",

          content:
            response.content,

          promptId:
            currentPromptId,

          model:
            currentModel.name,
        };
      } else {
        assistantMessage = {
          id: crypto.randomUUID(),

          role: "assistant",

          content:
            "I couldn't find a predefined response for this prompt. Please try another prompt or enter your request directly.",

          promptId:
            currentPromptId,

          model:
            currentModel.name,
        };
      }
    } else {
      assistantMessage = {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
          "Your message has been received successfully. EchoGPT is currently running in demo mode, so this response is generated by the local demonstration flow.\n\nWhen you connect your AI API, this same conversation flow can send your message to the selected model and display the generated response here.\n\nYou can already test the complete interface, including conversations, model selection, prompt suggestions, response states, and chat history.",

        model:
          currentModel.name,
      };
    }

    const messagesAfterAssistant:
      ChatMessage[] = [
        ...messagesAfterUser,
        assistantMessage,
      ];

    setMessages(
      messagesAfterAssistant,
    );

    saveCurrentConversation(
      messagesAfterAssistant,
      currentConversationId,
    );

    setIsGenerating(false);

    showToast(
      "Response ready",
    );
  };

  // ----------------------------------------------------------
  // KEYBOARD HANDLER
  // ----------------------------------------------------------

  const handleKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();

      event.currentTarget.form?.requestSubmit();
    }
  };

  // ----------------------------------------------------------
  // REGENERATE
  // ----------------------------------------------------------

  const handleRegenerate = async (
    promptId?: string,
  ) => {
    if (
      !promptId ||
      isGenerating
    ) {
      return;
    }

    const currentModel =
      getCurrentModel();

    const currentConversationId =
      getConversationId();

    setIsGenerating(true);

    showToast(
      "Generating another response...",
      "loading",
    );

    await new Promise<void>(
      (resolve) => {
        window.setTimeout(
          resolve,
          1000,
        );
      },
    );

    const response =
      getNextResponse(
        promptId,
      );

    if (response) {
      const assistantMessage:
        ChatMessage = {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
          response.content,

        promptId,

        model:
          currentModel.name,
      };

      const updatedMessages:
        ChatMessage[] = [
          ...messages,
          assistantMessage,
        ];

      setMessages(
        updatedMessages,
      );

      saveCurrentConversation(
        updatedMessages,
        currentConversationId,
      );
    }

    setIsGenerating(false);

    showToast(
      "New response ready",
    );
  };

  // ----------------------------------------------------------
  // UI
  // ----------------------------------------------------------

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      {/* ---------------------------------------------------- */}
      {/* TOAST */}
      {/* ---------------------------------------------------- */}

      <ChatToast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
      />

      {/* ---------------------------------------------------- */}
      {/* HEADER */}
      {/* ---------------------------------------------------- */}

      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-sm shadow-blue-500/20">
            <Sparkles className="h-4 w-4 text-white" />
          </div>

          <div>
            <h1 className="text-sm font-semibold text-foreground">
              EchoGPT
            </h1>

            <p className="hidden text-[10px] text-muted-foreground sm:block">
              AI Workspace
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-muted-foreground md:block">
            {getCurrentModel().name}
          </span>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              Demo mode
            </span>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------- */}
      {/* MAIN CONTENT */}
      {/* ---------------------------------------------------- */}

      <main className="min-h-0 flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
            {/* ---------------------------------------------- */}
            {/* EMPTY STATE */}
            {/* ---------------------------------------------- */}

            <div className="mx-auto w-full max-w-3xl text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-xl shadow-blue-500/20">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What can I help you with?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                Explore a prompt below or
                describe what you need in
                your own words. EchoGPT can
                help with coding, writing,
                learning, research, and
                everyday productivity.
              </p>
            </div>

            {/* ---------------------------------------------- */}
            {/* CATEGORIES */}
            {/* ---------------------------------------------- */}

            <div className="mx-auto mt-8 w-full max-w-4xl">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map(
                  (category) => {
                    const isActive =
                      activeCategory ===
                      category.id;

                    return (
                      <button
                        key={
                          category.id
                        }
                        type="button"
                        onClick={() =>
                          setActiveCategory(
                            category.id,
                          )
                        }
                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                          isActive
                            ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 shadow-sm shadow-cyan-500/10 dark:text-cyan-400"
                            : "border-border bg-background text-muted-foreground hover:border-cyan-500/30 hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {
                          category.label
                        }
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            {/* ---------------------------------------------- */}
            {/* PROMPT CARDS */}
            {/* ---------------------------------------------- */}

            <div className="mx-auto mt-4 grid w-full max-w-4xl gap-3 sm:grid-cols-2">
              {activePrompts.map(
                (prompt) => (
                  <button
                    key={prompt.id}
                    type="button"
                    onClick={() =>
                      handlePromptClick(
                        prompt,
                      )
                    }
                    className="group rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-500 transition-all group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
                        <Sparkles className="h-4 w-4" />
                      </div>

                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Try
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-cyan-500">
                      {prompt.title}
                    </h3>

                    <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-muted-foreground">
                      {
                        prompt.description
                      }
                    </p>
                  </button>
                ),
              )}
            </div>

            {/* ---------------------------------------------- */}
            {/* PROMPT HINT */}
            {/* ---------------------------------------------- */}

            <p className="mx-auto mt-6 max-w-md text-center text-[11px] leading-5 text-muted-foreground">
              Select a prompt to use it as
              a starting point. You can edit
              it before sending.
            </p>
          </div>
        ) : (
          /* ================================================= */
          /* CHAT MESSAGES */
          /* ================================================= */

          <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
            <div className="space-y-8">
              {messages.map(
                (item) => (
                  <div
                    key={item.id}
                  >
                    {item.role ===
                    "user" ? (
                      <div className="flex justify-end">
                        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm leading-6 text-white shadow-sm">
                          {item.content}
                        </div>
                      </div>
                    ) : (
                      <ChatResponse
                        content={
                          item.content
                        }
                        model={
                          item.model
                        }
                        onRegenerate={
                          item.promptId
                            ? () =>
                                handleRegenerate(
                                  item.promptId,
                                )
                            : undefined
                        }
                      />
                    )}
                  </div>
                ),
              )}

              {/* -------------------------------------------- */}
              {/* GENERATING */}
              {/* -------------------------------------------- */}

              {isGenerating && (
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-cyan-500" />

                    <span className="text-xs text-muted-foreground">
                      EchoGPT is thinking...
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ---------------------------------------------------- */}
      {/* MESSAGE INPUT */}
      {/* ---------------------------------------------------- */}

      <div className="shrink-0 border-t border-border bg-background p-3 sm:p-4">
        <div className="mx-auto w-full max-w-4xl">
          {/* MODEL SELECTOR */}

          <div className="mb-2">
            <AIModelSelector
              selectedModel={
                selectedModel
              }
              onModelChange={
                setSelectedModel
              }
            />
          </div>

          <form
            onSubmit={
              handleSubmit
            }
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/10">
              <textarea
                value={message}
                disabled={
                  isGenerating
                }
                onChange={(
                  event,
                ) => {
                  const value =
                    event.target
                      .value;

                  setMessage(
                    value,
                  );

                  const selectedPrompt =
                    selectedPromptId
                      ? findPromptById(
                          selectedPromptId,
                        )
                      : undefined;

                  if (
                    value !==
                    selectedPrompt?.prompt
                  ) {
                    setSelectedPromptId(
                      null,
                    );
                  }
                }}
                onKeyDown={
                  handleKeyDown
                }
                placeholder={
                  isGenerating
                    ? "EchoGPT is generating..."
                    : "Message EchoGPT..."
                }
                rows={1}
                maxLength={4000}
                aria-label="Message EchoGPT"
                className="min-h-14 max-h-48 w-full resize-none bg-transparent px-4 py-4 pr-14 text-sm leading-6 text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={
                  !message.trim() ||
                  isGenerating
                }
                aria-label="Send message"
                title={
                  isGenerating
                    ? "Generating response"
                    : "Send message"
                }
                className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
              >
                {isGenerating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between px-1">
              <p className="text-[10px] text-muted-foreground">
                Enter to send · Shift +
                Enter for a new line
              </p>

              <p className="text-[10px] text-muted-foreground">
                {message.length}/4000
              </p>
            </div>

            <p className="mt-1 text-center text-[10px] text-muted-foreground">
              EchoGPT Demo · Explore
              example conversations or
              enter your own prompt.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

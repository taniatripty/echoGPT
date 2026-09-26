"use client";

import { FormEvent, KeyboardEvent, useState } from "react";
import { Send, Sparkles } from "lucide-react";

import ChatResponse from "@/components/chat/ChatResponse";
import { PromptCategory, PromptSuggestion, promptSuggestions } from "@/components/data/ChatPrompt";


interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  promptId?: string;
  highlights?: string[];
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

export default function ChatDashboardPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const [activeCategory, setActiveCategory] =
    useState<PromptCategory>("coding");

  /*
   * Stores which response should be returned next
   * for every prompt.
   *
   * Example:
   *
   * {
   *   "explain-react": 1,
   *   "typescript": 2
   * }
   */
  const [responseIndexes, setResponseIndexes] = useState<
    Record<string, number>
  >({});

  /*
   * Remember which prompt the textarea currently belongs to.
   */
  const [selectedPromptId, setSelectedPromptId] = useState<
    string | null
  >(null);

  const activePrompts = promptSuggestions[activeCategory];

  // =========================================================
  // FIND PROMPT
  // =========================================================

  const findPromptById = (
    promptId: string
  ): PromptSuggestion | undefined => {
    return Object.values(promptSuggestions)
      .flat()
      .find((prompt) => prompt.id === promptId);
  };

  // =========================================================
  // SELECT PROMPT
  // =========================================================

  const handlePromptClick = (prompt: PromptSuggestion) => {
    setMessage(prompt.prompt);
    setSelectedPromptId(prompt.id);
  };

  // =========================================================
  // GET NEXT RESPONSE
  // =========================================================

  const getNextResponse = (promptId: string) => {
    const prompt = findPromptById(promptId);

    if (!prompt) {
      return null;
    }

    const currentIndex = responseIndexes[promptId] ?? 0;

    const response =
      prompt.responses[
        currentIndex % prompt.responses.length
      ];

    setResponseIndexes((previous) => ({
      ...previous,
      [promptId]:
        (currentIndex + 1) % prompt.responses.length,
    }));

    return response;
  };

  // =========================================================
  // SEND MESSAGE
  // =========================================================

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmedMessage,
      promptId: selectedPromptId ?? undefined,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    /*
     * If this message came from one of our predefined prompts,
     * generate the next predefined response.
     */
    if (selectedPromptId) {
      const response = getNextResponse(selectedPromptId);

      if (response) {
        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.content,
          highlights: response.highlights,
          promptId: selectedPromptId,
        };

        setMessages((previousMessages) => [
          ...previousMessages,
          assistantMessage,
        ]);
      }
    } else {
      /*
       * Manual messages don't have an actual AI backend yet.
       * We show a useful demo response instead of pretending
       * that a real AI API was called.
       */
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Your message has been received. Connect your AI API here to generate a real response from EchoGPT.",
        highlights: [
          "Frontend chat interface is working",
          "Prompt state is managed locally",
          "AI API can be connected next",
        ],
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        assistantMessage,
      ]);
    }

    setMessage("");
    setSelectedPromptId(null);
  };

  // =========================================================
  // ENTER KEY
  // =========================================================

  const handleKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      event.currentTarget.form?.requestSubmit();
    }
  };

  // =========================================================
  // REGENERATE RESPONSE
  // =========================================================

  const handleRegenerate = (promptId?: string) => {
    if (!promptId) {
      return;
    }

    const response = getNextResponse(promptId);

    if (!response) {
      return;
    }

    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: response.content,
      highlights: response.highlights,
      promptId,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      assistantMessage,
    ]);
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
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

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            Demo mode
          </span>
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="min-h-0 flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
            {/* Welcome */}
            <div className="mx-auto w-full max-w-3xl text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-xl shadow-blue-500/20">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What can I help you build?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                Choose a prompt below or write your own instruction
                to start exploring EchoGPT.
              </p>
            </div>

            {/* Category tabs */}
            <div className="mx-auto mt-8 w-full max-w-4xl">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => {
                  const isActive =
                    activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() =>
                        setActiveCategory(category.id)
                      }
                      className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                        isActive
                          ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                          : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Prompt cards */}
            <div className="mx-auto mt-4 grid w-full max-w-4xl gap-3 sm:grid-cols-2">
              {activePrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  type="button"
                  onClick={() => handlePromptClick(prompt)}
                  className="group rounded-2xl border border-border bg-card p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-500 transition group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>

                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Try
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-cyan-500">
                    {prompt.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    {prompt.description}
                  </p>
                </button>
              ))}
            </div>

            <p className="mt-6 text-center text-[11px] text-muted-foreground">
              Demo responses are predefined for this frontend
              prototype.
            </p>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
            <div className="space-y-8">
              {messages.map((item) => (
                <div key={item.id}>
                  {item.role === "user" ? (
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm leading-6 text-white shadow-sm">
                        {item.content}
                      </div>
                    </div>
                  ) : (
                    <ChatResponse
                      content={item.content}
                      highlights={item.highlights}
                      onRegenerate={
                        item.promptId
                          ? () =>
                              handleRegenerate(
                                item.promptId
                              )
                          : undefined
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* =====================================================
          INPUT
      ===================================================== */}
      <div className="shrink-0 border-t border-border bg-background p-3 sm:p-4">
        <div className="mx-auto w-full max-w-4xl">
          <form onSubmit={handleSubmit}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/10">
              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);

                  /*
                   * If the user manually changes the text,
                   * it is no longer necessarily the selected
                   * predefined prompt.
                   */
                  if (
                    event.target.value !==
                    findPromptById(
                      selectedPromptId ?? ""
                    )?.prompt
                  ) {
                    setSelectedPromptId(null);
                  }
                }}
                onKeyDown={handleKeyDown}
                placeholder="Message EchoGPT..."
                rows={1}
                aria-label="Message EchoGPT"
                className="min-h-14 max-h-48 w-full resize-none bg-transparent px-4 py-4 pr-14 text-sm leading-6 text-foreground outline-none placeholder:text-muted-foreground"
              />

              <button
                type="submit"
                disabled={!message.trim()}
                aria-label="Send message"
                className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              EchoGPT Demo · Responses are currently predefined
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
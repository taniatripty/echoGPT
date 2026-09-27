
// "use client";

// import {
//   FormEvent,
//   KeyboardEvent,
//   useCallback,
//   useMemo,
//   useRef,
//   useState,
//   useSyncExternalStore,
// } from "react";

// import { useSearchParams } from "next/navigation";

// import {
//   Loader2,
//   Send,
//   Sparkles,
// } from "lucide-react";

// import ChatResponse from "@/components/chat/ChatResponse";

// import {
//   PromptCategory,
//   PromptSuggestion,
//   promptSuggestions,
// } from "@/components/data/ChatPrompt";

// import ChatToast from "@/components/chat/ChatToster";

// import {
//   AIModelId,
//   aiModels,
// } from "@/components/data/AImodels";

// import AIModelSelector from "@/components/chat/AIModelSector";

// import {
//   getChatHistory,
//   saveConversation,
// } from "@/lib/chatHistory";

// import type {
//   ChatConversation,
//   ChatMessage,
// } from "@/types/chat.types";

// // =========================================================
// // TYPES
// // =========================================================

// type ToastType = "success" | "loading";

// type ToastState = {
//   visible: boolean;
//   message: string;
//   type: ToastType;
// };

// // =========================================================
// // CATEGORIES
// // =========================================================

// const categories: {
//   id: PromptCategory;
//   label: string;
// }[] = [
//   {
//     id: "coding",
//     label: "Coding",
//   },
//   {
//     id: "writing",
//     label: "Writing",
//   },
//   {
//     id: "learning",
//     label: "Learning",
//   },
//   {
//     id: "research",
//     label: "Research",
//   },
//   {
//     id: "productivity",
//     label: "Productivity",
//   },
// ];

// // =========================================================
// // LOCAL STORAGE SUBSCRIPTION
// // =========================================================
// //
// // We use useSyncExternalStore instead of useEffect +
// // setState for loading localStorage data.
// //
// // This avoids:
// // "Calling setState synchronously within an effect"
// // =========================================================

// const HISTORY_STORAGE_EVENT = "storage";

// function subscribeToHistory(
//   onStoreChange: () => void,
// ): () => void {
//   if (typeof window === "undefined") {
//     return () => {};
//   }

//   window.addEventListener(
//     HISTORY_STORAGE_EVENT,
//     onStoreChange,
//   );

//   return () => {
//     window.removeEventListener(
//       HISTORY_STORAGE_EVENT,
//       onStoreChange,
//     );
//   };
// }

// // =========================================================
// // COMPONENT
// // =========================================================

// export default function ChatDashboardPage() {
//   const searchParams = useSearchParams();

//   // =======================================================
//   // HISTORY CONVERSATION ID
//   // =======================================================

//   const historyConversationId =
//     searchParams.get("conversation");

//   // =======================================================
//   // READ CONVERSATION FROM LOCAL STORAGE
//   // =======================================================
//   //
//   // getSnapshot must return a cached/stable primitive.
//   //
//   // We return JSON string instead of an object.
//   // =======================================================

//   const getHistorySnapshot = useCallback(() => {
//     if (
//       typeof window === "undefined" ||
//       !historyConversationId
//     ) {
//       return null;
//     }

//     const history = getChatHistory();

//     const conversation = history.find(
//       (item) =>
//         item.id === historyConversationId,
//     );

//     if (!conversation) {
//       return null;
//     }

//     return JSON.stringify(conversation);
//   }, [historyConversationId]);

//   const conversationSnapshot =
//     useSyncExternalStore(
//       subscribeToHistory,
//       getHistorySnapshot,
//       () => null,
//     );

//   // =======================================================
//   // PARSE STORED CONVERSATION
//   // =======================================================

//   const storedConversation =
//     useMemo<ChatConversation | null>(() => {
//       if (!conversationSnapshot) {
//         return null;
//       }

//       try {
//         return JSON.parse(
//           conversationSnapshot,
//         ) as ChatConversation;
//       } catch {
//         return null;
//       }
//     }, [conversationSnapshot]);

//   // =======================================================
//   // MESSAGE STATE
//   // =======================================================

//   const [message, setMessage] =
//     useState("");

//   const [messages, setMessages] =
//     useState<ChatMessage[]>(
//       () => storedConversation?.messages ?? [],
//     );

//   // =======================================================
//   // CONVERSATION STATE
//   // =======================================================

//   const [conversationId, setConversationId] =
//     useState<string | null>(
//       () => storedConversation?.id ?? null,
//     );

//   const conversationIdRef =
//     useRef<string | null>(
//       storedConversation?.id ?? null,
//     );

//   // =======================================================
//   // CATEGORY STATE
//   // =======================================================

//   const [activeCategory, setActiveCategory] =
//     useState<PromptCategory>("coding");

//   // =======================================================
//   // AI MODEL STATE
//   // =======================================================

//   const [selectedModel, setSelectedModel] =
//     useState<AIModelId>("echogpt-fast");

//   // =======================================================
//   // RESPONSE INDEX
//   // =======================================================
//   //
//   // Each prompt has its own response counter.
//   //
//   // Example:
//   //
//   // explain-react:
//   // 0 → 1 → 2 → 0
//   //
//   // typescript:
//   // 0 → 1 → 2 → 0
//   //
//   // Each prompt is independent.
//   // =======================================================

//   const [responseIndexes, setResponseIndexes] =
//     useState<Record<string, number>>({});

//   // =======================================================
//   // SELECTED PROMPT
//   // =======================================================

//   const [selectedPromptId, setSelectedPromptId] =
//     useState<string | null>(null);

//   // =======================================================
//   // GENERATING STATE
//   // =======================================================

//   const [isGenerating, setIsGenerating] =
//     useState(false);

//   // =======================================================
//   // TOAST STATE
//   // =======================================================

//   const [toast, setToast] =
//     useState<ToastState>({
//       visible: false,
//       message: "",
//       type: "success",
//     });

//   // =======================================================
//   // TOAST TIMER
//   // =======================================================

//   const toastTimerRef =
//     useRef<number | null>(null);

//   // =======================================================
//   // ACTIVE PROMPTS
//   // =======================================================

//   const activePrompts =
//     promptSuggestions[activeCategory];

//   // =======================================================
//   // CURRENT CONVERSATION
//   // =======================================================

//   const currentStoredConversation =
//     storedConversation;

//   // =======================================================
//   // SHOW TOAST
//   // =======================================================

//   const showToast = useCallback(
//     (
//       message: string,
//       type: ToastType = "success",
//     ) => {
//       if (toastTimerRef.current !== null) {
//         window.clearTimeout(
//           toastTimerRef.current,
//         );
//       }

//       setToast({
//         visible: true,
//         message,
//         type,
//       });

//       toastTimerRef.current =
//         window.setTimeout(() => {
//           setToast((previous) => ({
//             ...previous,
//             visible: false,
//           }));

//           toastTimerRef.current = null;
//         }, 1000);
//     },
//     [],
//   );

//   // =======================================================
//   // FIND PROMPT
//   // =======================================================

//   const findPromptById = useCallback(
//     (
//       promptId: string,
//     ): PromptSuggestion | undefined => {
//       return Object.values(
//         promptSuggestions,
//       )
//         .flat()
//         .find(
//           (prompt) =>
//             prompt.id === promptId,
//         );
//     },
//     [],
//   );

//   // =======================================================
//   // PROMPT CLICK
//   // =======================================================

//   const handlePromptClick = (
//     prompt: PromptSuggestion,
//   ) => {
//     setMessage(prompt.prompt);

//     setSelectedPromptId(prompt.id);

//     showToast("Prompt added");
//   };

//   // =======================================================
//   // GET NEXT PREDEFINED RESPONSE
//   // =======================================================

//   const getNextResponse = (
//     promptId: string,
//   ) => {
//     const prompt =
//       findPromptById(promptId);

//     if (!prompt) {
//       return null;
//     }

//     const currentIndex =
//       responseIndexes[promptId] ?? 0;

//     const response =
//       prompt.responses[
//         currentIndex %
//           prompt.responses.length
//       ];

//     setResponseIndexes(
//       (previous) => ({
//         ...previous,
//         [promptId]:
//           (currentIndex + 1) %
//           prompt.responses.length,
//       }),
//     );

//     return response;
//   };

//   // =======================================================
//   // CURRENT MODEL
//   // =======================================================

//   const getCurrentModel = () => {
//     return (
//       aiModels.find(
//         (model) =>
//           model.id === selectedModel,
//       ) ?? aiModels[0]
//     );
//   };

//   // =======================================================
//   // GET / CREATE CONVERSATION ID
//   // =======================================================

//   const getConversationId = (): string => {
//     if (conversationIdRef.current) {
//       return conversationIdRef.current;
//     }

//     const newConversationId =
//       crypto.randomUUID();

//     conversationIdRef.current =
//       newConversationId;

//     setConversationId(
//       newConversationId,
//     );

//     return newConversationId;
//   };

//   // =======================================================
//   // SAVE CURRENT CONVERSATION
//   // =======================================================

//   const saveCurrentConversation = (
//     updatedMessages: ChatMessage[],
//     currentConversationId: string,
//   ) => {
//     if (
//       updatedMessages.length === 0
//     ) {
//       return;
//     }

//     const history =
//       getChatHistory();

//     const existingConversation =
//       history.find(
//         (item) =>
//           item.id ===
//           currentConversationId,
//       );

//     const firstUserMessage =
//       updatedMessages.find(
//         (item) =>
//           item.role === "user",
//       );

//     const title =
//       firstUserMessage?.content
//         .trim()
//         .slice(0, 50) ||
//       "New Chat";

//     const conversation: ChatConversation =
//       {
//         id: currentConversationId,

//         title,

//         messages: updatedMessages,

//         createdAt:
//           existingConversation?.createdAt ??
//           new Date().toISOString(),

//         updatedAt:
//           new Date().toISOString(),
//       };

//     saveConversation(
//       conversation,
//     );
//   };

//   // =======================================================
//   // SEND MESSAGE
//   // =======================================================

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>,
//   ) => {
//     event.preventDefault();

//     const trimmedMessage =
//       message.trim();

//     if (
//       !trimmedMessage ||
//       isGenerating
//     ) {
//       return;
//     }

//     // -----------------------------------------------------
//     // Store current values
//     // -----------------------------------------------------

//     const currentMessage =
//       trimmedMessage;

//     const currentPromptId =
//       selectedPromptId;

//     const currentModel =
//       getCurrentModel();

//     const currentConversationId =
//       getConversationId();

//     // -----------------------------------------------------
//     // USER MESSAGE
//     // -----------------------------------------------------

//     const userMessage: ChatMessage = {
//       id: crypto.randomUUID(),

//       role: "user",

//       content: currentMessage,

//       promptId:
//         currentPromptId ??
//         undefined,
//     };

//     // -----------------------------------------------------
//     // ADD USER MESSAGE
//     // -----------------------------------------------------

//     const messagesAfterUser: ChatMessage[] =
//       [
//         ...messages,
//         userMessage,
//       ];

//     setMessages(
//       messagesAfterUser,
//     );

//     // -----------------------------------------------------
//     // SAVE USER MESSAGE
//     // -----------------------------------------------------

//     saveCurrentConversation(
//       messagesAfterUser,
//       currentConversationId,
//     );

//     // -----------------------------------------------------
//     // CLEAR INPUT
//     // -----------------------------------------------------

//     setMessage("");

//     setSelectedPromptId(null);

//     // -----------------------------------------------------
//     // START GENERATING
//     // -----------------------------------------------------

//     setIsGenerating(true);

//     showToast(
//       "Generating response...",
//       "loading",
//     );

//     // -----------------------------------------------------
//     // SIMULATE AI
//     // -----------------------------------------------------

//     await new Promise<void>(
//       (resolve) => {
//         window.setTimeout(
//           resolve,
//           1000,
//         );
//       },
//     );

//     // -----------------------------------------------------
//     // ASSISTANT MESSAGE
//     // -----------------------------------------------------

//     let assistantMessage: ChatMessage;

//     // -----------------------------------------------------
//     // PREDEFINED PROMPT
//     // -----------------------------------------------------

//     if (currentPromptId) {
//       const response =
//         getNextResponse(
//           currentPromptId,
//         );

//       if (response) {
//         assistantMessage = {
//           id: crypto.randomUUID(),

//           role: "assistant",

//           content:
//             response.content,

//           highlights:
//             response.highlights,

//           promptId:
//             currentPromptId,

//           model:
//             currentModel.name,
//         };
//       } else {
//         assistantMessage = {
//           id: crypto.randomUUID(),

//           role: "assistant",

//           content:
//             "I could not find a predefined response for this prompt.",

//           promptId:
//             currentPromptId,

//           model:
//             currentModel.name,
//         };
//       }
//     }

//     // -----------------------------------------------------
//     // NORMAL USER MESSAGE
//     // -----------------------------------------------------

//     else {
//       assistantMessage = {
//         id: crypto.randomUUID(),

//         role: "assistant",

//         content:
//           "Your message has been received. Connect your AI API here to generate a real response from EchoGPT.",

//         highlights: [
//           "Frontend chat interface is working",
//           "Prompt state is managed locally",
//           "AI API can be connected next",
//         ],

//         model:
//           currentModel.name,
//       };
//     }

//     // -----------------------------------------------------
//     // ADD ASSISTANT MESSAGE
//     // -----------------------------------------------------

//     const messagesAfterAssistant: ChatMessage[] =
//       [
//         ...messagesAfterUser,
//         assistantMessage,
//       ];

//     setMessages(
//       messagesAfterAssistant,
//     );

//     // -----------------------------------------------------
//     // SAVE COMPLETE CONVERSATION
//     // -----------------------------------------------------

//     saveCurrentConversation(
//       messagesAfterAssistant,
//       currentConversationId,
//     );

//     // -----------------------------------------------------
//     // STOP GENERATING
//     // -----------------------------------------------------

//     setIsGenerating(false);

//     showToast(
//       "Response ready",
//     );
//   };

//   // =======================================================
//   // ENTER KEY
//   // =======================================================

//   const handleKeyDown = (
//     event: KeyboardEvent<HTMLTextAreaElement>,
//   ) => {
//     if (
//       event.key === "Enter" &&
//       !event.shiftKey
//     ) {
//       event.preventDefault();

//       event.currentTarget.form?.requestSubmit();
//     }
//   };

//   // =======================================================
//   // REGENERATE RESPONSE
//   // =======================================================

//   const handleRegenerate = async (
//     promptId?: string,
//   ) => {
//     if (
//       !promptId ||
//       isGenerating
//     ) {
//       return;
//     }

//     const currentModel =
//       getCurrentModel();

//     const currentConversationId =
//       getConversationId();

//     setIsGenerating(true);

//     showToast(
//       "Generating another response...",
//       "loading",
//     );

//     // -----------------------------------------------------
//     // SIMULATE GENERATION
//     // -----------------------------------------------------

//     await new Promise<void>(
//       (resolve) => {
//         window.setTimeout(
//           resolve,
//           1000,
//         );
//       },
//     );

//     // -----------------------------------------------------
//     // NEXT RESPONSE
//     // -----------------------------------------------------

//     const response =
//       getNextResponse(
//         promptId,
//       );

//     if (response) {
//       const assistantMessage: ChatMessage =
//         {
//           id: crypto.randomUUID(),

//           role: "assistant",

//           content:
//             response.content,

//           highlights:
//             response.highlights,

//           promptId,

//           model:
//             currentModel.name,
//         };

//       const updatedMessages: ChatMessage[] =
//         [
//           ...messages,
//           assistantMessage,
//         ];

//       setMessages(
//         updatedMessages,
//       );

//       saveCurrentConversation(
//         updatedMessages,
//         currentConversationId,
//       );
//     }

//     setIsGenerating(false);

//     showToast(
//       "New response ready",
//     );
//   };

//   // =======================================================
//   // RENDER
//   // =======================================================

//   return (
//     <div className="flex h-full min-h-0 flex-col bg-background">
//       {/* ===================================================
//           TOAST
//       =================================================== */}

//       <ChatToast
//         visible={toast.visible}
//         message={toast.message}
//         type={toast.type}
//       />

//       {/* ===================================================
//           HEADER
//       =================================================== */}

//       <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
//         {/* Logo */}

//         <div className="flex items-center gap-3">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
//             <Sparkles className="h-4 w-4 text-white" />
//           </div>

//           <div>
//             <h1 className="text-sm font-semibold text-foreground">
//               EchoGPT
//             </h1>

//             <p className="hidden text-[10px] text-muted-foreground sm:block">
//               AI Workspace
//             </p>
//           </div>
//         </div>

//         {/* Demo status */}

//         <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
//           <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

//           <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
//             Demo mode
//           </span>
//         </div>
//       </header>

//       {/* ===================================================
//           MAIN CONTENT
//       =================================================== */}

//       <main className="min-h-0 flex-1 overflow-y-auto">
//         {/* =================================================
//             EMPTY STATE
//         ================================================= */}

//         {messages.length === 0 ? (
//           <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
//             {/* Welcome */}

//             <div className="mx-auto w-full max-w-3xl text-center">
//               <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-xl shadow-blue-500/20">
//                 <Sparkles className="h-6 w-6 text-white" />
//               </div>

//               <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//                 What can I help you build?
//               </h2>

//               <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
//                 Choose a prompt below or write
//                 your own instruction to start
//                 exploring EchoGPT.
//               </p>
//             </div>

//             {/* =================================================
//                 CATEGORIES
//             ================================================= */}

//             <div className="mx-auto mt-8 w-full max-w-4xl">
//               <div className="flex gap-2 overflow-x-auto pb-2">
//                 {categories.map(
//                   (category) => {
//                     const isActive =
//                       activeCategory ===
//                       category.id;

//                     return (
//                       <button
//                         key={
//                           category.id
//                         }
//                         type="button"
//                         onClick={() =>
//                           setActiveCategory(
//                             category.id,
//                           )
//                         }
//                         className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
//                           isActive
//                             ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
//                             : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
//                         }`}
//                       >
//                         {
//                           category.label
//                         }
//                       </button>
//                     );
//                   },
//                 )}
//               </div>
//             </div>

//             {/* =================================================
//                 PROMPT CARDS
//             ================================================= */}

//             <div className="mx-auto mt-4 grid w-full max-w-4xl gap-3 sm:grid-cols-2">
//               {activePrompts.map(
//                 (prompt) => (
//                   <button
//                     key={prompt.id}
//                     type="button"
//                     onClick={() =>
//                       handlePromptClick(
//                         prompt,
//                       )
//                     }
//                     className="group rounded-2xl border border-border bg-card p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5"
//                   >
//                     <div className="mb-4 flex items-center justify-between">
//                       <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-500 transition group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
//                         <Sparkles className="h-4 w-4" />
//                       </div>

//                       <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
//                         Try
//                       </span>
//                     </div>

//                     <h3 className="text-sm font-semibold text-foreground transition-colors group-hover:text-cyan-500">
//                       {prompt.title}
//                     </h3>

//                     <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
//                       {
//                         prompt.description
//                       }
//                     </p>
//                   </button>
//                 ),
//               )}
//             </div>

//             <p className="mt-6 text-center text-[11px] text-muted-foreground">
//               Click a prompt to add it to your
//               message.
//             </p>
//           </div>
//         ) : (
//           /* =================================================
//              CHAT MESSAGES
//           ================================================= */

//           <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
//             <div className="space-y-8">
//               {messages.map(
//                 (item) => (
//                   <div
//                     key={item.id}
//                   >
//                     {/* =================================================
//                         USER MESSAGE
//                     ================================================= */}

//                     {item.role ===
//                     "user" ? (
//                       <div className="flex justify-end">
//                         <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm leading-6 text-white shadow-sm">
//                           {
//                             item.content
//                           }
//                         </div>
//                       </div>
//                     ) : (
//                       /* =================================================
//                          AI RESPONSE
//                       ================================================= */

//                       <ChatResponse
//                         content={
//                           item.content
//                         }
//                         highlights={
//                           item.highlights
//                         }
//                         model={
//                           item.model
//                         }
//                         onRegenerate={
//                           item.promptId
//                             ? () =>
//                                 handleRegenerate(
//                                   item.promptId,
//                                 )
//                             : undefined
//                         }
//                       />
//                     )}
//                   </div>
//                 ),
//               )}

//               {/* =================================================
//                   GENERATING INDICATOR
//               ================================================= */}

//               {isGenerating && (
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
//                     <Sparkles className="h-4 w-4" />
//                   </div>

//                   <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5">
//                     <Loader2 className="h-3.5 w-3.5 animate-spin text-cyan-500" />

//                     <span className="text-xs text-muted-foreground">
//                       EchoGPT is thinking...
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </main>

//       {/* ===================================================
//           INPUT AREA
//       =================================================== */}

//       <div className="shrink-0 border-t border-border bg-background p-3 sm:p-4">
//         <div className="mx-auto w-full max-w-4xl">
//           {/* =================================================
//               AI MODEL SELECTOR
//           ================================================= */}

//           <div className="mb-2">
//             <AIModelSelector
//               selectedModel={
//                 selectedModel
//               }
//               onModelChange={
//                 setSelectedModel
//               }
//             />
//           </div>

//           {/* =================================================
//               CHAT FORM
//           ================================================= */}

//           <form
//             onSubmit={
//               handleSubmit
//             }
//           >
//             <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/10">
//               {/* Textarea */}

//               <textarea
//                 value={message}
//                 disabled={
//                   isGenerating
//                 }
//                 onChange={(event) => {
//                   const value =
//                     event.target.value;

//                   setMessage(value);

//                   /*
//                    * If user manually changes
//                    * a predefined prompt,
//                    * treat it as a normal message.
//                    */

//                   if (
//                     value !==
//                     findPromptById(
//                       selectedPromptId ??
//                         "",
//                     )?.prompt
//                   ) {
//                     setSelectedPromptId(
//                       null,
//                     );
//                   }
//                 }}
//                 onKeyDown={
//                   handleKeyDown
//                 }
//                 placeholder={
//                   isGenerating
//                     ? "EchoGPT is generating..."
//                     : "Message EchoGPT..."
//                 }
//                 rows={1}
//                 maxLength={4000}
//                 aria-label="Message EchoGPT"
//                 className="min-h-14 max-h-48 w-full resize-none bg-transparent px-4 py-4 pr-14 text-sm leading-6 text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-60"
//               />

//               {/* =================================================
//                   SEND BUTTON
//               ================================================= */}

//               <button
//                 type="submit"
//                 disabled={
//                   !message.trim() ||
//                   isGenerating
//                 }
//                 aria-label="Send message"
//                 title={
//                   isGenerating
//                     ? "Generating response"
//                     : "Send message"
//                 }
//                 className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
//               >
//                 {isGenerating ? (
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 ) : (
//                   <Send className="h-4 w-4" />
//                 )}
//               </button>
//             </div>

//             {/* Footer text */}

//             <p className="mt-2 text-center text-[10px] text-muted-foreground">
//               EchoGPT Demo · Responses are
//               currently predefined
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


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

// =========================================================
// TYPES
// =========================================================

type ToastType = "success" | "loading";

type ToastState = {
  visible: boolean;
  message: string;
  type: ToastType;
};

// =========================================================
// CATEGORIES
// =========================================================

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

// =========================================================
// MODEL VALIDATION
// =========================================================

function isAIModelId(
  value: string | null,
): value is AIModelId {
  return aiModels.some(
    (model) => model.id === value,
  );
}

// =========================================================
// COMPONENT
// =========================================================

export default function ChatDashboard() {
  const searchParams = useSearchParams();

  // =======================================================
  // URL PARAMETERS
  // =======================================================

  const historyConversationId =
    searchParams.get("conversation");

  const modelFromUrl =
    searchParams.get("model");

  // =======================================================
  // INITIAL MODEL
  // =======================================================

  const initialModel: AIModelId =
    isAIModelId(modelFromUrl)
      ? modelFromUrl
      : "echogpt-fast";

  // =======================================================
  // INITIAL CONVERSATION
  // =======================================================

  const initialConversation =
    historyConversationId
      ? getChatHistory().find(
          (conversation) =>
            conversation.id ===
            historyConversationId,
        ) ?? null
      : null;

  // =======================================================
  // STATE
  // =======================================================

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState<ChatMessage[]>(
      () =>
        initialConversation?.messages ??
        [],
    );

  const [conversationId, setConversationId] =
    useState<string | null>(
      () =>
        initialConversation?.id ??
        null,
    );

  const conversationIdRef =
    useRef<string | null>(
      initialConversation?.id ??
        null,
    );

  const [activeCategory, setActiveCategory] =
    useState<PromptCategory>("coding");

  const [selectedModel, setSelectedModel] =
    useState<AIModelId>(
      initialModel,
    );

  // =======================================================
  // RESPONSE INDEX
  // =======================================================

  /*
   * Each prompt has its own response counter.
   *
   * Example:
   *
   * explain-react
   * 0 → 1 → 2 → 0
   *
   * typescript
   * 0 → 1 → 2 → 0
   */

  const [responseIndexes, setResponseIndexes] =
    useState<Record<string, number>>({});

  // =======================================================
  // SELECTED PROMPT
  // =======================================================

  const [selectedPromptId, setSelectedPromptId] =
    useState<string | null>(null);

  // =======================================================
  // GENERATING
  // =======================================================

  const [isGenerating, setIsGenerating] =
    useState(false);

  // =======================================================
  // TOAST
  // =======================================================

  const [toast, setToast] =
    useState<ToastState>({
      visible: false,
      message: "",
      type: "success",
    });

  const toastTimerRef =
    useRef<number | null>(null);

  // =======================================================
  // ACTIVE PROMPTS
  // =======================================================

  const activePrompts =
    promptSuggestions[activeCategory];

  // =======================================================
  // SHOW TOAST
  // =======================================================

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
        }, 1000);
    },
    [],
  );

  // =======================================================
  // FIND PROMPT
  // =======================================================

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

  // =======================================================
  // PROMPT CLICK
  // =======================================================

  const handlePromptClick = (
    prompt: PromptSuggestion,
  ) => {
    setMessage(prompt.prompt);

    setSelectedPromptId(prompt.id);

    showToast("Prompt added");
  };

  // =======================================================
  // GET NEXT PREDEFINED RESPONSE
  // =======================================================

  const getNextResponse = (
    promptId: string,
  ) => {
    const prompt =
      findPromptById(promptId);

    if (!prompt) {
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

  // =======================================================
  // CURRENT MODEL
  // =======================================================

  const getCurrentModel = () => {
    return (
      aiModels.find(
        (model) =>
          model.id === selectedModel,
      ) ?? aiModels[0]
    );
  };

  // =======================================================
  // GET / CREATE CONVERSATION ID
  // =======================================================

  const getConversationId = (): string => {
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

  // =======================================================
  // SAVE CURRENT CONVERSATION
  // =======================================================

  const saveCurrentConversation = (
    updatedMessages: ChatMessage[],
    currentConversationId: string,
  ) => {
    if (
      updatedMessages.length === 0
    ) {
      return;
    }

    const history =
      getChatHistory();

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

  // =======================================================
  // SEND MESSAGE
  // =======================================================

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

    // -----------------------------------------------------
    // CURRENT VALUES
    // -----------------------------------------------------

    const currentMessage =
      trimmedMessage;

    const currentPromptId =
      selectedPromptId;

    const currentModel =
      getCurrentModel();

    const currentConversationId =
      getConversationId();

    // -----------------------------------------------------
    // USER MESSAGE
    // -----------------------------------------------------

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),

      role: "user",

      content: currentMessage,

      promptId:
        currentPromptId ??
        undefined,
    };

    // -----------------------------------------------------
    // UPDATE MESSAGES
    // -----------------------------------------------------

    const messagesAfterUser: ChatMessage[] =
      [
        ...messages,
        userMessage,
      ];

    setMessages(
      messagesAfterUser,
    );

    // -----------------------------------------------------
    // SAVE USER MESSAGE
    // -----------------------------------------------------

    saveCurrentConversation(
      messagesAfterUser,
      currentConversationId,
    );

    // -----------------------------------------------------
    // CLEAR INPUT
    // -----------------------------------------------------

    setMessage("");

    setSelectedPromptId(null);

    // -----------------------------------------------------
    // GENERATING
    // -----------------------------------------------------

    setIsGenerating(true);

    showToast(
      "Generating response...",
      "loading",
    );

    // -----------------------------------------------------
    // DEMO DELAY
    // -----------------------------------------------------

    await new Promise<void>(
      (resolve) => {
        window.setTimeout(
          resolve,
          1000,
        );
      },
    );

    // -----------------------------------------------------
    // ASSISTANT MESSAGE
    // -----------------------------------------------------

    let assistantMessage: ChatMessage;

    // -----------------------------------------------------
    // PREDEFINED PROMPT
    // -----------------------------------------------------

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

          highlights:
            response.highlights,

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
            "I could not find a predefined response for this prompt.",

          promptId:
            currentPromptId,

          model:
            currentModel.name,
        };
      }
    }

    // -----------------------------------------------------
    // NORMAL MESSAGE
    // -----------------------------------------------------

    else {
      assistantMessage = {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
          "Your message has been received. Connect your AI API here to generate a real response from EchoGPT.",

        highlights: [
          "Frontend chat interface is working",
          "Prompt state is managed locally",
          "AI API can be connected next",
        ],

        model:
          currentModel.name,
      };
    }

    // -----------------------------------------------------
    // ADD ASSISTANT MESSAGE
    // -----------------------------------------------------

    const messagesAfterAssistant: ChatMessage[] =
      [
        ...messagesAfterUser,
        assistantMessage,
      ];

    setMessages(
      messagesAfterAssistant,
    );

    // -----------------------------------------------------
    // SAVE COMPLETE CONVERSATION
    // -----------------------------------------------------

    saveCurrentConversation(
      messagesAfterAssistant,
      currentConversationId,
    );

    // -----------------------------------------------------
    // COMPLETE
    // -----------------------------------------------------

    setIsGenerating(false);

    showToast(
      "Response ready",
    );
  };

  // =======================================================
  // KEYBOARD HANDLER
  // =======================================================

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

  // =======================================================
  // REGENERATE
  // =======================================================

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

    // -----------------------------------------------------
    // DEMO DELAY
    // -----------------------------------------------------

    await new Promise<void>(
      (resolve) => {
        window.setTimeout(
          resolve,
          1000,
        );
      },
    );

    // -----------------------------------------------------
    // NEXT RESPONSE
    // -----------------------------------------------------

    const response =
      getNextResponse(
        promptId,
      );

    if (response) {
      const assistantMessage: ChatMessage =
        {
          id: crypto.randomUUID(),

          role: "assistant",

          content:
            response.content,

          highlights:
            response.highlights,

          promptId,

          model:
            currentModel.name,
        };

      const updatedMessages: ChatMessage[] =
        [
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

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      {/* =================================================
          TOAST
      ================================================= */}

      <ChatToast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
      />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
        {/* Logo */}

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

        {/* Current model */}

        <div className="flex items-center gap-2">
          <span className="hidden text-xs text-muted-foreground sm:block">
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

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="min-h-0 flex-1 overflow-y-auto">
        {/* =================================================
            EMPTY STATE
        ================================================= */}

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
                Choose a prompt below or write
                your own instruction to start
                exploring EchoGPT.
              </p>
            </div>

            {/* =================================================
                CATEGORIES
            ================================================= */}

            <div className="mx-auto mt-8 w-full max-w-4xl">
              <div className="flex gap-2 overflow-x-auto pb-2">
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
                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                          isActive
                            ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                            : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
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

            {/* =================================================
                PROMPTS
            ================================================= */}

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
                      {
                        prompt.description
                      }
                    </p>
                  </button>
                ),
              )}
            </div>

            <p className="mt-6 text-center text-[11px] text-muted-foreground">
              Click a prompt to add it to your
              message.
            </p>
          </div>
        ) : (
          /* =================================================
             CHAT
          ================================================= */

          <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
            <div className="space-y-8">
              {messages.map(
                (item) => (
                  <div
                    key={item.id}
                  >
                    {item.role ===
                    "user" ? (
                      /* USER MESSAGE */

                      <div className="flex justify-end">
                        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm leading-6 text-white shadow-sm">
                          {
                            item.content
                          }
                        </div>
                      </div>
                    ) : (
                      /* AI RESPONSE */

                      <ChatResponse
                        content={
                          item.content
                        }
                        highlights={
                          item.highlights
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

              {/* =================================================
                  GENERATING
              ================================================= */}

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

      {/* =================================================
          INPUT AREA
      ================================================= */}

      <div className="shrink-0 border-t border-border bg-background p-3 sm:p-4">
        <div className="mx-auto w-full max-w-4xl">
          {/* =================================================
              MODEL SELECTOR
          ================================================= */}

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

          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={
              handleSubmit
            }
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/10">
              {/* Textarea */}

              <textarea
                value={message}
                disabled={
                  isGenerating
                }
                onChange={(event) => {
                  const value =
                    event.target.value;

                  setMessage(value);

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

              {/* Send */}

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

            {/* Footer */}

            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              EchoGPT Demo · Responses are
              currently predefined
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
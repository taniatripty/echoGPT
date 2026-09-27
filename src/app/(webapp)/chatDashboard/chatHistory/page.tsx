// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import {
//   ArrowLeft,
//   Clock,
//   MessageSquare,
//   Trash2,
// } from "lucide-react";

// import {
//   deleteConversation,
//   getChatHistory,
// } from "@/lib/chatHistory";

// import type { ChatConversation } from "@/types/chat.types";

// export default function ChatHistoryPage() {
//   // =========================================================
//   // HISTORY STATE
//   // =========================================================
//   //
//   // We load localStorage directly during state initialization.
//   //
//   // Do NOT use:
//   //
//   // useEffect(() => {
//   //   setHistory(getChatHistory());
//   // }, []);
//   //
//   // That can trigger:
//   // "Calling setState synchronously within an effect"
//   //
//   const [history, setHistory] =
//     useState<ChatConversation[]>(
//       () => getChatHistory(),
//     );

//   // =========================================================
//   // DELETE CONVERSATION
//   // =========================================================

//   const handleDelete = (
//     conversationId: string,
//   ) => {
//     // Remove from localStorage
//     deleteConversation(conversationId);

//     // Remove immediately from the UI
//     setHistory(
//       (previousHistory) =>
//         previousHistory.filter(
//           (conversation) =>
//             conversation.id !==
//             conversationId,
//         ),
//     );
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <main className="min-h-screen bg-background text-foreground">
//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
//         <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
//           {/* Back to Chat */}

//           <Link
//             href="/chatDashboard"
//             className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//           >
//             <ArrowLeft className="h-4 w-4" />

//             <span className="font-medium">
//               Back to Chat
//             </span>
//           </Link>

//           {/* Logo */}

//           <Link
//             href="/chatDashboard"
//             className="flex items-center gap-2"
//           >
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">
//               <span className="font-bold text-white">
//                 E
//               </span>
//             </div>

//             <span className="font-semibold text-foreground">
//               Echo
//               <span className="text-cyan-500">
//                 GPT
//               </span>
//             </span>
//           </Link>
//         </div>
//       </header>

//       {/* =====================================================
//           CONTENT
//       ===================================================== */}

//       <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
//         {/* ===================================================
//             PAGE HEADING
//         =================================================== */}

//         <div className="mb-8">
//           {/* Icon + Badge */}

//           <div className="mb-3 flex items-center gap-2">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-cyan-500">
//               <MessageSquare className="h-5 w-5" />
//             </div>

//             <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400">
//               Local History
//             </span>
//           </div>

//           {/* Title */}

//           <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//             Chat History
//           </h1>

//           {/* Description */}

//           <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
//             Continue your previous conversations
//             or remove chats you no longer need.
//           </p>
//         </div>

//         {/* ===================================================
//             EMPTY STATE
//         =================================================== */}

//         {history.length === 0 ? (
//           <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 px-6 text-center">
//             {/* Empty Icon */}

//             <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
//               <MessageSquare className="h-7 w-7 text-cyan-500" />
//             </div>

//             {/* Empty Title */}

//             <h2 className="text-xl font-semibold text-foreground">
//               No conversations yet
//             </h2>

//             {/* Empty Description */}

//             <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
//               Your conversations will appear
//               here after you start chatting with
//               EchoGPT.
//             </p>

//             {/* Start Chat */}

//             <Link
//               href="/chatDashboard"
//               className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] hover:shadow-blue-500/30"
//             >
//               <MessageSquare className="h-4 w-4" />

//               Start a New Chat
//             </Link>
//           </div>
//         ) : (
//           /* =================================================
//              HISTORY LIST
//           ================================================= */

//           <div className="space-y-3">
//             {history.map(
//               (conversation) => (
//                 <div
//                   key={conversation.id}
//                   className="group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-cyan-500/30 hover:shadow-md"
//                 >
//                   <div className="flex items-start justify-between gap-4">
//                     {/* =========================================
//                         CONVERSATION LINK
//                     ========================================= */}

//                     <Link
//                       href={`/chatDashboard?conversation=${encodeURIComponent(
//                         conversation.id,
//                       )}`}
//                       className="min-w-0 flex-1"
//                     >
//                       <div className="flex items-start gap-3">
//                         {/* Conversation Icon */}

//                         <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-500 transition-colors group-hover:from-cyan-500/20 group-hover:to-blue-500/20">
//                           <MessageSquare className="h-4 w-4" />
//                         </div>

//                         {/* Conversation Info */}

//                         <div className="min-w-0 flex-1">
//                           {/* Title */}

//                           <h2 className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-cyan-500">
//                             {conversation.title ||
//                               "Untitled Conversation"}
//                           </h2>

//                           {/* Metadata */}

//                           <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
//                             {/* Message count */}

//                             <span className="flex items-center gap-1">
//                               <MessageSquare className="h-3 w-3" />

//                               {
//                                 conversation
//                                   .messages
//                                   .length
//                               }{" "}
//                               {conversation
//                                 .messages
//                                 .length === 1
//                                 ? "message"
//                                 : "messages"}
//                             </span>

//                             {/* Updated date */}

//                             <span className="flex items-center gap-1">
//                               <Clock className="h-3 w-3" />

//                               {formatDate(
//                                 conversation.updatedAt,
//                               )}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>

//                     {/* =========================================
//                         DELETE BUTTON
//                     ========================================= */}

//                     <button
//                       type="button"
//                       onClick={() =>
//                         handleDelete(
//                           conversation.id,
//                         )
//                       }
//                       aria-label={`Delete ${
//                         conversation.title ||
//                         "conversation"
//                       }`}
//                       title="Delete conversation"
//                       className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-transparent text-muted-foreground opacity-70 transition-all hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-500 sm:opacity-0 sm:group-hover:opacity-100"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               ),
//             )}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

// // =========================================================
// // DATE FORMATTER
// // =========================================================

// function formatDate(
//   dateString: string,
// ): string {
//   const date = new Date(dateString);

//   // Invalid date
//   if (Number.isNaN(date.getTime())) {
//     return "Unknown date";
//   }

//   const now = new Date();

//   // =======================================================
//   // TODAY
//   // =======================================================

//   const isToday =
//     date.toDateString() ===
//     now.toDateString();

//   if (isToday) {
//     return `Today, ${date.toLocaleTimeString(
//       [],
//       {
//         hour: "numeric",
//         minute: "2-digit",
//       },
//     )}`;
//   }

//   // =======================================================
//   // YESTERDAY
//   // =======================================================

//   const yesterday =
//     new Date(now);

//   yesterday.setDate(
//     now.getDate() - 1,
//   );

//   const isYesterday =
//     date.toDateString() ===
//     yesterday.toDateString();

//   if (isYesterday) {
//     return `Yesterday, ${date.toLocaleTimeString(
//       [],
//       {
//         hour: "numeric",
//         minute: "2-digit",
//       },
//     )}`;
//   }

//   // =======================================================
//   // OLDER DATE
//   // =======================================================

//   return date.toLocaleDateString(
//     [],
//     {
//       month: "short",
//       day: "numeric",
//       year:
//         date.getFullYear() !==
//         now.getFullYear()
//           ? "numeric"
//           : undefined,
//     },
//   );
// }



"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Clock,
  MessageSquare,
  Trash2,
} from "lucide-react";

import {
  deleteConversation,
  getChatHistory,
} from "@/lib/chatHistory";

import type { ChatConversation } from "@/types/chat.types";

export default function ChatHistoryPage() {
  const [history, setHistory] = useState<ChatConversation[]>([]);
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);

  useEffect(() => {
    const loadHistory = () => {
      const savedHistory = getChatHistory();

      setHistory(savedHistory);
      setIsHistoryLoaded(true);
    };

    loadHistory();

    window.addEventListener(
      "echogpt-history-change",
      loadHistory,
    );

    window.addEventListener("storage", loadHistory);

    return () => {
      window.removeEventListener(
        "echogpt-history-change",
        loadHistory,
      );

      window.removeEventListener("storage", loadHistory);
    };
  }, []);

  const handleDelete = (conversationId: string) => {
    deleteConversation(conversationId);

    setHistory((previousHistory) =>
      previousHistory.filter(
        (conversation) =>
          conversation.id !== conversationId,
      ),
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/chatDashboard"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />

            <span className="font-medium">
              Back to Chat
            </span>
          </Link>

          <Link
            href="/chatDashboard"
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">
              <span className="font-bold text-white">
                E
              </span>
            </div>

            <span className="font-semibold text-foreground">
              Echo
              <span className="text-cyan-500">
                GPT
              </span>
            </span>
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-cyan-500">
              <MessageSquare className="h-5 w-5" />
            </div>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              Local History
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Chat History
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Continue your previous conversations or remove
            chats you no longer need.
          </p>
        </div>

        {!isHistoryLoaded ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 px-6 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <MessageSquare className="h-7 w-7 animate-pulse text-cyan-500" />
            </div>

            <p className="text-sm text-muted-foreground">
              Loading conversations...
            </p>
          </div>
        ) : history.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 px-6 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <MessageSquare className="h-7 w-7 text-cyan-500" />
            </div>

            <h2 className="text-xl font-semibold text-foreground">
              No conversations yet
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Your conversations will appear here after you
              start chatting with EchoGPT.
            </p>

            <Link
              href="/chatDashboard"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] hover:shadow-blue-500/30"
            >
              <MessageSquare className="h-4 w-4" />
              Start a New Chat
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((conversation) => {
              const messageCount =
                conversation.messages?.length ?? 0;

              return (
                <div
                  key={conversation.id}
                  className="group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:border-cyan-500/30 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Link
                      href={`/chatDashboard?conversation=${encodeURIComponent(
                        conversation.id,
                      )}`}
                      className="min-w-0 flex-1"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-500 transition-colors group-hover:from-cyan-500/20 group-hover:to-blue-500/20">
                          <MessageSquare className="h-4 w-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h2 className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-cyan-500">
                            {conversation.title ||
                              "Untitled Conversation"}
                          </h2>

                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />

                              {messageCount}{" "}
                              {messageCount === 1
                                ? "message"
                                : "messages"}
                            </span>

                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />

                              {formatDate(
                                conversation.updatedAt,
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(conversation.id)
                      }
                      aria-label={`Delete ${
                        conversation.title ||
                        "conversation"
                      }`}
                      title="Delete conversation"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-transparent text-muted-foreground opacity-70 transition-all hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-500 sm:opacity-0 sm:group-hover:opacity-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  const now = new Date();

  const isToday =
    date.toDateString() === now.toDateString();

  if (isToday) {
    return `Today, ${date.toLocaleTimeString(
      [],
      {
        hour: "numeric",
        minute: "2-digit",
      },
    )}`;
  }

  const yesterday = new Date(now);

  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    date.toDateString() ===
    yesterday.toDateString();

  if (isYesterday) {
    return `Yesterday, ${date.toLocaleTimeString(
      [],
      {
        hour: "numeric",
        minute: "2-digit",
      },
    )}`;
  }

  return date.toLocaleDateString(
    [],
    {
      month: "short",
      day: "numeric",
      year:
        date.getFullYear() !== now.getFullYear()
          ? "numeric"
          : undefined,
    },
  );
}
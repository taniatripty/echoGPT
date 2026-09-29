

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

import {
  ArrowLeft,
  Clock,
  LogOut,
  MessageSquare,
  Trash2,
} from "lucide-react";

import {
  deleteConversation,
  getChatHistory,
} from "@/lib/chatHistory";

import type { ChatConversation } from "@/types/chat.types";

import ThemeToggle from "@/components/layouts/ThemeToggle";

export default function ChatHistoryPage() {
  const { data: session } = useSession();

  const [history, setHistory] = useState<ChatConversation[]>([]);
  const [isHistoryLoaded, setIsHistoryLoaded] =
    useState(false);

  /* =====================================================
     USER INFORMATION
  ===================================================== */

  const userName = session?.user?.name ?? "EchoGPT User";

  const userEmail =
    session?.user?.email ?? "No email available";

  const userImage = session?.user?.image ?? null;

  const userInitial = userName
    .charAt(0)
    .toUpperCase();

  /* =====================================================
     LOAD CHAT HISTORY
  ===================================================== */

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

      window.removeEventListener(
        "storage",
        loadHistory,
      );
    };
  }, []);

  /* =====================================================
     DELETE CONVERSATION
  ===================================================== */

  const handleDelete = (conversationId: string) => {
    deleteConversation(conversationId);

    setHistory((previousHistory) =>
      previousHistory.filter(
        (conversation) =>
          conversation.id !== conversationId,
      ),
    );
  };

  /* =====================================================
     LOGOUT
  ===================================================== */

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden bg-background text-foreground">
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="z-40 shrink-0 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* =============================================
              LEFT SIDE
          ============================================= */}

          <div className="flex items-center gap-2">
            <Link
              href="/chatDashboard"
              aria-label="Back to Chat"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ArrowLeft className="size-4" />

              <span className="hidden font-medium sm:inline">
                Back to Chat
              </span>
            </Link>
          </div>

          {/* =============================================
              RIGHT SIDE
          ============================================= */}

          <div className="flex items-center gap-3">
            {/* ===========================================
                ECHOGPT LOGO
            =========================================== */}

            <Link
              href="/chatDashboard"
              aria-label="EchoGPT Dashboard"
              className="hidden items-center gap-2 sm:flex"
            >
              <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
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

            {/* ===========================================
                USER PROFILE
            =========================================== */}

            <div className="group relative">
              {/* Profile Button */}

              <button
                type="button"
                aria-label="Open user profile"
                title="Profile"
                className="flex size-9 items-center justify-center overflow-hidden rounded-full border border-border bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-sm font-semibold text-white shadow-sm transition hover:ring-2 hover:ring-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
              >
                {userImage ? (
                  <Image
                    src={userImage}
                    alt={userName}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>{userInitial}</span>
                )}
              </button>

              {/* =========================================
                  PROFILE DROPDOWN
              ========================================= */}

              <div
                className="
                  invisible absolute right-0 top-full z-50 mt-2 w-72
                  translate-y-1 opacity-0
                  transition-all duration-200
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  group-focus-within:visible
                  group-focus-within:translate-y-0
                  group-focus-within:opacity-100
                "
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl shadow-black/10 backdrop-blur-xl">
                  {/* =====================================
                      USER INFORMATION
                  ===================================== */}

                  <div className="border-b border-border p-4">
                    <div className="flex items-center gap-3">
                      {/* Large Avatar */}

                      <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-sm font-semibold text-white">
                        {userImage ? (
                          <Image
                            src={userImage}
                            alt={userName}
                            width={44}
                            height={44}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span>{userInitial}</span>
                        )}
                      </div>

                      {/* User Details */}

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {userName}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          {userEmail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =====================================
                      APPEARANCE
                  ===================================== */}

                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Appearance
                      </p>

                      <p className="text-[11px] text-muted-foreground">
                        Switch light and dark mode
                      </p>
                    </div>

                    <ThemeToggle />
                  </div>

                  {/* =====================================
                      LOGOUT
                  ===================================== */}

                  <div className="p-2">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-red-500/10 hover:text-red-500"
                    >
                      <LogOut className="size-4" />

                      <span>Log out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =================================================
          SCROLLABLE HISTORY CONTENT
      ================================================= */}

      <div className="flex-1 overflow-y-auto">
        <section className="mx-auto w-full max-w-5xl px-4 py-6 pb-10 sm:px-6 sm:py-10">
          {/* =============================================
              PAGE INTRODUCTION
          ============================================= */}

          <div className="mb-6 sm:mb-8">
            <div className="mb-3 flex items-center gap-2">
              {/* Icon */}

              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-cyan-500">
                <MessageSquare className="size-5" />
              </div>

              {/* Badge */}

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                Local History
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Chat History
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Continue your previous conversations or
              remove chats you no longer need.
            </p>
          </div>

          {/* =============================================
              LOADING STATE
          ============================================= */}

          {!isHistoryLoaded ? (
            <div className="flex min-h-[clamp(18rem,50vh,25rem)] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 px-6 py-10 text-center">
              <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <MessageSquare className="size-7 animate-pulse text-cyan-500" />
              </div>

              <p className="text-sm text-muted-foreground">
                Loading conversations...
              </p>
            </div>
          ) : history.length === 0 ? (
            /* ===========================================
               EMPTY STATE
            =========================================== */

            <div className="flex min-h-[clamp(18rem,50vh,25rem)] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 px-6 py-10 text-center">
              {/* Icon */}

              <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <MessageSquare className="size-7 text-cyan-500" />
              </div>

              {/* Title */}

              <h2 className="text-xl font-semibold text-foreground">
                No conversations yet
              </h2>

              {/* Description */}

              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Your conversations will appear here after
                you start chatting with EchoGPT.
              </p>

              {/* CTA */}

              <Link
                href="/chatDashboard"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] hover:shadow-blue-500/30"
              >
                <MessageSquare className="size-4" />

                Start a New Chat
              </Link>
            </div>
          ) : (
            /* ===========================================
               CONVERSATION LIST
            =========================================== */

            <div className="space-y-3">
              {history.map((conversation) => {
                const messageCount =
                  conversation.messages?.length ?? 0;

                return (
                  <article
                    key={conversation.id}
                    className="group rounded-2xl border border-border bg-card p-3.5 shadow-sm transition-all hover:border-cyan-500/30 hover:shadow-md sm:p-4"
                  >
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      {/* Conversation */}

                      <Link
                        href={`/chatDashboard?conversation=${encodeURIComponent(
                          conversation.id,
                        )}`}
                        className="min-w-0 flex-1"
                      >
                        <div className="flex items-start gap-3">
                          {/* Conversation Icon */}

                          <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-500 transition-colors group-hover:from-cyan-500/20 group-hover:to-blue-500/20">
                            <MessageSquare className="size-4" />
                          </div>

                          {/* Conversation Details */}

                          <div className="min-w-0 flex-1">
                            <h2 className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-cyan-500">
                              {conversation.title ||
                                "Untitled Conversation"}
                            </h2>

                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                              {/* Message Count */}

                              <span className="flex items-center gap-1">
                                <MessageSquare className="size-3" />

                                {messageCount}{" "}
                                {messageCount === 1
                                  ? "message"
                                  : "messages"}
                              </span>

                              {/* Date */}

                              <span className="flex items-center gap-1">
                                <Clock className="size-3" />

                                {formatDate(
                                  conversation.updatedAt,
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Delete Button */}

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
                        className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-transparent text-muted-foreground transition-all hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-500 sm:opacity-0 sm:group-hover:opacity-100"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/* =======================================================
   FORMAT CONVERSATION DATE
======================================================= */

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  const now = new Date();

  /* Today */

  const isToday =
    date.toDateString() === now.toDateString();

  if (isToday) {
    return `Today, ${date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    })}`;
  }

  /* Yesterday */

  const yesterday = new Date(now);

  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    date.toDateString() ===
    yesterday.toDateString();

  if (isYesterday) {
    return `Yesterday, ${date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    })}`;
  }

  /* Older */

  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year:
      date.getFullYear() !== now.getFullYear()
        ? "numeric"
        : undefined,
  });
}
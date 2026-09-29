
"use client";

import ChatSidebar from "@/components/chat/chatSidebar";
import { Menu } from "lucide-react";
import React, { useState } from "react";

export default function WebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <ChatSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =====================================================
          MAIN AREA
      ====================================================== */}

      <main className="min-w-0 flex-1 overflow-hidden">
        {/* =================================================
            MOBILE HEADER
        ================================================== */}

        <header className="flex h-14 shrink-0 items-center border-b border-border bg-background/95 px-4 backdrop-blur-xl md:hidden">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open navigation menu"
            title="Open navigation menu"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <Menu className="size-5" />
          </button>

          {/* Mobile logo */}

          <div className="ml-3 flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
              <span className="text-sm font-bold text-white">
                E
              </span>
            </div>

            <span className="text-sm font-semibold text-foreground">
              Echo<span className="text-cyan-500">GPT</span>
            </span>
          </div>
        </header>

        {/* =================================================
            PAGE CONTENT
        ================================================== */}

        <div className="h-[calc(100dvh-3.5rem)] overflow-hidden md:h-dvh">
          {children}
        </div>
      </main>
    </div>
  );
}
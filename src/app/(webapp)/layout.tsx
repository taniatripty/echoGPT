
import ChatSidebar from "@/components/chat/chatSidebar";
import React from "react";

export default function WebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return  (
  <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <ChatSidebar></ChatSidebar>

      {/* Chat Content */}
      <main className="min-w-0 flex-1 overflow-hidden">
        {children}
      </main>
    </div>)
}
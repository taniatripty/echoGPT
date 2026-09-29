import ChatDashboard from "@/components/chat/chatDashboard";
import { Suspense } from "react";


function ChatDashboardFallback() {
  return (
    <div className="flex h-full min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
        Loading EchoGPT...
      </div>
    </div>
  );
}

export default function ChatDashboardPage() {
  return (
    <Suspense fallback={<ChatDashboardFallback />}>
      <ChatDashboard />
    </Suspense>
  );
}
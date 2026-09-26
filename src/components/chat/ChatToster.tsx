"use client";

import { Check, Loader2, Sparkles } from "lucide-react";

interface ChatToastProps {
  message: string;
  type?: "success" | "loading";
  visible: boolean;
}

export default function ChatToast({
  message,
  type = "success",
  visible,
}: ChatToastProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed left-1/2 top-5 z-[100] -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full border border-border bg-background/95 px-4 py-2.5 shadow-xl shadow-black/10 backdrop-blur-xl">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            type === "loading"
              ? "bg-cyan-500/10 text-cyan-500"
              : "bg-emerald-500/10 text-emerald-500"
          }`}
        >
          {type === "loading" ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Check className="h-3.5 w-3.5" />
          )}
        </div>

        <span className="text-xs font-medium text-foreground">
          {message}
        </span>

        <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
      </div>
    </div>
  );
}
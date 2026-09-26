// "use client";

// import {
//   Bot,
//   Check,
//   Copy,
//   RefreshCw,
//   ThumbsDown,
//   ThumbsUp,
// } from "lucide-react";
// import { useState } from "react";

// interface ChatResponseProps {
//   content: string;
//   highlights?: string[];
//   model?: string;
//   onRegenerate?: () => void;
// }

// export default function ChatResponse({
//   content,
//   highlights = [],
//   model = "EchoGPT",
//   onRegenerate,
// }: ChatResponseProps) {
//   const [copied, setCopied] = useState(false);
//   const [feedback, setFeedback] = useState<"up" | "down" | null>(
//     null
//   );

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(content);

//       setCopied(true);

//       setTimeout(() => {
//         setCopied(false);
//       }, 1500);
//     } catch {
//       setCopied(false);
//     }
//   };

//   return (
//     <article className="w-full">
//       {/* AI identity */}
//       <div className="mb-3 flex items-center gap-3">
//         <div className="relative">
//           <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
//             <Bot className="h-5 w-5 text-white" />
//           </div>

//           <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500" />
//         </div>

//         <div>
//           <div className="flex items-center gap-2">
//             <p className="text-sm font-semibold text-foreground">
//               {model}
//             </p>

//             <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-600 dark:text-cyan-400">
//               AI
//             </span>
//           </div>

//           <p className="text-[11px] text-muted-foreground">
//             Generated response
//           </p>
//         </div>
//       </div>

//       {/* Response */}
//       <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
//         {/* Gradient accent */}
//         <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

//         <div className="p-5 sm:p-6">
//           {/* Quick answer label */}
//           <div className="mb-4 flex items-center gap-2">
//             <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

//             <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//               Response
//             </span>
//           </div>

//           {/* Main content */}
//           <p className="text-sm leading-7 text-foreground sm:text-[15px]">
//             {content}
//           </p>

//           {/* Highlights */}
//           {highlights.length > 0 && (
//             <div className="mt-6">
//               <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//                 Key points
//               </p>

//               <div className="grid gap-2 sm:grid-cols-2">
//                 {highlights.map((highlight) => (
//                   <div
//                     key={highlight}
//                     className="flex items-start gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2.5"
//                   >
//                     <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />

//                     <span className="text-xs leading-5 text-foreground">
//                       {highlight}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Action bar */}
//         <div className="flex items-center justify-between border-t border-border bg-muted/20 px-4 py-2.5">
//           <div className="flex items-center gap-1">
//             <button
//               type="button"
//               onClick={handleCopy}
//               aria-label="Copy response"
//               title="Copy response"
//               className="flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
//             >
//               {copied ? (
//                 <>
//                   <Check className="h-3.5 w-3.5 text-emerald-500" />
//                   Copied
//                 </>
//               ) : (
//                 <>
//                   <Copy className="h-3.5 w-3.5" />
//                   Copy
//                 </>
//               )}
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 setFeedback((current) =>
//                   current === "up" ? null : "up"
//                 )
//               }
//               aria-label="Like response"
//               title="Like"
//               className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
//                 feedback === "up"
//                   ? "bg-emerald-500/10 text-emerald-500"
//                   : "text-muted-foreground hover:bg-muted hover:text-foreground"
//               }`}
//             >
//               <ThumbsUp className="h-3.5 w-3.5" />
//             </button>

//             <button
//               type="button"
//               onClick={() =>
//                 setFeedback((current) =>
//                   current === "down" ? null : "down"
//                 )
//               }
//               aria-label="Dislike response"
//               title="Dislike"
//               className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
//                 feedback === "down"
//                   ? "bg-red-500/10 text-red-500"
//                   : "text-muted-foreground hover:bg-muted hover:text-foreground"
//               }`}
//             >
//               <ThumbsDown className="h-3.5 w-3.5" />
//             </button>
//           </div>

//           {onRegenerate && (
//             <button
//               type="button"
//               onClick={onRegenerate}
//               className="flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
//             >
//               <RefreshCw className="h-3.5 w-3.5" />
//               Regenerate
//             </button>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }
"use client";

import {
  Bot,
  Check,
  Copy,
  RefreshCw,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

interface ChatResponseProps {
  content: string;
  highlights?: string[];
  model?: string;
  onRegenerate?: () => void;
}

export default function ChatResponse({
  content,
  highlights = [],
  model = "EchoGPT",
  onRegenerate,
}: ChatResponseProps) {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<"up" | "down" | null>(
    null
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="w-full">
      {/* AI identity */}
      <div className="mb-3 flex items-center gap-3">
        <div className="relative">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
            <Bot className="h-5 w-5 text-white" />
          </div>

          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-foreground">
              {model}
            </p>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-600 dark:text-cyan-400">
              AI
            </span>
          </div>

          <p className="text-[11px] text-muted-foreground">
            Generated response
          </p>
        </div>
      </div>

      {/* Response */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {/* Gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

        <div className="p-5 sm:p-6">
          {/* Quick answer label */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />

            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Response
            </span>
          </div>

          {/* Main content */}
          <p className="text-sm leading-7 text-foreground sm:text-[15px]">
            {content}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key points
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2.5"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />

                    <span className="text-xs leading-5 text-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between border-t border-border bg-muted/20 px-4 py-2.5">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy response"
              title="Copy response"
              className="flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setFeedback((current) =>
                  current === "up" ? null : "up"
                )
              }
              aria-label="Like response"
              title="Like"
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                feedback === "up"
                  ? "bg-emerald-500/10 text-emerald-500"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() =>
                setFeedback((current) =>
                  current === "down" ? null : "down"
                )
              }
              aria-label="Dislike response"
              title="Dislike"
              className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                feedback === "down"
                  ? "bg-red-500/10 text-red-500"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <ThumbsDown className="h-3.5 w-3.5" />
            </button>
          </div>

          {onRegenerate && (
            <button
              type="button"
              onClick={onRegenerate}
              className="flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Regenerate
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
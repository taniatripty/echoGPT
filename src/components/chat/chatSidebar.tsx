
// "use client";

// import Link from "next/link";
// import {
//   History,
//   MessageSquare,
//   Plus,
//   Settings,
// } from "lucide-react";

// import ThemeToggle from "@/components/layouts/ThemeToggle";

// export default function ChatSidebar() {
//   return (
//     <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-background">
//       {/* Logo */}
//       <div className="flex h-16 items-center border-b border-border px-4">
//         <Link
//           href="/chatDashboard"
//           className="flex items-center gap-2"
//         >
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
//             <span className="font-bold text-white">
//               E
//             </span>
//           </div>

//           <span className="font-semibold text-foreground">
//             Echo<span className="text-cyan-500">GPT</span>
//           </span>
//         </Link>
//       </div>

//       {/* New Chat */}
//       <div className="p-3">
//         <button
//           type="button"
//           className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30"
//         >
//           <Plus className="h-4 w-4" />
//           New Chat
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-1 px-3">
//         <Link
//           href="/chatDashboard"
//           className="flex items-center gap-3 rounded-xl bg-muted px-3 py-2.5 text-sm font-medium text-foreground"
//         >
//           <MessageSquare className="h-4 w-4" />
//           Chat
//         </Link>

//         <Link
//           href="/chat/history"
//           className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
//         >
//           <History className="h-4 w-4" />
//           History
//         </Link>
//       </nav>

//       {/* Bottom actions */}
//       <div className="mt-auto border-t border-border p-3">
//         <div className="flex items-center justify-between gap-3">
//           <ThemeToggle />

//           <button
//             type="button"
//             aria-label="Settings"
//             title="Settings"
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-accent"
//           >
//             <Settings className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Crown,
  History,
  MessageSquare,
  Plus,
  Settings,
  Sparkles,
} from "lucide-react";

import ThemeToggle from "@/components/layouts/ThemeToggle";
import UpgradeModal from "../shared/upgradeModal";


export default function ChatSidebar() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] =
    useState(false);

  return (
    <>
      <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-background">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-border px-4">
          <Link
            href="/chatDashboard"
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
              <span className="font-bold text-white">E</span>
            </div>

            <span className="font-semibold text-foreground">
              Echo<span className="text-cyan-500">GPT</span>
            </span>
          </Link>
        </div>

        {/* New Chat */}
        <div className="p-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30"
          >
            <Plus className="h-4 w-4" />
            New Chat
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3">
          <Link
            href="/chatDashboard"
            className="flex items-center gap-3 rounded-xl bg-muted px-3 py-2.5 text-sm font-medium text-foreground"
          >
            <MessageSquare className="h-4 w-4" />
            Chat
          </Link>

          <Link
            href="/chat/history"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <History className="h-4 w-4" />
            History
          </Link>
        </nav>

        {/* Upgrade Pro Card */}
        <div className="px-3 pb-3">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-blue-500/20
              bg-gradient-to-br
              from-blue-500/10
              via-cyan-500/5
              to-violet-500/10
              p-3
              dark:border-blue-400/20
            "
          >
            {/* Decorative glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-20
                w-20
                rounded-full
                bg-blue-500/20
                blur-2xl
              "
            />

            <div className="relative">
              {/* Card Header */}
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-cyan-400
                    to-blue-600
                    text-white
                  "
                >
                  <Crown className="h-4 w-4" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-foreground">
                      EchoGPT Pro
                    </p>

                    <span
                      className="
                        rounded-full
                        bg-blue-500/10
                        px-1.5
                        py-0.5
                        text-[8px]
                        font-bold
                        uppercase
                        text-blue-600
                        dark:text-blue-400
                      "
                    >
                      Pro
                    </span>
                  </div>

                  <p className="text-[10px] text-muted-foreground">
                    Unlock more powerful AI
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-3 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-cyan-500" />

                  <span className="text-[10px] text-muted-foreground">
                    Premium AI models
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-cyan-500" />

                  <span className="text-[10px] text-muted-foreground">
                    Unlimited conversations
                  </span>
                </div>
              </div>

              {/* Open reusable modal */}
              <button
                type="button"
                onClick={() => setIsUpgradeModalOpen(true)}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  shadow-md
                  shadow-blue-500/20
                  transition
                  hover:shadow-blue-500/30
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:ring-offset-2
                "
              >
                <Sparkles className="h-3.5 w-3.5" />
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="border-t border-border p-3">
          <div className="flex items-center justify-between gap-3">
            <ThemeToggle />

            <button
              type="button"
              aria-label="Settings"
              title="Settings"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-background
                text-foreground
                transition-colors
                hover:bg-accent
              "
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Reusable Upgrade Modal */}
      <UpgradeModal
        open={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onUpgrade={async (plan, billingCycle) => {
          console.log("Plan:", plan);
          console.log("Billing:", billingCycle);

          // Connect your payment/checkout API here later.
        }}
      />
    </>
  );
}


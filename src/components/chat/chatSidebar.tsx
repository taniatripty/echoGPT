
// "use client";

// import Link from "next/link";
// import {
//   History,
//   MessageSquare,
//   Plus,
//   Settings,
//   Moon,
//   Sun,
// } from "lucide-react";

// import { useTheme } from "@/providers/ThemeProvider";


// export default function ChatSidebar() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-background">
//       {/* ================= LOGO ================= */}
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

//       {/* ================= NEW CHAT ================= */}
//       <div className="p-3">
//         <button
//           type="button"
//           className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30"
//         >
//           <Plus className="h-4 w-4" />
//           New Chat
//         </button>
//       </div>

//       {/* ================= NAVIGATION ================= */}
//       <nav className="flex-1 space-y-1 px-3">
//         <Link
//           href="/chat"
//           className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition hover:bg-muted"
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

//       {/* ================= BOTTOM ACTIONS ================= */}
//       <div className="mt-auto border-t border-border p-3">
//         <div className="flex justify-between gap-6">
//           {/* Theme Toggle */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//             title={
//               theme === "dark"
//                 ? "Switch to light mode"
//                 : "Switch to dark mode"
//             }
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
//           >
//             {theme === "dark" ? (
//               <Sun className="h-4 w-4" />
//             ) : (
//               <Moon className="h-4 w-4" />
//             )}
//           </button>

         
//           {/* Settings */}
//           <button
//             type="button"
//             aria-label="Settings"
//             title="Settings"
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
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
import {
  History,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";

import ThemeToggle from "@/components/layouts/ThemeToggle";

export default function ChatSidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-border px-4">
        <Link
          href="/chatDashboard"
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
            <span className="font-bold text-white">
              E
            </span>
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

      {/* Bottom actions */}
      <div className="mt-auto border-t border-border p-3">
        <div className="flex items-center justify-between gap-3">
          <ThemeToggle />

          <button
            type="button"
            aria-label="Settings"
            title="Settings"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-accent"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
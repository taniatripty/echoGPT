// "use client";

// import { LogOut, Moon, Sun, User } from "lucide-react";
// import { signOut, useSession } from "next-auth/react";
// import Image from "next/image";

// import { useTheme } from "@/providers/ThemeProvider";

// export default function ChatDashboardPage() {
//   const { data: session, status } = useSession();
//   const { theme, toggleTheme } = useTheme();

//   const user = session?.user;

//   const userName = user?.name ?? "User";
//   const userEmail = user?.email ?? "";
//   const userImage = user?.image;

//   const firstLetter = userName.charAt(0).toUpperCase();

//   const handleLogout = async () => {
//     await signOut({
//       callbackUrl: "/login",
//     });
//   };

//   return (
//     <div className="flex h-full flex-col bg-background">
//       {/* ================= HEADER ================= */}
//       <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
//         {/* Left */}
//         <div className="flex items-center gap-3">
//           <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
//             <span className="text-sm font-bold text-white">E</span>
//           </div>

//           <h1 className="text-sm font-semibold text-foreground">EchoGPT</h1>
//         </div>

//         {/* Right */}
//         {status === "loading" ? (
//           <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
//         ) : (
//           <div className="group relative">
//             {/* Profile Button */}

//             {/* User Image / Initial */}
//             <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
//               {userImage ? (
//                 <Image
//                   src={userImage}
//                   alt={userName}
//                   fill
//                   sizes="32px"
//                   className="object-cover"
//                 />
//               ) : (
//                 <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white">
//                   {firstLetter}
//                 </div>
//               )}
//             </div>

//             {/* ================= PROFILE DROPDOWN ================= */}
//             <div className="invisible absolute right-0 top-full z-50 mt-2 w-64 translate-y-2 rounded-2xl border border-border bg-background p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//               {/* User Info */}
//               <div className="flex items-center gap-3 rounded-xl p-3">
//                 {/* Large Image */}
//                 <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
//                   {userImage ? (
//                     <Image
//                       src={userImage}
//                       alt={userName}
//                       fill
//                       sizes="44px"
//                       className="object-cover"
//                     />
//                   ) : (
//                     <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-white">
//                       {firstLetter}
//                     </div>
//                   )}
//                 </div>

//                 {/* Name / Email */}
//                 <div className="min-w-0">
//                   <p className="truncate text-sm font-semibold text-foreground">
//                     {userName}
//                   </p>

//                   <p className="truncate text-xs text-muted-foreground">
//                     {userEmail}
//                   </p>
//                 </div>
//               </div>

//               <div className="my-1 h-px bg-border" />

//               {/* Profile */}
//               <button
//                 type="button"
//                 className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
//               >
//                 <User className="h-4 w-4 text-muted-foreground" />
//                 Profile
//               </button>

//               {/* Theme */}
//               <button
//                 type="button"
//                 onClick={toggleTheme}
//                 className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
//               >
//                 <div className="flex items-center gap-3">
//                   {theme === "dark" ? (
//                     <Sun className="h-4 w-4 text-muted-foreground" />
//                   ) : (
//                     <Moon className="h-4 w-4 text-muted-foreground" />
//                   )}

//                   <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
//                 </div>

//                 <div className="text-xs text-muted-foreground">
//                   {theme === "dark" ? "Dark" : "Light"}
//                 </div>
//               </button>

//               {/* Logout */}
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-500/10"
//               >
//                 <LogOut className="h-4 w-4" />
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* ================= MESSAGES ================= */}
//       <div className="flex-1 overflow-y-auto">
//         <div className="mx-auto flex min-h-full max-w-4xl items-center justify-center px-6">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-foreground">
//               How can I help you?
//             </h2>

//             <p className="mt-3 text-muted-foreground">
//               Ask anything and start a conversation with AI.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ================= PROMPT ================= */}
//       <div className="border-t border-border p-4">
//         <div className="mx-auto max-w-4xl">
//           {/* Prompt input will go here */}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

export default function ChatDashboardPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedMessage,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setMessage("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const form = e.currentTarget.form;

      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <div className="flex h-full flex-col bg-background">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="flex h-14 shrink-0 items-center border-b border-border px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
            <span className="text-sm font-bold text-white">
              E
            </span>
          </div>

          <h1 className="text-sm font-semibold text-foreground">
            EchoGPT
          </h1>
        </div>
      </header>

      {/* =====================================================
          CHAT MESSAGES
      ====================================================== */}
      <main className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          /* ================= EMPTY CHAT ================= */
          <div className="flex min-h-full items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-2xl text-center">
              {/* Logo */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">
                <span className="text-2xl font-bold text-white">
                  E
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How can I help you?
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                Ask anything and start a conversation with
                EchoGPT.
              </p>

              {/* Example prompts */}
              <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    setMessage("Explain React Server Components")
                  }
                  className="rounded-xl border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
                >
                  <p className="text-sm font-medium text-foreground">
                    Explain React Server Components
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Learn how Server Components work
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMessage("Help me write a TypeScript function")
                  }
                  className="rounded-xl border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
                >
                  <p className="text-sm font-medium text-foreground">
                    Write TypeScript code
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Get help with your development
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMessage("Give me some frontend project ideas")
                  }
                  className="rounded-xl border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
                >
                  <p className="text-sm font-medium text-foreground">
                    Give me project ideas
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Find ideas for your next project
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMessage("Explain JavaScript closures")
                  }
                  className="rounded-xl border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
                >
                  <p className="text-sm font-medium text-foreground">
                    Explain JavaScript
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Learn JavaScript concepts
                  </p>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= MESSAGES ================= */
          <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">
            <div className="space-y-6">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className={`flex ${
                    item.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {item.role === "user" ? (
                    <div className="max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm leading-6 text-white shadow-sm">
                      {item.content}
                    </div>
                  ) : (
                    <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-border bg-muted px-4 py-3 text-sm leading-6 text-foreground">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* =====================================================
          PROMPT INPUT
      ====================================================== */}
      <div className="shrink-0 border-t border-border bg-background p-4">
        <div className="mx-auto w-full max-w-4xl">
          <form onSubmit={handleSubmit}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/10">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message EchoGPT..."
                rows={1}
                aria-label="Message EchoGPT"
                className="min-h-14 max-h-48 w-full resize-none bg-transparent px-4 py-4 pr-14 text-sm leading-6 text-foreground outline-none placeholder:text-muted-foreground"
              />

              <button
                type="submit"
                disabled={!message.trim()}
                aria-label="Send message"
                className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition-all hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              EchoGPT can make mistakes. Check important
              information.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
"use client";

import { LogOut, Moon, Sun, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { useTheme } from "@/providers/ThemeProvider";

export default function ChatDashboardPage() {
  const { data: session, status } = useSession();
  const { theme, toggleTheme } = useTheme();

  const user = session?.user;

  const userName = user?.name ?? "User";
  const userEmail = user?.email ?? "";
  const userImage = user?.image;

  const firstLetter = userName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <div className="flex h-full flex-col bg-background">
      {/* ================= HEADER ================= */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
            <span className="text-sm font-bold text-white">E</span>
          </div>

          <h1 className="text-sm font-semibold text-foreground">EchoGPT</h1>
        </div>

        {/* Right */}
        {status === "loading" ? (
          <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
        ) : (
          <div className="group relative">
            {/* Profile Button */}

            {/* User Image / Initial */}
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
              {userImage ? (
                <Image
                  src={userImage}
                  alt={userName}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-white">
                  {firstLetter}
                </div>
              )}
            </div>

            {/* ================= PROFILE DROPDOWN ================= */}
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-64 translate-y-2 rounded-2xl border border-border bg-background p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {/* User Info */}
              <div className="flex items-center gap-3 rounded-xl p-3">
                {/* Large Image */}
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                  {userImage ? (
                    <Image
                      src={userImage}
                      alt={userName}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-white">
                      {firstLetter}
                    </div>
                  )}
                </div>

                {/* Name / Email */}
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {userName}
                  </p>

                  <p className="truncate text-xs text-muted-foreground">
                    {userEmail}
                  </p>
                </div>
              </div>

              <div className="my-1 h-px bg-border" />

              {/* Profile */}
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
              >
                <User className="h-4 w-4 text-muted-foreground" />
                Profile
              </button>

              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
              >
                <div className="flex items-center gap-3">
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Moon className="h-4 w-4 text-muted-foreground" />
                  )}

                  <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                </div>

                <div className="text-xs text-muted-foreground">
                  {theme === "dark" ? "Dark" : "Light"}
                </div>
              </button>

              {/* Logout */}
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-500/10"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= MESSAGES ================= */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex min-h-full max-w-4xl items-center justify-center px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              How can I help you?
            </h2>

            <p className="mt-3 text-muted-foreground">
              Ask anything and start a conversation with AI.
            </p>
          </div>
        </div>
      </div>

      {/* ================= PROMPT ================= */}
      <div className="border-t border-border p-4">
        <div className="mx-auto max-w-4xl">
          {/* Prompt input will go here */}
        </div>
      </div>
    </div>
  );
}

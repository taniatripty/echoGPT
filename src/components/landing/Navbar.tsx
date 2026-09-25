

"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";

import ThemeToggle from "../layouts/ThemeToggle";

export default function Navbar() {
  const { data: session, status } = useSession();

  const user = session?.user;

  const userName = user?.name || "User";
  const userEmail = user?.email || "";
  const userImage = user?.image;

  // Get first letter of user's name
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* ========================= */}
        {/* Logo */}
        {/* ========================= */}

        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="EchoGPT Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
            <span className="text-lg font-bold text-white">E</span>
          </div>

          <span className="text-xl font-semibold tracking-tight text-foreground">
            Echo<span className="text-cyan-500">GPT</span>
          </span>
        </Link>

        {/* ========================= */}
        {/* Navigation */}
        {/* ========================= */}

        {/* <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>

          <Link
            href="#models"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            AI Models
          </Link>

          <Link
            href="#preview"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Product
          </Link>

          <Link
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>

          <Link
            href="#faq"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </nav> */}

        {/* ========================= */}
        {/* Right Actions */}
        {/* ========================= */}

        <div className="flex items-center gap-3">
          {/* Loading */}
          {status === "loading" ? (
            <div className="h-9 w-9 animate-pulse rounded-full bg-muted" />
          ) : user ? (
            /* ========================= */
            /* Logged In Profile */
            /* ========================= */

            <div className="group relative">
              {/* Profile Button */}
              <button
                type="button"
                aria-label="Open user menu"
                className="flex items-center gap-2 rounded-full p-1 transition-colors hover:bg-muted/70"
              >
                {/* Profile Image */}
                <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md shadow-cyan-500/10">
                  {userImage ? (
                    <Image
                      src={userImage}
                      alt={userName}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                      {firstLetter}
                    </div>
                  )}
                </div>

                {/* User Name */}
                <span className="hidden max-w-[120px] truncate text-sm font-medium text-foreground lg:block">
                  {userName}
                </span>

                <ChevronDown className="hidden h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-180 lg:block" />
              </button>

              {/* ========================= */}
              {/* Profile Dropdown */}
              {/* ========================= */}

              <div className="pointer-events-none absolute right-0 top-full w-80 translate-y-3 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/40">
                  {/* Profile Header */}
                  <div className="border-b border-border bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 p-5">
                    <div className="flex items-center gap-3">
                      {/* Large Profile Image */}
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/10">
                        {userImage ? (
                          <Image
                            src={userImage}
                            alt={userName}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-lg font-bold text-white">
                            {firstLetter}
                          </div>
                        )}
                      </div>

                      {/* Name + Email */}
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-foreground">
                          {userName}
                        </p>

                        <p className="mt-0.5 truncate text-xs text-muted-foreground">
                          {userEmail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu */}
                  <div className="p-2">
                    {/* Profile */}
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                        <User className="h-4 w-4" />
                      </span>

                      <div>
                        <p className="font-medium text-foreground">
                          Profile
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Manage your account
                        </p>
                      </div>
                    </Link>

                    {/* Theme */}
                    <div className="mt-1 flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-muted">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                          <span className="text-sm">◐</span>
                        </span>

                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Theme
                          </p>

                          <p className="text-xs text-muted-foreground">
                            Appearance
                          </p>
                        </div>
                      </div>

                      <ThemeToggle />
                    </div>

                    {/* Divider */}
                    <div className="my-2 h-px bg-border" />

                    {/* Logout */}
                    <button
                      type="button"
                      onClick={() =>
                        signOut({
                          callbackUrl: "/",
                        })
                      }
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-500/10"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                        <LogOut className="h-4 w-4" />
                      </span>

                      <div className="text-left">
                        <p className="font-medium">Logout</p>

                        <p className="text-xs text-red-500/70">
                          Sign out of EchoGPT
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ========================= */
            /* Logged Out */
            /* ========================= */

            <>
              {/* Theme Toggle */}
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              {/* Sign In */}
              <Link
                href="/login"
                className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
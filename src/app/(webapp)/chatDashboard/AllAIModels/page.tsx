
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Code2,
  Crown,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  AIModelId,
  aiModels,
} from "@/components/data/AImodels";

const modelIcons: Record<
  AIModelId,
  typeof Bot
> = {
  "echogpt-fast": Zap,
  "echogpt-pro": Crown,
  "echogpt-code": Code2,
  "echogpt-creative": Sparkles,
};

const modelColors: Record<
  AIModelId,
  string
> = {
  "echogpt-fast":
    "from-cyan-500/20 to-blue-500/20 text-cyan-500",

  "echogpt-pro":
    "from-violet-500/20 to-purple-500/20 text-violet-500",

  "echogpt-code":
    "from-emerald-500/20 to-teal-500/20 text-emerald-500",

  "echogpt-creative":
    "from-pink-500/20 to-orange-500/20 text-pink-500",
};

const modelFeatures: Record<
  AIModelId,
  string[]
> = {
  "echogpt-fast": [
    "Fast responses",
    "Everyday questions",
    "Quick explanations",
  ],

  "echogpt-pro": [
    "Deep reasoning",
    "Detailed answers",
    "Complex tasks",
  ],

  "echogpt-code": [
    "Code generation",
    "Debugging",
    "Technical explanations",
  ],

  "echogpt-creative": [
    "Creative writing",
    "Ideas & brainstorming",
    "Content creation",
  ],
};

export default function AIModels() {
  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden bg-background text-foreground">
      {/* ================================================= */}
      {/* FIXED HEADER */}
      {/* ================================================= */}

      <header className="z-40 shrink-0 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/chatDashboard"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="size-4" />

            <span>Back to Chat</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">
              <span className="font-bold text-white">
                E
              </span>
            </div>

            <span className="font-semibold">
              Echo
              <span className="text-cyan-500">
                GPT
              </span>
            </span>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* SCROLLABLE PAGE CONTENT */}
      {/* ================================================= */}

      <div className="flex-1 overflow-y-auto">
        <section className="mx-auto w-full max-w-6xl px-4 py-7 pb-10 sm:px-6 sm:py-10 lg:py-12">
          {/* Heading */}

          <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-10">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-cyan-500">
              <Bot className="size-6" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              AI Models
            </h1>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Choose the AI model that best fits your
              task and start a new conversation.
            </p>
          </div>

          {/* ================================================= */}
          {/* MODEL CARDS */}
          {/* ================================================= */}

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
            {aiModels.map((model) => {
              const Icon = modelIcons[model.id];

              const features =
                modelFeatures[model.id];

              return (
                <article
                  key={model.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
                >
                  {/* Gradient top border */}

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Model icon */}

                  <div
                    className={`mb-5 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${modelColors[model.id]}`}
                  >
                    <Icon className="size-6" />
                  </div>

                  {/* Model name and badge */}

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-semibold">
                        {model.name}
                      </h2>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {model.badge}
                      </p>
                    </div>

                    {model.id === "echogpt-pro" && (
                      <span className="shrink-0 rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold text-violet-500">
                        PRO
                      </span>
                    )}
                  </div>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {model.description}
                  </p>

                  {/* Features */}

                  <div className="mt-5 space-y-2.5">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
                          <Check className="size-3" />
                        </span>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Push button to bottom */}

                  <div className="flex-1" />

                  {/* Use model button */}

                  <Link
                    href={`/chatDashboard?model=${encodeURIComponent(
                      model.id,
                    )}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all hover:shadow-blue-500/25"
                  >
                    Use this model

                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
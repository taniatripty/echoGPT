
"use client";

import {
  Bot,
  FileText,
  History,
  ImageIcon,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Smart Chat",
    description: "Ask questions and get intelligent AI-powered responses.",
    icon: MessageSquare,
  },
  {
    title: "Multiple AI Models",
    description: "Choose the right AI model for different tasks.",
    icon: Bot,
  },
  {
    title: "File Analysis",
    description: "Upload documents and analyze their content with AI.",
    icon: FileText,
  },
  {
    title: "Image Understanding",
    description: "Upload images and ask AI questions about them.",
    icon: ImageIcon,
  },
  {
    title: "Prompt Library",
    description: "Use ready-made prompts to get better results faster.",
    icon: Sparkles,
  },
  {
    title: "Chat History",
    description: "Find and continue your previous conversations.",
    icon: History,
  },
];

export default function Features() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 mt-4 py-8">
      {/* Section Header */}
      <div className="mb-6 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-500">
          Explore EchoGPT
        </p>

        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
          Everything you need in one AI workspace
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          Explore powerful tools designed to help you write, code,
          analyze, brainstorm, and get more done with AI.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <button
              key={feature.title}
              type="button"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-card
                p-4
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500/40
                hover:shadow-lg
                hover:shadow-cyan-500/5
              "
            >
              {/* Decorative Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-cyan-500/5
                  blur-2xl
                  transition
                  duration-300
                  group-hover:bg-cyan-500/15
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10
                  text-cyan-500
                  transition
                  duration-300
                  group-hover:from-cyan-500
                  group-hover:to-blue-600
                  group-hover:text-white
                "
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}


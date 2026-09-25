
"use client";

import {
  ArrowUpRight,
  Check,
 Globe,
  Layers3,
  MessageSquareText,
  Sparkles,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Layers3,
    title: "Multiple AI Models",
    description:
      "Access different AI models from one unified workspace instead of switching between multiple platforms.",
  },
  {
    icon: Zap,
    title: "Built for Speed",
    description:
      "Move from idea to answer faster with a streamlined interface designed around quick and focused interactions.",
  },
  {
    icon: MessageSquareText,
    title: "One Conversation Space",
    description:
      "Keep your AI conversations organized in one place and easily continue where you left off.",
  },
  {
   icon:Globe,
    title: "AI Wherever You Browse",
    description:
      "Use the EchoGPT Chrome extension to bring AI assistance directly into your everyday browsing workflow.",
  },
];

const highlights = [
  "Switch between AI models from one interface",
  "Keep your conversations organized",
  "Use AI while browsing with the Chrome extension",
  "Responsive experience across desktop and mobile",
];

export default function WhyChooseEchoGPT() {
  return (
    <section
      id="why-choose"
      className="
        relative overflow-hidden
        bg-background
        py-24 sm:py-32
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-0 top-1/4
          h-[420px] w-[420px]
          translate-x-1/3
          rounded-full
          bg-cyan-500/5
          blur-3xl
          dark:bg-cyan-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mx-auto mb-5
              inline-flex items-center gap-2
              rounded-full
              border
              border-cyan-600/20
              bg-cyan-500/10
              px-4 py-1.5
              dark:border-cyan-400/20
              dark:bg-cyan-400/5
            "
          >
            <Sparkles
              className="
                h-4 w-4
                text-cyan-600
                dark:text-cyan-400
              "
            />

            <span
              className="
                text-sm font-medium
                text-cyan-700
                dark:text-cyan-400
              "
            >
              Why EchoGPT
            </span>
          </div>

          <h2
            className="
              text-4xl font-bold
              tracking-tight
              text-slate-900
              sm:text-5xl
              dark:text-white
            "
          >
            One workspace for{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-600
                to-blue-600
                bg-clip-text
                text-transparent
                dark:from-cyan-400
                dark:to-blue-500
              "
            >
              smarter AI
            </span>
          </h2>

          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              dark:text-zinc-400
            "
          >
            EchoGPT brings multiple AI experiences into a single,
            focused workspace so you can spend less time switching
            tools and more time getting things done.
          </p>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-stretch
          "
        >
          {/* =========================
              LEFT FEATURE CARD
          ========================== */}
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-gradient-to-br
              from-cyan-50
              via-white
              to-blue-50
              p-8
              shadow-sm
              sm:p-10

              dark:border-white/10
              dark:from-cyan-500/[0.08]
              dark:via-background
              dark:to-blue-500/[0.08]
              dark:shadow-none
            "
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-cyan-500/10
                blur-3xl
                transition-opacity
                duration-500
                group-hover:opacity-70

                dark:bg-cyan-400/10
              "
            />

            <div className="relative">
              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-600/20
                  bg-white
                  shadow-sm

                  dark:border-cyan-400/20
                  dark:bg-cyan-400/10
                  dark:shadow-none
                "
              >
                <Sparkles
                  className="
                    h-6 w-6
                    text-cyan-600
                    dark:text-cyan-400
                  "
                />
              </div>

              <h3
                className="
                  mt-8
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                  dark:text-white
                "
              >
                Stop switching.
                <br />
                Start creating.
              </h3>

              <p
                className="
                  mt-5
                  max-w-md
                  text-base
                  leading-7
                  text-slate-600
                  dark:text-zinc-400
                "
              >
                Instead of jumping between different AI tools,
                bring your workflow together in one flexible
                environment designed for everyday productivity.
              </p>

              {/* Highlights */}
              <div className="mt-8 space-y-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-cyan-100

                        dark:bg-cyan-400/10
                      "
                    >
                      <Check
                        className="
                          h-3.5 w-3.5
                          text-cyan-700
                          dark:text-cyan-400
                        "
                        strokeWidth={2.5}
                      />
                    </span>

                    <span
                      className="
                        text-sm
                        leading-6
                        text-slate-700
                        dark:text-zinc-300
                      "
                    >
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT BENEFITS
          ========================== */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-600/30
                    hover:shadow-lg
                    hover:shadow-cyan-500/5

                    dark:border-white/10
                    dark:bg-white/[0.02]
                    dark:hover:border-cyan-400/30
                    dark:hover:bg-white/[0.04]
                    dark:hover:shadow-cyan-500/5
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      transition-colors

                      group-hover:border-cyan-600/20
                      group-hover:bg-cyan-50

                      dark:border-white/10
                      dark:bg-white/5
                      dark:group-hover:border-cyan-400/20
                      dark:group-hover:bg-cyan-400/10
                    "
                  >
                    <Icon
                      className="
                        h-5 w-5
                        text-slate-600
                        transition-colors
                        group-hover:text-cyan-600

                        dark:text-zinc-400
                        dark:group-hover:text-cyan-400
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-zinc-400
                    "
                  >
                    {benefit.description}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      text-xs
                      font-medium
                      text-cyan-700
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100

                      dark:text-cyan-400
                    "
                  >
                    Explore benefit

                    <ArrowUpRight
                      className="ml-1 h-3.5 w-3.5"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div className="mt-12 text-center">
          <a
            href="#get-started"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-slate-900
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              hover:-translate-y-0.5
              hover:bg-slate-800

              dark:bg-white
              dark:text-slate-950
              dark:hover:bg-zinc-200
            "
          >
            Experience EchoGPT

            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}




import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Command,
  FileText,
  Search,
  Sparkles,
  WandSparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 pb-20 pt-32 sm:pt-40">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="absolute right-[5%] top-32 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
        {/* Left content */}
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
            <Sparkles size={15} />
            <span>The smarter way to work with AI</span>
          </div>

          <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Turn ideas into
            <span className="relative ml-3 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                momentum.
              </span>
              <span className="absolute bottom-1 left-0 h-3 w-full -rotate-1 rounded-full bg-cyan-400/20 sm:h-4" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            EchoGPT is your creative command center for writing, coding,
            research, and problem-solving—powered by the AI models that fit
            the way you work.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/chatDashboard"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
            >
              Start creating free
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
            >
              See what EchoGPT can do
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-cyan-500" />
              No credit card required
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-cyan-500" />
              Multiple AI models
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-cyan-500" />
              Built for focused work
            </span>
          </div>
        </div>

        {/* Right product visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/80 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
            {/* Window header */}
            <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center gap-2 rounded-md bg-background px-3 py-1.5 text-xs text-muted-foreground">
                <Command size={13} />
                EchoGPT workspace
              </div>

              <div className="h-5 w-12" />
            </div>

            {/* Workspace */}
            <div className="mt-3 grid min-h-[410px] grid-cols-[70px_1fr] overflow-hidden rounded-2xl border border-border/70 bg-muted/20">
              {/* Sidebar */}
              <aside className="border-r border-border/70 bg-background/50 p-3">
                <div className="flex flex-col items-center gap-4">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                    <Sparkles size={17} />
                  </div>

                  <div className="h-px w-full bg-border" />

                  <button className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <WandSparkles size={17} />
                  </button>

                  <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground">
                    <FileText size={17} />
                  </button>

                  <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground">
                    <Code2 size={17} />
                  </button>

                  <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground">
                    <Search size={17} />
                  </button>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-500">
                      New conversation
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-foreground">
                      What are we building today?
                    </h2>
                  </div>

                  <div className="flex -space-x-2">
                    <div className="grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-cyan-500 text-[10px] font-bold text-white">
                      AI
                    </div>
                    <div className="grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-violet-500 text-[10px] font-bold text-white">
                      +
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="w-[88%] rounded-2xl rounded-tl-md bg-background p-4 shadow-sm">
                    <p className="text-sm text-muted-foreground">
                      Design a modern dashboard for an e-commerce analytics
                      platform.
                    </p>
                  </div>

                  <div className="ml-auto w-[92%] rounded-2xl rounded-tr-md border border-cyan-500/15 bg-cyan-500/10 p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                      <Sparkles size={14} />
                      EchoGPT
                    </div>
                    <p className="text-sm leading-6 text-foreground/90">
                      I’ll create a clean dashboard structure with revenue
                      cards, sales trends, recent orders, and a responsive
                      sidebar.
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground shadow-sm">
                    <span>Ask anything, create everything...</span>
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-500 text-white">
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating status card */}
          <div className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-10">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Check size={19} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Built for flow
                </p>
                <p className="text-xs text-muted-foreground">
                  Create without switching tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
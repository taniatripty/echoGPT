import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/10" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
          <Sparkles size={15} className="text-cyan-500" />

          <span>Your intelligent AI workspace</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Your AI,
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            all in one place.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Write, code, research, summarize, and create with powerful AI
          models. EchoGPT brings everything you need into one simple,
          intelligent workspace.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/chatDashboard"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            Start Chatting

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="#features"
            className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            Explore Features
          </Link>
        </div>

        {/* Small text */}
        <p className="mt-6 text-xs text-muted-foreground">
          One workspace · Multiple AI models · Everything you need
        </p>
      </div>
    </section>
  );
}
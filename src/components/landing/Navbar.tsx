import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ThemeToggle from "../layouts/ThemeToggle";



export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
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

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Features
          </Link>

          <Link
            href="#models"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            AI Models
          </Link>

          <Link
            href="#preview"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Product
          </Link>

          <Link
            href="#faq"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            FAQ
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle/>

          <Link
            href="/login"
            className="hidden text-sm font-medium text-muted-foreground transition hover:text-foreground sm:block"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="group flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Sign Up

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
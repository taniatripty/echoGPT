
"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  CheckCircle2,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          subscriber_email: email,
          email: email,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSuccess(
        "You're subscribed! Check your inbox for EchoGPT updates."
      );

      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      setError(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <section className="relative w-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10 lg:p-14">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">
              <Mail className="h-8 w-8 text-white" />
            </div>

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              EchoGPT Newsletter
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Stay ahead with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                EchoGPT
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Get the latest AI updates, new model releases, productivity
              tips, product improvements, and exclusive EchoGPT news directly
              in your inbox.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 max-w-xl"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail
                    className="
                      absolute
                      left-4
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-muted-foreground
                    "
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    disabled={isLoading}
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-border
                      bg-background
                      pl-11
                      pr-4
                      text-sm
                      text-foreground
                      outline-none
                      transition
                      placeholder:text-muted-foreground
                      focus:border-cyan-500
                      focus:ring-2
                      focus:ring-cyan-500/20
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="
                    flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-500/20
                    transition
                    hover:shadow-blue-500/30
                    focus:outline-none
                    focus:ring-2
                    focus:ring-cyan-500
                    focus:ring-offset-2
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success Message */}
            {success && (
              <div
                role="status"
                className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                {success}
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div
                role="alert"
                className="mx-auto mt-5 max-w-xl rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
              >
                {error}
              </div>
            )}

            {/* Privacy */}
            <p className="mt-5 text-xs text-muted-foreground">
              No spam. Unsubscribe anytime. Your email will only be used
              for EchoGPT updates.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <Sparkles className="mx-auto mb-2 h-5 w-5 text-cyan-500" />
                <p className="text-sm font-semibold">
                  AI Updates
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Discover new AI features and models.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-4">
                <Send className="mx-auto mb-2 h-5 w-5 text-blue-500" />
                <p className="text-sm font-semibold">
                  Product News
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Stay informed about EchoGPT improvements.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-4">
                <Mail className="mx-auto mb-2 h-5 w-5 text-violet-500" />
                <p className="text-sm font-semibold">
                  Useful Tips
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Get practical AI productivity tips.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


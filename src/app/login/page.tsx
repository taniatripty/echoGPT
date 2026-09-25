
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Loader2,
  Mail,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Email Login
  // =========================
  const handleEmailLogin = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result?.ok) {
        setError("Invalid email or password.");
        return;
      }

      router.push("/chat");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Google Login
  // =========================
  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      await signIn("google", {
        callbackUrl: "/chat",
      });
    } catch {
      setGoogleLoading(false);
      setError("Unable to sign in with Google.");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center mt-10 justify-center overflow-hidden bg-background px-4 py-10 text-foreground">
      {/* =========================
          Background Decoration
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="absolute bottom-[-180px] left-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="absolute right-[-100px] top-1/2 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      {/* =========================
          Login Container
      ========================== */}
      <div className="relative z-10 w-full max-w-md">
        {/* =========================
            Logo & Heading
        ========================== */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
              E
            </div>

            <span className="text-2xl font-bold tracking-tight">
              Echo<span className="text-blue-500">GPT</span>
            </span>
          </Link>

           {/* =========================
              Sign Up
          ========================== */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Do not have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-500 hover:text-blue-400"
            >
              signup
            </Link>
          </p>

         
        </div>

        {/* =========================
            Login Card
        ========================== */}
        <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {/* =========================
              Error Message
          ========================== */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {error}
            </div>
          )}

          {/* =========================
              Email Login
          ========================== */}
          <form
            onSubmit={handleEmailLogin}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                  className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

               
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 pr-11 text-sm outline-none transition placeholder:text-muted-foreground focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((current) => !current)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading || googleLoading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-500 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && (
                <Loader2 className="size-4 animate-spin" />
              )}

              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* =========================
              Divider
          ========================== */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs text-muted-foreground">
              OR
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* =========================
              Google Login
          ========================== */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background px-4 text-sm font-medium transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            {googleLoading ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <GoogleIcon />
            )}

            {googleLoading
              ? "Connecting..."
              : "Continue with Google"}
          </button>

         
        </div>

        {/* =========================
            Terms
        ========================== */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          By continuing, you agree to EchoGPT&apos;s{" "}
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

// =========================
// Google Icon
// =========================
function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.23c0-.79-.07-1.55-.22-2.23H12v4.22h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.38Z"
      />

      <path
        fill="#34A853"
        d="M12 21.99c2.63 0 4.84-.87 6.45-2.38l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.99Z"
      />

      <path
        fill="#FBBC05"
        d="M6.54 14.05a5.86 5.86 0 0 1 0-4.1V7.42H3.3a9.76 9.76 0 0 0 0 9.16l3.24-2.53Z"
      />

      <path
        fill="#EA4335"
        d="M12 5.92c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.84 2.99 14.63 2 12 2a9.75 9.75 0 0 0-8.7 5.42l3.24 2.53C7.31 7.64 9.46 5.92 12 5.92Z"
      />
    </svg>
  );
}



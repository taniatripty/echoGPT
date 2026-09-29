// app/terms-of-use/page.tsx

import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  Scale,
  Mail,
} from "lucide-react";

const termsSections = [
  {
    icon: UserCheck,
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using EchoGPT, you agree to these Terms of Use and any applicable laws and regulations.",
      "If you do not agree with these terms, please do not use EchoGPT.",
    ],
  },
  {
    icon: FileText,
    title: "2. Use of EchoGPT",
    content: [
      "EchoGPT provides AI-powered tools for conversation, writing, learning, coding, research, productivity, and other supported activities.",
      "You agree to use the service only for lawful purposes and in accordance with these Terms of Use.",
      "You are responsible for the prompts, content, and information you submit through the service.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "3. Your Account",
    content: [
      "You may need an account to access certain EchoGPT features.",
      "You are responsible for maintaining the confidentiality of your account credentials and for activities performed through your account.",
      "Please notify us if you believe your account has been accessed without authorization.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "4. AI-Generated Content",
    content: [
      "EchoGPT uses artificial intelligence to generate responses and other content.",
      "AI-generated responses may contain mistakes, incomplete information, or inaccurate statements.",
      "You should review and verify important information before relying on AI-generated content, especially for legal, financial, medical, technical, or other high-impact decisions.",
    ],
  },
  {
    icon: Scale,
    title: "5. Acceptable Use",
    content: [
      "You must not use EchoGPT to violate applicable laws, infringe the rights of others, distribute malicious content, or attempt to interfere with the operation of the service.",
      "You must not attempt to gain unauthorized access to EchoGPT, its systems, accounts, or related services.",
    ],
  },
  {
    icon: FileText,
    title: "6. Intellectual Property",
    content: [
      "The EchoGPT name, branding, interface, software, and related materials may be protected by intellectual property laws.",
      "You may not copy, modify, distribute, or reproduce EchoGPT branding or proprietary materials without appropriate authorization.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "7. Privacy",
    content: [
      "Your use of EchoGPT may involve the collection and processing of information as described in our Privacy Policy.",
      "Please review the Privacy Policy to understand how information may be handled.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "8. Service Availability",
    content: [
      "We may update, modify, suspend, or discontinue parts of the service from time to time.",
      "We do not guarantee that EchoGPT will always be available, uninterrupted, or completely error-free.",
    ],
  },
  {
    icon: Scale,
    title: "9. Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, EchoGPT and its operators will not be responsible for losses resulting from reliance on AI-generated information or from interruptions, errors, or limitations of the service.",
      "You are responsible for evaluating whether generated content is appropriate for your intended use.",
    ],
  },
  {
    icon: FileText,
    title: "10. Changes to These Terms",
    content: [
      "These Terms of Use may be updated periodically to reflect changes to EchoGPT or applicable requirements.",
      "When changes are made, the updated version will be made available through the service.",
    ],
  },
  {
    icon: Mail,
    title: "11. Contact Us",
    content: [
      "If you have questions about these Terms of Use, please contact the EchoGPT team through the available support channels.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/chatDashboard"
            className="
              mb-6 inline-flex items-center gap-2
              rounded-lg px-3 py-2
              text-sm text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Back to EchoGPT
          </Link>

          <div className="flex items-start gap-4">
            <div
              className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-xl
                bg-gradient-to-br from-cyan-500 to-blue-600
                text-white
                shadow-lg shadow-cyan-500/20
              "
            >
              <FileText className="h-6 w-6" />
            </div>

            <div>
              <h1
                className="
                  text-3xl font-bold tracking-tight
                  sm:text-4xl
                "
              >
                Terms of Use
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Please review the terms that govern your use of EchoGPT.
              </p>

              <p className="mt-3 text-xs text-muted-foreground">
                Last updated: September 29, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div
          className="
            overflow-hidden rounded-2xl
            border border-border
            bg-card
            shadow-sm
          "
        >
          {/* Introduction */}
          <div className="border-b border-border p-6 sm:p-8">
            <div
              className="
                rounded-xl
                border border-cyan-500/20
                bg-cyan-500/5
                p-5
              "
            >
              <h2 className="text-base font-semibold text-foreground">
                Welcome to EchoGPT
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                These Terms of Use explain the rules and conditions that
                apply when you access or use EchoGPT and its related
                features.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="divide-y divide-border">
            {termsSections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-9 w-9 shrink-0 items-center justify-center
                        rounded-lg
                        bg-cyan-500/10
                        text-cyan-500
                      "
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-base font-semibold text-foreground">
                        {section.title}
                      </h2>

                      <div className="mt-3 space-y-3">
                        {section.content.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="
                              text-sm leading-7
                              text-muted-foreground
                            "
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="border-t border-border p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Need more information?
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Review our privacy policy or contact the EchoGPT team.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/privacy-policy"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl
                    border border-border
                    px-4 py-2.5
                    text-sm font-medium
                    text-foreground
                    transition
                    hover:bg-muted
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-500
                  "
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/chatDashboard"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    px-5 py-2.5
                    text-sm font-medium
                    text-white
                    transition
                    hover:shadow-lg
                    hover:shadow-blue-500/20
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-500
                    focus-visible:ring-offset-2
                  "
                >
                  Back to EchoGPT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
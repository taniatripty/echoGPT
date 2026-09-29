"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Database,
  FileText,
  Lock,
  Mail,
  Shield,
  UserCheck,
  Eye,
  Settings,
} from "lucide-react";

const privacySections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content: [
      "EchoGPT may collect information that you provide when you create an account, use the application, or contact us.",
      "Depending on the features you use, this may include information such as your name, email address, profile information, conversations, prompts, and other content you choose to provide.",
    ],
  },
  {
    icon: UserCheck,
    title: "2. Account Information",
    content: [
      "When you create or access an EchoGPT account, we may process information associated with your account, such as your name, email address, profile image, and authentication information.",
      "If you use a third-party authentication provider, such as Google, the information we receive depends on the permissions and information provided by that provider.",
    ],
  },
  {
    icon: FileText,
    title: "3. Conversations and User Content",
    content: [
      "EchoGPT may process prompts, messages, uploaded content, and other information that you intentionally submit while using the service.",
      "Conversation history may be stored so that you can access previous conversations and continue your work.",
      "You should avoid submitting highly sensitive or confidential information unless the relevant feature is specifically designed to support it.",
    ],
  },
  {
    icon: Eye,
    title: "4. How We Use Information",
    content: [
      "We may use collected information to provide, operate, maintain, and improve EchoGPT.",
      "Information may also be used to authenticate users, provide requested features, respond to support requests, maintain security, detect abuse, and improve the reliability of the service.",
    ],
  },
  {
    icon: Settings,
    title: "5. Cookies and Local Storage",
    content: [
      "EchoGPT may use cookies, local storage, or similar browser technologies to remember preferences and maintain application functionality.",
      "For example, application preferences such as theme settings or locally stored chat information may be saved in your browser.",
      "You can manage browser storage and cookie permissions through your browser settings.",
    ],
  },
  {
    icon: Lock,
    title: "6. Data Security",
    content: [
      "We take reasonable measures designed to protect information processed through EchoGPT.",
      "However, no online service or method of electronic storage can be guaranteed to be completely secure.",
      "You are also responsible for protecting your account credentials and devices used to access EchoGPT.",
    ],
  },
  {
    icon: Shield,
    title: "7. Third-Party Services",
    content: [
      "EchoGPT may integrate with third-party services to provide authentication, AI model access, hosting, analytics, payments, or other functionality.",
      "When third-party services are used, information may be processed by those providers according to their own privacy policies and applicable terms.",
    ],
  },
  {
    icon: UserCheck,
    title: "8. Your Choices and Rights",
    content: [
      "Depending on your location and applicable law, you may have rights regarding your personal information, including rights to access, correct, delete, or otherwise control certain information.",
      "You may also be able to manage some information directly through your EchoGPT account or application settings.",
    ],
  },
  {
    icon: Database,
    title: "9. Data Retention",
    content: [
      "We retain information for as long as reasonably necessary to provide the service, maintain your account, comply with applicable obligations, resolve disputes, and enforce our agreements.",
      "The specific retention period may vary depending on the type of information and how it is used.",
    ],
  },
  {
    icon: Shield,
    title: "10. Children's Privacy",
    content: [
      "EchoGPT is not intended to be used in violation of applicable age restrictions or children's privacy laws.",
      "If you believe that a child has provided personal information to EchoGPT in a manner that is not permitted, please contact us so that the situation can be reviewed.",
    ],
  },
  {
    icon: FileText,
    title: "11. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy when our service, data practices, or applicable requirements change.",
      "The updated version will be made available through EchoGPT, and the date at the top of this page will indicate when the policy was last updated.",
    ],
  },
  {
    icon: Mail,
    title: "12. Contact Us",
    content: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact the EchoGPT team through the available support channels.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              <Shield className="h-6 w-6" />
            </div>

            <div>
              <h1
                className="
                  text-3xl font-bold tracking-tight
                  sm:text-4xl
                "
              >
                Privacy Policy
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                Learn how EchoGPT may collect, use, and protect your
                information.
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
                Your Privacy Matters
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This Privacy Policy explains how information may be
                collected, used, stored, and protected when you use
                EchoGPT and its related services.
              </p>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="border-b border-border p-6 sm:p-8">
            <h2 className="text-base font-semibold text-foreground">
              Privacy at a Glance
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div
                className="
                  rounded-xl border border-border
                  bg-background p-4
                "
              >
                <Database className="h-5 w-5 text-cyan-500" />

                <p className="mt-3 text-sm font-medium text-foreground">
                  Information
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  We may process information needed to provide EchoGPT
                  features.
                </p>
              </div>

              <div
                className="
                  rounded-xl border border-border
                  bg-background p-4
                "
              >
                <Lock className="h-5 w-5 text-cyan-500" />

                <p className="mt-3 text-sm font-medium text-foreground">
                  Security
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  We use reasonable measures designed to protect
                  information.
                </p>
              </div>

              <div
                className="
                  rounded-xl border border-border
                  bg-background p-4
                "
              >
                <Settings className="h-5 w-5 text-cyan-500" />

                <p className="mt-3 text-sm font-medium text-foreground">
                  Your Choices
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Some information and preferences can be managed
                  through your account or browser.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="divide-y divide-border">
            {privacySections.map((section) => {
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
            <div
              className="
                flex flex-col gap-4
                sm:flex-row sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p className="text-sm font-medium text-foreground">
                  Questions about your privacy?
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Review our terms or contact the EchoGPT team.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/terms-of-use"
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
                  Terms of Use
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
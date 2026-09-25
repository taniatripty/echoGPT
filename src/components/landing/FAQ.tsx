
"use client";

import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is EchoGPT?",
    answer:
      "EchoGPT is a multi-AI platform that lets you interact with multiple AI models from one unified interface. You can switch between models, compare responses, and manage your conversations without constantly moving between different AI platforms.",
  },
  {
    question: "Which AI models can I use with EchoGPT?",
    answer:
      "EchoGPT supports multiple AI models and providers. The available models can vary over time, allowing you to choose the model that best fits your task, whether you need writing, coding, reasoning, or general assistance.",
  },
  {
    question: "Can I use EchoGPT for coding?",
    answer:
      "Yes. EchoGPT can be used for programming, debugging, code explanations, technical documentation, and other software development tasks. You can select an appropriate AI model depending on your requirements.",
  },
  {
    question: "Is EchoGPT available as a Chrome extension?",
    answer:
      "Yes. EchoGPT is also available as a Chrome extension, allowing you to access AI assistance directly while browsing without opening a separate application.",
  },
  {
    question: "Can I switch between AI models?",
    answer:
      "Yes. EchoGPT is designed around a multi-model experience, so you can select different AI models depending on the task you're working on.",
  },
  {
    question: "Does EchoGPT save my conversations?",
    answer:
      "Your conversations can be organized and accessed through the EchoGPT interface. The exact availability and retention of conversation history depends on your account and the current EchoGPT service configuration.",
  },
  {
    question: "Can I use EchoGPT on mobile devices?",
    answer:
      "The EchoGPT web experience is designed to be responsive, allowing you to use the platform across desktop, tablet, and mobile screen sizes.",
  },
  {
    question: "How can I get started with EchoGPT?",
    answer:
      "Getting started is simple. Open EchoGPT, sign in or create an account, choose an AI model, and start chatting. You can also install the Chrome extension for quicker access while browsing.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="
        relative overflow-hidden
        bg-background
        py-24 sm:py-32
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-[500px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/5
          blur-3xl
          dark:bg-cyan-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {/* Badge */}
            <div
              className="
                mb-5 inline-flex
                items-center
                rounded-full
                border
                border-cyan-600/20
                bg-cyan-500/10
                px-4 py-1.5
                dark:border-cyan-400/20
                dark:bg-cyan-400/5
              "
            >
              <span
                className="
                  text-sm font-medium
                  text-cyan-700
                  dark:text-cyan-400
                "
              >
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-xl
                text-4xl font-bold tracking-tight
                text-slate-900
                sm:text-5xl
                dark:text-white
              "
            >
              Frequently asked{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-600 to-blue-600
                  bg-clip-text
                  text-transparent
                  dark:from-cyan-400
                  dark:to-blue-500
                "
              >
                questions
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6 max-w-md
                text-base leading-7
                text-slate-600
                dark:text-zinc-400
              "
            >
              Everything you need to know about EchoGPT, AI
              models, conversations, and the Chrome extension.
            </p>

            {/* Contact */}
            <div className="mt-8">
              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-zinc-500
                "
              >
                Still have questions?
              </p>

              <a
                href="#contact"
                className="
                  mt-2 inline-flex
                  items-center
                  text-sm font-medium
                  text-cyan-700
                  transition-colors
                  hover:text-cyan-600
                  dark:text-cyan-400
                  dark:hover:text-cyan-300
                "
              >
                Contact our team
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* =========================
              FAQ ACCORDION
          ========================== */}
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white/80
              p-2
              shadow-sm
              backdrop-blur-sm
              sm:p-4

              dark:border-white/10
              dark:bg-white/[0.02]
              dark:shadow-none
            "
          >
            <Accordion
            //   type="single"
            //   collapsible
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="
                    border-slate-200
                    px-3
                    sm:px-5
                    dark:border-white/10
                  "
                >
                  <AccordionTrigger
                    className="
                      group
                      py-6
                      text-left
                      text-base
                      font-medium
                      text-slate-900
                      hover:no-underline

                      dark:text-zinc-100
                    "
                  >
                    <span
                      className="
                        pr-6
                        transition-colors

                        group-hover:text-cyan-700
                        dark:group-hover:text-cyan-400
                      "
                    >
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <span
                      className="
                        flex
                        h-7 w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50

                        dark:border-white/10
                        dark:bg-white/5
                      "
                    >
                      <ChevronDown
                        className="
                          h-4 w-4
                          text-slate-500
                          transition-transform
                          duration-300

                          group-data-[state=open]:rotate-180
                          group-data-[state=open]:text-cyan-600

                          dark:text-zinc-400
                          dark:group-data-[state=open]:text-cyan-400
                        "
                        aria-hidden="true"
                      />
                    </span>
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                      pb-6
                      pr-8
                      text-sm
                      leading-7
                      text-slate-600

                      dark:text-zinc-400
                    "
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}


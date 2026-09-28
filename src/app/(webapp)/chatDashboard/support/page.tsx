
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    description: "Follow our latest updates",
    icon: FaFacebookF,
    href: "https://facebook.com",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "LinkedIn",
    description: "Connect with our team",
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    gradient: "from-sky-500 to-blue-700",
  },
  {
    name: "Instagram",
    description: "See what's happening",
    icon: FaInstagram,
    href: "https://instagram.com",
    gradient: "from-pink-500 via-purple-500 to-orange-400",
  },
  {
    name: "Email",
    description: "Get in touch with us",
    icon: Mail,
    href: "mailto:support@echogpt.live",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export default function Support() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* ================================
            HEADER
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            Stay Connected
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Connect with{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              EchoGPT
            </span>
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base dark:text-zinc-400">
            Follow us, connect with our community, or reach out
            directly. We would love to hear from you.
          </p>
        </motion.div>

        {/* ================================
            SOCIAL CARDS
        ================================= */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={
                  social.name === "Email" ? undefined : "_blank"
                }
                rel={
                  social.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-zinc-900/80 dark:hover:border-cyan-500/30"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${social.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  {/* Social Icon */}
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${social.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Arrow */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-500 dark:border-white/10 dark:text-zinc-500">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-5">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {social.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-zinc-400">
                    {social.description}
                  </p>
                </div>

                {/* Animated Bottom Line */}
                <div className="relative mt-5 h-px w-0 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            );
          })}
        </div>

        {/* ================================
            BOTTOM MESSAGE
        ================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.35,
          }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-slate-500 dark:text-zinc-500">
            Have feedback or suggestions?{" "}
            <a
              href="mailto:support@echogpt.live"
              className="font-medium text-cyan-600 transition-colors hover:text-blue-600 dark:text-cyan-400 dark:hover:text-blue-400"
            >
              Let us know
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

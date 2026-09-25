"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "AI Models", href: "#models" },
    { label: "Why EchoGPT", href: "#why-echogpt" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "Documentation", href: "#documentation" },
    { label: "Chrome Extension", href: "#extension" },
    { label: "Contact", href: "#contact" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Support", href: "#support" },
  ],
};

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon:FaGithub,
  },
  {
    label: "Twitter",
    href: "#",
    icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-background dark:border-white/10">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden border-b border-slate-200 py-20 dark:border-white/10"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -inset-[300%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#06b6d4_80deg,#3b82f6_160deg,#a855f7_230deg,transparent_310deg)] opacity-20" />
          </div>

          <div className="relative mx-auto max-w-3xl rounded-3xl border border-cyan-500/20 bg-white/70 p-8 text-center backdrop-blur-xl sm:p-12 dark:bg-zinc-950/70">
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 text-white shadow-xl shadow-cyan-500/20"
            >
              <Sparkles className="h-7 w-7" />
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Your AI workspace,{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                all in one place.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-zinc-400">
              Bring your favorite AI models together and make every
              conversation more productive.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-500/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:text-cyan-400"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20">
                <MessageSquare className="h-5 w-5" />
              </div>

              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Echo<span className="text-cyan-500">GPT</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-zinc-400">
              A unified AI workspace that lets you explore, compare, and
              interact with multiple AI models from one place.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:text-cyan-400"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <h3 className="mb-5 text-sm font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-cyan-600 dark:text-zinc-500 dark:hover:text-cyan-400"
                      >
                        {link.label}

                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 text-sm sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <p className="text-slate-500 dark:text-zinc-500">
            © {new Date().getFullYear()} EchoGPT. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-slate-500 transition-colors hover:text-cyan-600 dark:text-zinc-500 dark:hover:text-cyan-400"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-slate-500 transition-colors hover:text-cyan-600 dark:text-zinc-500 dark:hover:text-cyan-400"
            >
              Terms
            </a>

            <a
              href="#contact"
              className="text-slate-500 transition-colors hover:text-cyan-600 dark:text-zinc-500 dark:hover:text-cyan-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
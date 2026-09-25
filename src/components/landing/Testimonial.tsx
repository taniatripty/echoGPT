"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    avatar: "SJ",
    text: "EchoGPT has completely changed the way I work with AI. Having multiple models in one place makes comparing responses incredibly easy.",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    avatar: "MC",
    text: "The browser extension is incredibly convenient. I can use AI while browsing without constantly switching between different tabs.",
  },
  {
    name: "Emily Carter",
    role: "Content Creator",
    avatar: "EC",
    text: "I love how simple and clean EchoGPT feels. Switching between different AI models from one interface saves me a huge amount of time.",
  },
  {
    name: "David Wilson",
    role: "Startup Founder",
    avatar: "DW",
    text: "EchoGPT gives our team one simple place to experiment with different AI models without managing multiple tools.",
  },
  {
    name: "Sophia Lee",
    role: "UX Designer",
    avatar: "SL",
    text: "The experience feels fast and intuitive. I especially like being able to access AI directly while browsing.",
  },
  {
    name: "Alex Morgan",
    role: "Student",
    avatar: "AM",
    text: "It has become part of my daily workflow. I can research, compare answers, and organize my conversations much faster.",
  },
];

// Duplicate the testimonials so the animation can loop seamlessly.
const infiniteTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl px-4 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
            <Quote className="h-4 w-4" />
            User Experiences
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            What people are saying about{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              EchoGPT
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-zinc-400">
            One workspace. Multiple AI models. A simpler way to work with
            artificial intelligence.
          </p>
        </motion.div>

        {/* Moving testimonial track */}
        <div className="relative w-full overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />

          <motion.div
            className="flex w-max gap-6 px-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative h-full w-[320px] shrink-0 sm:w-[380px]"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] overflow-hidden rounded-[22px]">
        <div className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#06b6d4_80deg,#3b82f6_150deg,#a855f7_220deg,transparent_300deg)]" />
      </div>

      {/* Card */}
      <div className="relative m-[1px] flex h-full min-h-[280px] flex-col rounded-[21px] bg-white p-6 shadow-xl shadow-slate-200/40 dark:bg-zinc-950 dark:shadow-black/30">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <Quote className="h-7 w-7 text-cyan-500/20" />
        </div>

        {/* Text */}
        <p className="mt-6 flex-1 text-sm leading-7 text-slate-600 dark:text-zinc-400">
          “{testimonial.text}”
        </p>

        {/* User */}
        <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
            {testimonial.avatar}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              {testimonial.name}
            </h3>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-500">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
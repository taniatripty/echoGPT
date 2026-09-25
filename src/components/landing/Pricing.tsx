
// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Check,
//   Crown,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// const plans = [
//   {
//     name: "Free",
//     description: "Explore EchoGPT and experience the basics.",
//     price: "$0",
//     period: "/month",
//     icon: Sparkles,
//     features: [
//       "Limited AI conversations",
//       "Selected AI models",
//       "Basic chat history",
//       "Standard response speed",
//     ],
//     button: "Get Started",
//     featured: false,
//   },
//   {
//     name: "Pro",
//     description: "Unlock the full EchoGPT experience.",
//     price: "$9.99",
//     period: "/month",
//     icon: Crown,
//     features: [
//       "Unlimited AI conversations",
//       "Multiple AI models",
//       "Full conversation history",
//       "Priority response speed",
//       "Chrome extension access",
//     ],
//     button: "Upgrade to Pro",
//     featured: true,
//   },
//   {
//     name: "Team",
//     description: "Powerful AI workflows for growing teams.",
//     price: "$19.99",
//     period: "/user/month",
//     icon: Zap,
//     features: [
//       "Everything in Pro",
//       "Shared AI workspace",
//       "Team conversation history",
//       "Advanced collaboration",
//     ],
//     button: "Start Team Plan",
//     featured: false,
//   },
// ];

// export default function Pricing() {
//   return (
//     <section
//       id="pricing"
//       className="relative overflow-hidden bg-background py-24 sm:py-28"
//     >
//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Main glow */}
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

//         {/* Left glow */}
//         <div className="absolute left-[5%] top-[20%] h-40 w-40 rounded-full bg-blue-500/10 blur-[100px]" />

//         {/* Right glow */}
//         <div className="absolute bottom-[10%] right-[5%] h-40 w-40 rounded-full bg-purple-500/10 blur-[100px]" />
//       </div>

//       {/* =====================================================
//           DECORATIVE CURVED LINES
//       ====================================================== */}

//       <div className="pointer-events-none absolute left-1/2 top-[55%] hidden h-[380px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-500/[0.06] lg:block" />

//       <div className="pointer-events-none absolute left-1/2 top-[55%] hidden h-[280px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-500/[0.05] lg:block" />

//       {/* =====================================================
//           HEADING
//       ====================================================== */}

//       <div className="relative z-10 mx-auto mb-16 max-w-3xl px-6 text-center">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400"
//         >
//           <Sparkles className="h-4 w-4" />

//           <span>Simple Pricing</span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.6,
//             delay: 0.1,
//           }}
//           className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
//         >
//           Choose the plan that{" "}
//           <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//             fits you
//           </span>
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.6,
//             delay: 0.2,
//           }}
//           className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-zinc-400 sm:text-lg"
//         >
//           Start exploring powerful AI models today and upgrade whenever
//           you need more.
//         </motion.p>
//       </div>

//       {/* =====================================================
//           DESKTOP PRICING
//       ====================================================== */}

//       <div className="relative z-10 mx-auto hidden max-w-6xl px-6 lg:block">
//         <div className="grid grid-cols-3 items-center gap-8">

//           {/* =================================================
//               FREE
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             animate={{
//               x: [0, 12, 0, -10, 0],
//               y: [30, 10, 30, 45, 30],
//               rotate: [0, 0.8, 0, -0.8, 0],
//             }}
//             transition={{
//               opacity: {
//                 duration: 0.6,
//               },
//               x: {
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//               y: {
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//               rotate: {
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//             }}
//           >
//             <PricingCard
//               plan={plans[0]}
//               Icon={plans[0].icon}
//             />
//           </motion.div>

//           {/* =================================================
//               PRO
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             animate={{
//               x: [0, -8, 0, 10, 0],
//               y: [0, 18, 0, -15, 0],
//               rotate: [0, -0.6, 0, 0.7, 0],
//             }}
//             transition={{
//               opacity: {
//                 duration: 0.6,
//                 delay: 0.1,
//               },
//               x: {
//                 duration: 9,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//               y: {
//                 duration: 9,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//               rotate: {
//                 duration: 9,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//             }}
//           >
//             <PricingCard
//               plan={plans[1]}
//               Icon={plans[1].icon}
//             />
//           </motion.div>

//           {/* =================================================
//               TEAM
//           ================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//             }}
//             viewport={{
//               once: true,
//             }}
//             animate={{
//               x: [0, 10, 0, -12, 0],
//               y: [30, 48, 30, 12, 30],
//               rotate: [0, 0.7, 0, -0.8, 0],
//             }}
//             transition={{
//               opacity: {
//                 duration: 0.6,
//                 delay: 0.2,
//               },
//               x: {
//                 duration: 8.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//               y: {
//                 duration: 8.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//               rotate: {
//                 duration: 8.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               },
//             }}
//           >
//             <PricingCard
//               plan={plans[2]}
//               Icon={plans[2].icon}
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* =====================================================
//           MOBILE / TABLET
//       ====================================================== */}

//       <div className="relative z-10 mx-auto grid max-w-xl gap-7 px-6 lg:hidden">
//         {plans.map((plan, index) => {
//           const Icon = plan.icon;

//           return (
//             <motion.div
//               key={plan.name}
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.12,
//               }}
//             >
//               <PricingCard
//                 plan={plan}
//                 Icon={Icon}
//               />
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* =====================================================
//           BOTTOM NOTE
//       ====================================================== */}

//       <motion.p
//         initial={{
//           opacity: 0,
//           y: 20,
//         }}
//         whileInView={{
//           opacity: 1,
//         }}
//         viewport={{
//           once: true,
//         }}
//         transition={{
//           duration: 0.6,
//           delay: 0.3,
//         }}
//         className="relative z-10 mt-16 text-center text-sm text-slate-500 dark:text-zinc-500"
//       >
//         Cancel anytime. No complicated contracts.
//       </motion.p>
//     </section>
//   );
// }

// /* =========================================================
//    PRICING CARD
// ========================================================= */

// function PricingCard({
//   plan,
//   Icon,
// }: {
//   plan: (typeof plans)[number];
//   Icon: React.ElementType;
// }) {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.025,
//         y: -10,
//       }}
//       transition={{
//         duration: 0.3,
//       }}
//       className="group relative w-full"
//     >
//       {/* ===================================================
//           ANIMATED GRADIENT BORDER
//       ==================================================== */}

//       {plan.featured && (
//         <div className="absolute -inset-[1px] overflow-hidden rounded-[26px]">
//           <motion.div
//             className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,#06b6d4_70deg,#3b82f6_140deg,#a855f7_210deg,#06b6d4_280deg,transparent_340deg)]"
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </div>
//       )}

//       {/* ===================================================
//           CARD
//       ==================================================== */}

//       <div
//         className={`relative rounded-[25px] p-7 shadow-xl backdrop-blur-xl transition-shadow duration-300 ${
//           plan.featured
//             ? "m-[1px] bg-white shadow-blue-500/10 dark:bg-zinc-950"
//             : "border border-slate-200 bg-white/90 shadow-slate-900/5 dark:border-white/10 dark:bg-zinc-950/90 dark:shadow-black/20"
//         }`}
//       >
//         {/* =================================================
//             POPULAR BADGE
//         ================================================== */}

//         {plan.featured && (
//           <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//             <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20">
//               <Sparkles className="h-3.5 w-3.5" />

//               <span>Most Popular</span>
//             </div>
//           </div>
//         )}

//         {/* =================================================
//             ICON
//         ================================================== */}

//         <motion.div
//           whileHover={{
//             scale: 1.1,
//             rotate: 8,
//           }}
//           className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${
//             plan.featured
//               ? "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20"
//               : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white"
//           }`}
//         >
//           <Icon className="h-6 w-6" />
//         </motion.div>

//         {/* =================================================
//             PLAN NAME
//         ================================================== */}

//         <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
//           {plan.name}
//         </h3>

//         {/* =================================================
//             DESCRIPTION
//         ================================================== */}

//         <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600 dark:text-zinc-400">
//           {plan.description}
//         </p>

//         {/* =================================================
//             PRICE
//         ================================================== */}

//         <div className="mt-6 flex items-end gap-1">
//           <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
//             {plan.price}
//           </span>

//           <span className="mb-1 text-sm text-slate-500 dark:text-zinc-500">
//             {plan.period}
//           </span>
//         </div>

//         {/* =================================================
//             CTA BUTTON
//         ================================================== */}

//         <motion.button
//           whileHover={{
//             scale: 1.02,
//           }}
//           whileTap={{
//             scale: 0.98,
//           }}
//           className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
//             plan.featured
//               ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
//               : "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
//           }`}
//         >
//           <span>{plan.button}</span>

//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </motion.button>

//         {/* =================================================
//             FEATURES
//         ================================================== */}

//         <div className="mt-7 space-y-3.5">
//           {plan.features.map((feature) => (
//             <div
//               key={feature}
//               className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400"
//             >
//               <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
//                 <Check className="h-3 w-3" />
//               </span>

//               <span>{feature}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Crown,
  Sparkles,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Explore EchoGPT and experience the basics.",
    price: "$0",
    period: "/month",
    icon: Sparkles,
    features: [
      "Limited AI conversations",
      "Selected AI models",
      "Basic chat history",
      "Standard response speed",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    description: "Unlock the full EchoGPT experience.",
    price: "$9.99",
    period: "/month",
    icon: Crown,
    features: [
      "Unlimited AI conversations",
      "Multiple AI models",
      "Full conversation history",
      "Priority response speed",
      "Chrome extension access",
    ],
    button: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Team",
    description: "Powerful AI workflows for growing teams.",
    price: "$19.99",
    period: "/user/month",
    icon: Zap,
    features: [
      "Everything in Pro",
      "Shared AI workspace",
      "Team conversation history",
      "Advanced collaboration",
    ],
    button: "Start Team Plan",
    featured: false,
  },
];

function PricingCard({
  plan,
  Icon,
}: {
  plan: (typeof plans)[number];
  Icon: React.ElementType;
}) {
  const gradient =
    plan.name === "Free"
      ? "from-cyan-400 via-blue-500 to-cyan-500"
      : plan.name === "Pro"
        ? "from-cyan-400 via-blue-500 to-purple-600"
        : "from-blue-500 via-purple-500 to-pink-500";

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
        y: -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group relative w-full"
    >
      {/* Gradient Border */}
      <div
        className={`absolute -inset-[1.5px] rounded-[26px] bg-gradient-to-r ${gradient} opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:blur-[1px]`}
      />

      {/* Gradient Glow */}
      <div
        className={`absolute -inset-2 rounded-[30px] bg-gradient-to-r ${gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
      />

      {/* Card */}
      <div className="relative rounded-[25px] bg-white p-7 dark:bg-zinc-950">
        {/* Popular Badge */}
        {plan.featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Most Popular</span>
            </div>
          </div>
        )}

        {/* Icon */}
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 8,
          }}
          transition={{ duration: 0.25 }}
          className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${
            plan.featured
              ? "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20"
              : "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400"
          }`}
        >
          <Icon className="h-6 w-6" />
        </motion.div>

        {/* Plan Name */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {plan.name}
        </h3>

        {/* Description */}
        <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600 dark:text-zinc-400">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-end gap-1">
          <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {plan.price}
          </span>

          <span className="mb-1 text-sm text-slate-500 dark:text-zinc-500">
            {plan.period}
          </span>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
            plan.featured
              ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              : "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          }`}
        >
          <span>{plan.button}</span>

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>

        {/* Features */}
        <div className="mt-7 space-y-3.5">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  plan.featured
                    ? "bg-cyan-500/10 text-cyan-500"
                    : "bg-blue-500/10 text-blue-500"
                }`}
              >
                <Check className="h-3 w-3" />
              </span>

              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/10" />

        <div className="absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />
      </div>

      {/* Decorative Curved Lines */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-500/5 lg:block" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[580px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-500/5 lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-400">
            <Sparkles className="h-4 w-4" />
            <span>Simple Pricing</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Choose the plan that{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              fits you
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-zinc-400">
            Start exploring AI for free, or unlock the full power of
            EchoGPT with advanced models, unlimited conversations, and
            powerful productivity features.
          </p>
        </motion.div>

        {/* ========================= */}
        {/* Desktop Pricing Cards */}
        {/* ========================= */}

        <div className="relative mx-auto hidden max-w-6xl items-center gap-7 lg:grid lg:grid-cols-3">
          {/* Free Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            animate={{
              x: [0, 12, 0, -10, 0],
              y: [30, 10, 30, 45, 30],
              rotate: [0, 0.8, 0, -0.8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
              },
              x: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <PricingCard
              plan={plans[0]}
              Icon={plans[0].icon}
            />
          </motion.div>

          {/* Pro Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            animate={{
              x: [0, -8, 0, 10, 0],
              y: [0, 18, 0, -15, 0],
              rotate: [0, -0.6, 0, 0.7, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 0.15,
              },
              x: {
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="z-10"
          >
            <PricingCard
              plan={plans[1]}
              Icon={plans[1].icon}
            />
          </motion.div>

          {/* Team Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            animate={{
              x: [0, 10, 0, -12, 0],
              y: [30, 48, 30, 12, 30],
              rotate: [0, 0.7, 0, -0.8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.3,
              },
              x: {
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <PricingCard
              plan={plans[2]}
              Icon={plans[2].icon}
            />
          </motion.div>
        </div>

        {/* ========================= */}
        {/* Mobile / Tablet Cards */}
        {/* ========================= */}

        <div className="mx-auto grid max-w-xl gap-8 lg:hidden">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <PricingCard
                  plan={plan}
                  Icon={Icon}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-12 text-center text-sm text-slate-500 dark:text-zinc-500"
        >
          No complicated setup. Start free and upgrade whenever you need
          more.
        </motion.p>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Check,
//   Crown,
//   Loader2,
//   Lock,
//   Sparkles,
//   X,
//   Zap,
// } from "lucide-react";

// type BillingCycle = "monthly" | "yearly";

// export interface UpgradeModalProps {
//   open: boolean;
//   onClose: () => void;
//   onUpgrade?: (plan: "pro", billingCycle: BillingCycle) => void | Promise<void>;
// }

// interface Feature {
//   text: string;
//   included: boolean;
// }

// interface Plan {
//   name: string;
//   description: string;
//   monthlyPrice: number;
//   yearlyPrice: number;
//   features: Feature[];
//   popular?: boolean;
// }

// const plans: Plan[] = [
//   {
//     name: "Free",
//     description: "Everything you need to get started.",
//     monthlyPrice: 0,
//     yearlyPrice: 0,
//     features: [
//       {
//         text: "20 AI messages per day",
//         included: true,
//       },
//       {
//         text: "Basic AI models",
//         included: true,
//       },
//       {
//         text: "Conversation history",
//         included: true,
//       },
//       {
//         text: "Basic prompt tools",
//         included: true,
//       },
//       {
//         text: "Premium AI models",
//         included: false,
//       },
//       {
//         text: "Priority responses",
//         included: false,
//       },
//     ],
//   },
//   {
//     name: "Pro",
//     description: "Unlock the full EchoGPT experience.",
//     monthlyPrice: 12,
//     yearlyPrice: 99,
//     popular: true,
//     features: [
//       {
//         text: "Unlimited AI messages",
//         included: true,
//       },
//       {
//         text: "Premium AI models",
//         included: true,
//       },
//       {
//         text: "Unlimited conversation history",
//         included: true,
//       },
//       {
//         text: "Advanced prompt tools",
//         included: true,
//       },
//       {
//         text: "Priority responses",
//         included: true,
//       },
//       {
//         text: "Early access to new features",
//         included: true,
//       },
//     ],
//   },
// ];

// export default function UpgradeModal({
//   open,
//   onClose,
//   onUpgrade,
// }: UpgradeModalProps) {
//   const [billingCycle, setBillingCycle] =
//     useState<BillingCycle>("monthly");

//   const [isUpgrading, setIsUpgrading] = useState(false);

//   /*
//    * Close modal with Escape key
//    */
//   useEffect(() => {
//     if (!open) return;

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [open, onClose]);

//   /*
//    * Prevent body scrolling while modal is open
//    */
//   useEffect(() => {
//     if (!open) return;

//     const originalOverflow = document.body.style.overflow;

//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = originalOverflow;
//     };
//   }, [open]);

//   const handleUpgrade = async () => {
//     try {
//       setIsUpgrading(true);

//       if (onUpgrade) {
//         await onUpgrade("pro", billingCycle);
//       } else {
//         /*
//          * Temporary demo behavior.
//          *
//          * Replace this with your Stripe checkout/API call.
//          */
//         await new Promise((resolve) =>
//           setTimeout(resolve, 1200)
//         );
//       }
//     } finally {
//       setIsUpgrading(false);
//     }
//   };

//   const getPrice = (plan: Plan) => {
//     if (billingCycle === "yearly") {
//       return plan.yearlyPrice;
//     }

//     return plan.monthlyPrice;
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="upgrade-modal-title"
//         >
//           {/* Backdrop */}
//           <motion.button
//             type="button"
//             aria-label="Close upgrade modal"
//             className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* Modal */}
//           <motion.div
//             className="
//               relative
//               z-10
//               flex
//               max-h-[92vh]
//               w-full
//               max-w-4xl
//               flex-col
//               overflow-hidden
//               rounded-3xl
//               border
//               border-slate-200/80
//               bg-white
//               shadow-2xl
//               dark:border-slate-800
//               dark:bg-slate-950
//             "
//             initial={{
//               opacity: 0,
//               scale: 0.95,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.95,
//               y: 20,
//             }}
//             transition={{
//               duration: 0.25,
//               ease: "easeOut",
//             }}
//           >
//             {/* Decorative gradient */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-32
//                 -top-32
//                 h-72
//                 w-72
//                 rounded-full
//                 bg-blue-500/20
//                 blur-3xl
//               "
//             />

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -left-32
//                 -top-32
//                 h-72
//                 w-72
//                 rounded-full
//                 bg-violet-500/15
//                 blur-3xl
//               "
//             />

//             {/* Header */}
//             <div
//               className="
//                 relative
//                 flex
//                 items-start
//                 justify-between
//                 border-b
//                 border-slate-200
//                 px-5
//                 py-5
//                 sm:px-8
//                 sm:py-6
//                 dark:border-slate-800
//               "
//             >
//               <div className="flex items-start gap-3">
//                 <div
//                   className="
//                     flex
//                     h-11
//                     w-11
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     bg-gradient-to-br
//                     from-blue-500
//                     to-violet-600
//                     text-white
//                     shadow-lg
//                     shadow-blue-500/20
//                   "
//                 >
//                   <Sparkles className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <div className="mb-1 flex items-center gap-2">
//                     <h2
//                       id="upgrade-modal-title"
//                       className="
//                         text-lg
//                         font-bold
//                         tracking-tight
//                         text-slate-950
//                         sm:text-xl
//                         dark:text-white
//                       "
//                     >
//                       Upgrade EchoGPT
//                     </h2>

//                     <span
//                       className="
//                         hidden
//                         rounded-full
//                         bg-blue-500/10
//                         px-2
//                         py-0.5
//                         text-[10px]
//                         font-semibold
//                         uppercase
//                         tracking-wider
//                         text-blue-600
//                         sm:inline-flex
//                         dark:bg-blue-400/10
//                         dark:text-blue-400
//                       "
//                     >
//                       Pro
//                     </span>
//                   </div>

//                   <p
//                     className="
//                       max-w-md
//                       text-sm
//                       leading-5
//                       text-slate-500
//                       dark:text-slate-400
//                     "
//                   >
//                     Unlock more powerful AI models and advanced
//                     features.
//                   </p>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 onClick={onClose}
//                 aria-label="Close modal"
//                 className="
//                   ml-4
//                   flex
//                   h-9
//                   w-9
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-xl
//                   text-slate-500
//                   transition
//                   hover:bg-slate-100
//                   hover:text-slate-900
//                   focus:outline-none
//                   focus:ring-2
//                   focus:ring-blue-500
//                   dark:text-slate-400
//                   dark:hover:bg-slate-800
//                   dark:hover:text-white
//                 "
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Content */}
//             <div className="relative overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
//               {/* Heading */}
//               <div className="mb-6 text-center">
//                 <motion.div
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   <h3
//                     className="
//                       text-2xl
//                       font-bold
//                       tracking-tight
//                       text-slate-950
//                       sm:text-3xl
//                       dark:text-white
//                     "
//                   >
//                     More AI. Less limits.
//                   </h3>

//                   <p
//                     className="
//                       mx-auto
//                       mt-2
//                       max-w-xl
//                       text-sm
//                       leading-6
//                       text-slate-500
//                       sm:text-base
//                       dark:text-slate-400
//                     "
//                   >
//                     Get access to premium models, unlimited
//                     conversations, and powerful productivity tools.
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Billing Toggle */}
//               <div className="mb-6 flex justify-center">
//                 <div
//                   className="
//                     inline-flex
//                     rounded-xl
//                     border
//                     border-slate-200
//                     bg-slate-100
//                     p-1
//                     dark:border-slate-800
//                     dark:bg-slate-900
//                   "
//                   role="group"
//                   aria-label="Billing cycle"
//                 >
//                   <button
//                     type="button"
//                     onClick={() => setBillingCycle("monthly")}
//                     className={`
//                       rounded-lg
//                       px-4
//                       py-2
//                       text-xs
//                       font-semibold
//                       transition
//                       sm:text-sm
//                       ${
//                         billingCycle === "monthly"
//                           ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
//                           : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
//                       }
//                     `}
//                   >
//                     Monthly
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setBillingCycle("yearly")}
//                     className={`
//                       flex
//                       items-center
//                       gap-2
//                       rounded-lg
//                       px-4
//                       py-2
//                       text-xs
//                       font-semibold
//                       transition
//                       sm:text-sm
//                       ${
//                         billingCycle === "yearly"
//                           ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
//                           : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
//                       }
//                     `}
//                   >
//                     Yearly

//                     <span
//                       className="
//                         rounded-full
//                         bg-emerald-500/10
//                         px-1.5
//                         py-0.5
//                         text-[10px]
//                         font-bold
//                         text-emerald-600
//                         dark:text-emerald-400
//                       "
//                     >
//                       SAVE
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               {/* Plans */}
//               <div className="grid gap-4 md:grid-cols-2">
//                 {plans.map((plan, index) => {
//                   const price = getPrice(plan);

//                   return (
//                     <motion.div
//                       key={plan.name}
//                       initial={{
//                         opacity: 0,
//                         y: 15,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       transition={{
//                         delay: 0.15 + index * 0.08,
//                       }}
//                       className={`
//                         relative
//                         overflow-hidden
//                         rounded-2xl
//                         border
//                         p-5
//                         sm:p-6
//                         ${
//                           plan.popular
//                             ? `
//                               border-blue-500
//                               bg-gradient-to-b
//                               from-blue-500/[0.07]
//                               to-violet-500/[0.03]
//                               shadow-lg
//                               shadow-blue-500/10
//                             `
//                             : `
//                               border-slate-200
//                               bg-slate-50/50
//                               dark:border-slate-800
//                               dark:bg-slate-900/40
//                             `
//                         }
//                       `}
//                     >
//                       {/* Popular Badge */}
//                       {plan.popular && (
//                         <div
//                           className="
//                             absolute
//                             right-4
//                             top-4
//                             flex
//                             items-center
//                             gap-1
//                             rounded-full
//                             bg-blue-600
//                             px-2.5
//                             py-1
//                             text-[10px]
//                             font-bold
//                             uppercase
//                             tracking-wide
//                             text-white
//                           "
//                         >
//                           <Crown className="h-3 w-3" />
//                           Recommended
//                         </div>
//                       )}

//                       {/* Plan Header */}
//                       <div className="mb-5">
//                         <div className="mb-2 flex items-center gap-2">
//                           {plan.popular ? (
//                             <div
//                               className="
//                                 flex
//                                 h-8
//                                 w-8
//                                 items-center
//                                 justify-center
//                                 rounded-lg
//                                 bg-blue-500/10
//                                 text-blue-600
//                                 dark:text-blue-400
//                               "
//                             >
//                               <Zap className="h-4 w-4" />
//                             </div>
//                           ) : (
//                             <div
//                               className="
//                                 flex
//                                 h-8
//                                 w-8
//                                 items-center
//                                 justify-center
//                                 rounded-lg
//                                 bg-slate-200
//                                 text-slate-600
//                                 dark:bg-slate-800
//                                 dark:text-slate-400
//                               "
//                             >
//                               <Lock className="h-4 w-4" />
//                             </div>
//                           )}

//                           <h4
//                             className="
//                               font-bold
//                               text-slate-950
//                               dark:text-white
//                             "
//                           >
//                             {plan.name}
//                           </h4>
//                         </div>

//                         <p
//                           className="
//                             text-xs
//                             leading-5
//                             text-slate-500
//                             dark:text-slate-400
//                           "
//                         >
//                           {plan.description}
//                         </p>
//                       </div>

//                       {/* Price */}
//                       <div className="mb-6">
//                         <div className="flex items-end gap-1">
//                           <span
//                             className="
//                               text-3xl
//                               font-bold
//                               tracking-tight
//                               text-slate-950
//                               sm:text-4xl
//                               dark:text-white
//                             "
//                           >
//                             ${price}
//                           </span>

//                           {price > 0 && (
//                             <span
//                               className="
//                                 mb-1
//                                 text-xs
//                                 text-slate-500
//                                 dark:text-slate-400
//                               "
//                             >
//                               /{" "}
//                               {billingCycle === "monthly"
//                                 ? "month"
//                                 : "year"}
//                             </span>
//                           )}
//                         </div>

//                         {billingCycle === "yearly" &&
//                           plan.popular && (
//                             <p
//                               className="
//                                 mt-1
//                                 text-xs
//                                 font-medium
//                                 text-emerald-600
//                                 dark:text-emerald-400
//                               "
//                             >
//                               Save $45 compared to monthly
//                             </p>
//                           )}
//                       </div>

//                       {/* Features */}
//                       <div className="space-y-3">
//                         {plan.features.map((feature) => (
//                           <div
//                             key={feature.text}
//                             className="flex items-start gap-2.5"
//                           >
//                             <div
//                               className={`
//                                 mt-0.5
//                                 flex
//                                 h-4
//                                 w-4
//                                 shrink-0
//                                 items-center
//                                 justify-center
//                                 rounded-full
//                                 ${
//                                   feature.included
//                                     ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
//                                     : "bg-slate-200 text-slate-400 dark:bg-slate-800"
//                                 }
//                               `}
//                             >
//                               {feature.included ? (
//                                 <Check className="h-2.5 w-2.5" />
//                               ) : (
//                                 <X className="h-2.5 w-2.5" />
//                               )}
//                             </div>

//                             <span
//                               className={`
//                                 text-xs
//                                 leading-5
//                                 ${
//                                   feature.included
//                                     ? "text-slate-700 dark:text-slate-300"
//                                     : "text-slate-400 dark:text-slate-600"
//                                 }
//                               `}
//                             >
//                               {feature.text}
//                             </span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Action */}
//                       <div className="mt-6">
//                         {plan.popular ? (
//                           <button
//                             type="button"
//                             onClick={handleUpgrade}
//                             disabled={isUpgrading}
//                             className="
//                               flex
//                               w-full
//                               items-center
//                               justify-center
//                               gap-2
//                               rounded-xl
//                               bg-gradient-to-r
//                               from-blue-600
//                               to-violet-600
//                               px-4
//                               py-3
//                               text-sm
//                               font-semibold
//                               text-white
//                               shadow-lg
//                               shadow-blue-500/20
//                               transition
//                               hover:scale-[1.01]
//                               hover:shadow-blue-500/30
//                               focus:outline-none
//                               focus:ring-2
//                               focus:ring-blue-500
//                               focus:ring-offset-2
//                               disabled:cursor-not-allowed
//                               disabled:opacity-70
//                               dark:focus:ring-offset-slate-950
//                             "
//                           >
//                             {isUpgrading ? (
//                               <>
//                                 <Loader2 className="h-4 w-4 animate-spin" />
//                                 Processing...
//                               </>
//                             ) : (
//                               <>
//                                 Upgrade to Pro
//                                 <Sparkles className="h-4 w-4" />
//                               </>
//                             )}
//                           </button>
//                         ) : (
//                           <button
//                             type="button"
//                             disabled
//                             className="
//                               w-full
//                               cursor-default
//                               rounded-xl
//                               border
//                               border-slate-200
//                               bg-white
//                               px-4
//                               py-3
//                               text-sm
//                               font-semibold
//                               text-slate-500
//                               dark:border-slate-800
//                               dark:bg-slate-900
//                               dark:text-slate-400
//                             "
//                           >
//                             Current plan
//                           </button>
//                         )}
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* Bottom trust text */}
//               <div
//                 className="
//                   mt-6
//                   flex
//                   flex-col
//                   items-center
//                   justify-center
//                   gap-2
//                   text-center
//                   sm:flex-row
//                   sm:gap-4
//                 "
//               >
//                 <span
//                   className="
//                     text-[11px]
//                     text-slate-400
//                     dark:text-slate-500
//                   "
//                 >
//                   Cancel anytime
//                 </span>

//                 <span
//                   className="
//                     hidden
//                     h-1
//                     w-1
//                     rounded-full
//                     bg-slate-300
//                     sm:block
//                     dark:bg-slate-700
//                   "
//                 />

//                 <span
//                   className="
//                     text-[11px]
//                     text-slate-400
//                     dark:text-slate-500
//                   "
//                 >
//                   Secure payment
//                 </span>

//                 <span
//                   className="
//                     hidden
//                     h-1
//                     w-1
//                     rounded-full
//                     bg-slate-300
//                     sm:block
//                     dark:bg-slate-700
//                   "
//                 />

//                 <span
//                   className="
//                     text-[11px]
//                     text-slate-400
//                     dark:text-slate-500
//                   "
//                 >
//                   No hidden fees
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Crown,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type PlanName = "Free" | "Pro" | "Team";
type BillingCycle = "monthly" | "yearly";

interface UpgradeModalProps {
  open: boolean;
  onClose: () => void;
  onUpgrade?: (
    plan: PlanName,
    billingCycle: BillingCycle,
  ) => void | Promise<void>;
  defaultPlan?: PlanName;
}

const plans = [
  {
    name: "Free" as const,
    description: "Explore EchoGPT and experience the basics.",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    monthlyPeriod: "/month",
    yearlyPeriod: "/year",
    icon: Sparkles,
    features: [
      "Limited AI conversations",
      "Selected AI models",
      "Basic chat history",
      "Standard response speed",
    ],
    featured: false,
  },
  {
    name: "Pro" as const,
    description: "Unlock the full EchoGPT experience.",
    monthlyPrice: "$9.99",
    yearlyPrice: "$99",
    monthlyPeriod: "/month",
    yearlyPeriod: "/year",
    icon: Crown,
    features: [
      "Unlimited AI conversations",
      "Multiple AI models",
      "Full conversation history",
      "Priority response speed",
      "Chrome extension access",
    ],
    featured: true,
  },
  {
    name: "Team" as const,
    description: "Powerful AI workflows for growing teams.",
    monthlyPrice: "$19.99",
    yearlyPrice: "$199",
    monthlyPeriod: "/user/month",
    yearlyPeriod: "/user/year",
    icon: Zap,
    features: [
      "Everything in Pro",
      "Shared AI workspace",
      "Team conversation history",
      "Advanced collaboration",
    ],
    featured: false,
  },
];

export default function UpgradeModal({
  open,
  onClose,
  onUpgrade,
  defaultPlan = "Pro",
}: UpgradeModalProps) {
  const [billingCycle, setBillingCycle] =
    useState<BillingCycle>("monthly");

  const [selectedPlan, setSelectedPlan] =
    useState<PlanName>(defaultPlan);

  const [loading, setLoading] = useState(false);

  /*
   * Escape key
   */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /*
   * Prevent background page scrolling
   */
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  /*
   * Continue / upgrade
   */
  const handleContinue = async () => {
    if (selectedPlan === "Free") {
      onClose();
      return;
    }

    try {
      setLoading(true);

      await onUpgrade?.(selectedPlan, billingCycle);

      onClose();
    } catch (error) {
      console.error("Upgrade failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* =====================================================
              BACKDROP
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* =====================================================
              MODAL WRAPPER
          ====================================================== */}
          <div
            className="
              fixed
              inset-0
              z-50
              flex
              items-start
              justify-center
              overflow-y-auto
              p-3
              sm:p-6
              lg:items-center
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="upgrade-modal-title"
          >
            {/* =================================================
                MODAL
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                my-3
                flex
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-2xl
                dark:border-white/10
                dark:bg-zinc-950
                sm:my-6
                sm:rounded-3xl
                lg:my-0
                lg:max-h-[90vh]
              "
            >
              {/* =================================================
                  BACKGROUND GLOW
              ================================================== */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="absolute -right-20 top-1/2 h-52 w-52 rounded-full bg-purple-500/10 blur-3xl" />
              </div>

              {/* =================================================
                  HEADER
              ================================================== */}
              <div
                className="
                  relative
                  z-30
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-slate-200/70
                  bg-white/90
                  px-4
                  py-3
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-zinc-950/90
                  sm:px-6
                "
              >
                {/* Logo / Title */}
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    EchoGPT Plans
                  </span>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close upgrade modal"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-slate-200
                    bg-slate-50
                    text-slate-500
                    transition
                    hover:bg-slate-100
                    hover:text-slate-900
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-zinc-400
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* =================================================
                  SCROLLABLE CONTENT
              ================================================== */}
              <div
                className="
                  relative
                  z-10
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  px-4
                  py-6
                  sm:px-6
                  sm:py-7
                  lg:px-8
                "
              >
                {/* =================================================
                    TITLE
                ================================================== */}
                <div className="mx-auto max-w-2xl text-center">
                  {/* Badge */}
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-xs font-medium text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-400">
                    <Sparkles className="h-3.5 w-3.5" />

                    <span>Choose your plan</span>
                  </div>

                  {/* Heading */}
                  <h2
                    id="upgrade-modal-title"
                    className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
                  >
                    Upgrade your{" "}
                    <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      EchoGPT
                    </span>{" "}
                    experience
                  </h2>

                  {/* Description */}
                  <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-zinc-400">
                    Choose the plan that fits your AI workflow.
                  </p>
                </div>

                {/* =================================================
                    BILLING TOGGLE
                ================================================== */}
                <div className="mt-5 flex justify-center">
                  <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5">
                    {/* Monthly */}
                    <button
                      type="button"
                      onClick={() => setBillingCycle("monthly")}
                      className={`
                        rounded-lg
                        px-4
                        py-1.5
                        text-xs
                        font-medium
                        transition
                        ${
                          billingCycle === "monthly"
                            ? "bg-white text-slate-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                            : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                        }
                      `}
                    >
                      Monthly
                    </button>

                    {/* Yearly */}
                    <button
                      type="button"
                      onClick={() => setBillingCycle("yearly")}
                      className={`
                        flex
                        items-center
                        gap-1.5
                        rounded-lg
                        px-4
                        py-1.5
                        text-xs
                        font-medium
                        transition
                        ${
                          billingCycle === "yearly"
                            ? "bg-white text-slate-900 shadow-sm dark:bg-zinc-800 dark:text-white"
                            : "text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                        }
                      `}
                    >
                      Yearly

                      <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                        SAVE
                      </span>
                    </button>
                  </div>
                </div>

                {/* =================================================
                    PRICING CARDS
                ================================================== */}
                <div className="mx-auto mt-6 grid max-w-4xl gap-4 lg:grid-cols-3">
                  {plans.map((plan, index) => {
                    const Icon = plan.icon;

                    const isSelected =
                      selectedPlan === plan.name;

                    const price =
                      billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice;

                    const period =
                      billingCycle === "monthly"
                        ? plan.monthlyPeriod
                        : plan.yearlyPeriod;

                    const borderGradient =
                      plan.name === "Free"
                        ? "from-cyan-400 via-blue-500 to-cyan-500"
                        : plan.name === "Pro"
                          ? "from-cyan-400 via-blue-500 to-purple-600"
                          : "from-blue-500 via-purple-500 to-pink-500";

                    return (
                      <motion.button
                        key={plan.name}
                        type="button"
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.07,
                        }}
                        onClick={() =>
                          setSelectedPlan(plan.name)
                        }
                        className={`
                          group
                          relative
                          text-left
                          ${
                            plan.featured
                              ? "lg:-translate-y-1"
                              : ""
                          }
                        `}
                      >
                        {/* Gradient Border */}
                        <div
                          className={`
                            absolute
                            -inset-[1px]
                            rounded-2xl
                            bg-gradient-to-r
                            ${borderGradient}
                            transition-opacity
                            ${
                              isSelected
                                ? "opacity-100"
                                : "opacity-25 group-hover:opacity-60"
                            }
                          `}
                        />

                        {/* Card */}
                        <div
                          className={`
                            relative
                            h-full
                            rounded-2xl
                            bg-white
                            p-4
                            dark:bg-zinc-950
                            ${
                              isSelected
                                ? "ring-2 ring-cyan-500/30"
                                : ""
                            }
                          `}
                        >
                          {/* Most Popular */}
                          {plan.featured && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                              <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-3 py-1 text-[9px] font-bold text-white shadow-lg">
                                <Sparkles className="h-2.5 w-2.5" />

                                <span>Most Popular</span>
                              </div>
                            </div>
                          )}

                          {/* Selected indicator */}
                          <div className="absolute right-3 top-3">
                            <div
                              className={`
                                flex
                                h-5
                                w-5
                                items-center
                                justify-center
                                rounded-full
                                border
                                transition
                                ${
                                  isSelected
                                    ? "border-cyan-500 bg-cyan-500 text-white"
                                    : "border-slate-300 dark:border-zinc-700"
                                }
                              `}
                            >
                              {isSelected && (
                                <Check className="h-3 w-3" />
                              )}
                            </div>
                          </div>

                          {/* Icon */}
                          <div
                            className={`
                              mb-3
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              ${
                                plan.featured
                                  ? "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                                  : "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                              }
                            `}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          {/* Plan name */}
                          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                            {plan.name}
                          </h3>

                          {/* Description */}
                          <p className="mt-1 min-h-[40px] text-[11px] leading-5 text-slate-600 dark:text-zinc-400">
                            {plan.description}
                          </p>

                          {/* Price */}
                          <div className="mt-3 flex items-end gap-1">
                            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                              {price}
                            </span>

                            <span className="mb-0.5 text-[10px] text-slate-500 dark:text-zinc-500">
                              {period}
                            </span>
                          </div>

                          {/* Features */}
                          <div className="mt-4 space-y-2">
                            {plan.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-2"
                              >
                                <span
                                  className={`
                                    mt-0.5
                                    flex
                                    h-4
                                    w-4
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    ${
                                      plan.featured
                                        ? "bg-cyan-500/10 text-cyan-500"
                                        : "bg-blue-500/10 text-blue-500"
                                    }
                                  `}
                                >
                                  <Check className="h-2.5 w-2.5" />
                                </span>

                                <span className="text-[11px] leading-4 text-slate-600 dark:text-zinc-400">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* =================================================
                    CONTINUE BUTTON
                ================================================== */}
                <div className="mt-6 flex flex-col items-center gap-2">
                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={handleContinue}
                    disabled={loading}
                    className="
                      flex
                      min-w-[210px]
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      via-blue-500
                      to-purple-600
                      px-6
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-blue-500/20
                      transition
                      hover:shadow-blue-500/30
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        Processing...
                      </>
                    ) : (
                      <>
                        {selectedPlan === "Free"
                          ? "Continue with Free"
                          : selectedPlan === "Pro"
                            ? "Upgrade to Pro"
                            : "Start Team Plan"}

                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-[11px] text-slate-500 dark:text-zinc-500">
                    No complicated setup. Cancel anytime.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


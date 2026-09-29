
// "use client";

// import { FormEvent, useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   CheckCircle2,
//   Mail,
//   Send,
//   Sparkles,
// } from "lucide-react";

// export default function NewsletterPage() {
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();

//     // Clear previous messages
//     setSuccess("");
//     setError("");

//     const subscriberEmail = email.trim();

//     // Basic validation
//     if (!subscriberEmail) {
//       setError("Please enter your email address.");
//       return;
//     }

//     // Email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailRegex.test(subscriberEmail)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // Get EmailJS environment variables
//     const serviceId =
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

//     const templateId =
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

//     const publicKey =
//       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

//     // Check EmailJS configuration
//     if (!serviceId || !templateId || !publicKey) {
//       console.warn("EmailJS configuration is missing:", {
//         serviceId: Boolean(serviceId),
//         templateId: Boolean(templateId),
//         publicKey: Boolean(publicKey),
//       });

//       setError(
//         "Email service is not configured correctly. Please try again later."
//       );

//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await emailjs.send(
//         serviceId,
//         templateId,
//         {
//           subscriber_email: subscriberEmail,
//           email: subscriberEmail,
//         },
//         {
//           publicKey,
//         }
//       );

//       // Development debugging
//       console.log("EmailJS success:", response);

//       setSuccess(
//         "You're subscribed! Check your inbox for EchoGPT updates."
//       );

//       setEmail("");
//     } catch (error: unknown) {
//       console.warn("EmailJS request failed:", error);

//       // EmailJS usually returns an object containing status/text
//       if (
//         typeof error === "object" &&
//         error !== null &&
//         "text" in error
//       ) {
//         const emailJsError = error as {
//           status?: number;
//           text?: string;
//         };

//         console.warn("EmailJS status:", emailJsError.status);
//         console.warn("EmailJS message:", emailJsError.text);
//       }

//       setError(
//         "Something went wrong while subscribing. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEmailChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setEmail(event.target.value);

//     // Remove old messages while typing
//     if (error) {
//       setError("");
//     }

//     if (success) {
//       setSuccess("");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-background px-4 py-12 text-foreground">
//       <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
//         <section className="relative w-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10 lg:p-14">
//           {/* Decorative Background */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-32
//               -top-32
//               h-80
//               w-80
//               rounded-full
//               bg-cyan-500/10
//               blur-3xl
//             "
//           />

//           <div
//             className="
//               pointer-events-none
//               absolute
//               -bottom-32
//               -left-32
//               h-80
//               w-80
//               rounded-full
//               bg-blue-500/10
//               blur-3xl
//             "
//           />

//           <div className="relative mx-auto max-w-2xl text-center">
//             {/* Icon */}
//             <div
//               className="
//                 mx-auto
//                 mb-6
//                 flex
//                 h-16
//                 w-16
//                 items-center
//                 justify-center
//                 rounded-2xl
//                 bg-gradient-to-br
//                 from-cyan-400
//                 to-blue-600
//                 shadow-lg
//                 shadow-blue-500/20
//               "
//             >
//               <Mail className="h-8 w-8 text-white" />
//             </div>

//             {/* Badge */}
//             <div
//               className="
//                 mb-4
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-cyan-500/20
//                 bg-cyan-500/10
//                 px-3
//                 py-1.5
//                 text-xs
//                 font-medium
//                 text-cyan-600
//                 dark:text-cyan-400
//               "
//             >
//               <Sparkles className="h-3.5 w-3.5" />
//               EchoGPT Newsletter
//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 text-3xl
//                 font-bold
//                 tracking-tight
//                 sm:text-4xl
//                 lg:text-5xl
//               "
//             >
//               Stay ahead with{" "}
//               <span
//                 className="
//                   bg-gradient-to-r
//                   from-cyan-400
//                   to-blue-600
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 EchoGPT
//               </span>
//             </h1>

//             {/* Description */}
//             <p
//               className="
//                 mx-auto
//                 mt-5
//                 max-w-xl
//                 text-sm
//                 leading-6
//                 text-muted-foreground
//                 sm:text-base
//               "
//             >
//               Get the latest AI updates, new model releases,
//               productivity tips, product improvements, and
//               exclusive EchoGPT news directly in your inbox.
//             </p>

//             {/* Newsletter Form */}
//             <form
//               onSubmit={handleSubmit}
//               className="mx-auto mt-8 max-w-xl"
//             >
//               <div className="flex flex-col gap-3 sm:flex-row">
//                 {/* Email Input */}
//                 <div className="relative flex-1">
//                   <Mail
//                     className="
//                       absolute
//                       left-4
//                       top-1/2
//                       h-4
//                       w-4
//                       -translate-y-1/2
//                       text-muted-foreground
//                     "
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder="Enter your email address"
//                     aria-label="Email address"
//                     aria-invalid={Boolean(error)}
//                     autoComplete="email"
//                     required
//                     disabled={isLoading}
//                     className="
//                       h-12
//                       w-full
//                       rounded-xl
//                       border
//                       border-border
//                       bg-background
//                       pl-11
//                       pr-4
//                       text-sm
//                       text-foreground
//                       outline-none
//                       transition
//                       placeholder:text-muted-foreground
//                       focus:border-cyan-500
//                       focus:ring-2
//                       focus:ring-cyan-500/20
//                       disabled:cursor-not-allowed
//                       disabled:opacity-60
//                     "
//                   />
//                 </div>

//                 {/* Subscribe Button */}
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="
//                     flex
//                     h-12
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     bg-gradient-to-r
//                     from-cyan-500
//                     to-blue-600
//                     px-6
//                     text-sm
//                     font-semibold
//                     text-white
//                     shadow-lg
//                     shadow-blue-500/20
//                     transition
//                     hover:shadow-blue-500/30
//                     focus:outline-none
//                     focus:ring-2
//                     focus:ring-cyan-500
//                     focus:ring-offset-2
//                     disabled:cursor-not-allowed
//                     disabled:opacity-60
//                   "
//                 >
//                   {isLoading ? (
//                     <>
//                       <span
//                         className="
//                           h-4
//                           w-4
//                           animate-spin
//                           rounded-full
//                           border-2
//                           border-white/30
//                           border-t-white
//                         "
//                         aria-hidden="true"
//                       />

//                       Subscribing...
//                     </>
//                   ) : (
//                     <>
//                       Subscribe
//                       <Send className="h-4 w-4" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>

//             {/* Success Message */}
//             {success && (
//               <div
//                 role="status"
//                 aria-live="polite"
//                 className="
//                   mx-auto
//                   mt-5
//                   flex
//                   max-w-xl
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-xl
//                   border
//                   border-emerald-500/20
//                   bg-emerald-500/10
//                   px-4
//                   py-3
//                   text-sm
//                   text-emerald-600
//                   dark:text-emerald-400
//                 "
//               >
//                 <CheckCircle2
//                   className="h-4 w-4 shrink-0"
//                 />

//                 {success}
//               </div>
//             )}

//             {/* Error Message */}
//             {error && (
//               <div
//                 role="alert"
//                 aria-live="assertive"
//                 className="
//                   mx-auto
//                   mt-5
//                   max-w-xl
//                   rounded-xl
//                   border
//                   border-red-500/20
//                   bg-red-500/10
//                   px-4
//                   py-3
//                   text-sm
//                   text-red-600
//                   dark:text-red-400
//                 "
//               >
//                 {error}
//               </div>
//             )}

//             {/* Privacy */}
//             <p className="mt-5 text-xs text-muted-foreground">
//               No spam. Unsubscribe anytime. Your email will only
//               be used for EchoGPT updates.
//             </p>

//             {/* Benefits */}
//             <div
//               className="
//                 mt-10
//                 grid
//                 gap-4
//                 border-t
//                 border-border
//                 pt-8
//                 sm:grid-cols-3
//               "
//             >
//               {/* AI Updates */}
//               <div
//                 className="
//                   rounded-xl
//                   border
//                   border-border
//                   bg-background/60
//                   p-4
//                   transition
//                   hover:border-cyan-500/30
//                 "
//               >
//                 <Sparkles
//                   className="
//                     mx-auto
//                     mb-2
//                     h-5
//                     w-5
//                     text-cyan-500
//                   "
//                 />

//                 <p className="text-sm font-semibold">
//                   AI Updates
//                 </p>

//                 <p className="mt-1 text-xs text-muted-foreground">
//                   Discover new AI features and models.
//                 </p>
//               </div>

//               {/* Product News */}
//               <div
//                 className="
//                   rounded-xl
//                   border
//                   border-border
//                   bg-background/60
//                   p-4
//                   transition
//                   hover:border-blue-500/30
//                 "
//               >
//                 <Send
//                   className="
//                     mx-auto
//                     mb-2
//                     h-5
//                     w-5
//                     text-blue-500
//                   "
//                 />

//                 <p className="text-sm font-semibold">
//                   Product News
//                 </p>

//                 <p className="mt-1 text-xs text-muted-foreground">
//                   Stay informed about EchoGPT improvements.
//                 </p>
//               </div>

//               {/* Useful Tips */}
//               <div
//                 className="
//                   rounded-xl
//                   border
//                   border-border
//                   bg-background/60
//                   p-4
//                   transition
//                   hover:border-violet-500/30
//                 "
//               >
//                 <Mail
//                   className="
//                     mx-auto
//                     mb-2
//                     h-5
//                     w-5
//                     text-violet-500
//                   "
//                 />

//                 <p className="text-sm font-semibold">
//                   Useful Tips
//                 </p>

//                 <p className="mt-1 text-xs text-muted-foreground">
//                   Get practical AI productivity tips.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
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

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    const subscriberEmail = email.trim();

    if (!subscriberEmail) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(subscriberEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS configuration is missing:", {
        serviceId: Boolean(serviceId),
        templateId: Boolean(templateId),
        publicKey: Boolean(publicKey),
      });

      setError(
        "Email service is not configured correctly. Please try again later.",
      );

      return;
    }

    setIsLoading(true);

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          subscriber_email: subscriberEmail,
          email: subscriberEmail,
        },
        {
          publicKey,
        },
      );

      console.log("EmailJS success:", response);

      setSuccess(
        "You're subscribed! Check your inbox for EchoGPT updates.",
      );

      setEmail("");
    } catch (submitError: unknown) {
      console.warn(
        "EmailJS request failed:",
        submitError,
      );

      if (
        typeof submitError === "object" &&
        submitError !== null &&
        "text" in submitError
      ) {
        const emailJsError = submitError as {
          status?: number;
          text?: string;
        };

        console.warn(
          "EmailJS status:",
          emailJsError.status,
        );

        console.warn(
          "EmailJS message:",
          emailJsError.text,
        );
      }

      setError(
        "Something went wrong while subscribing. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setEmail(event.target.value);

    if (error) {
      setError("");
    }

    if (success) {
      setSuccess("");
    }
  };

  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden bg-background text-foreground">
      {/* ================================================= */}
      {/* SCROLLABLE PAGE CONTENT */}
      {/* ================================================= */}

      <div className="flex-1 overflow-y-auto overscroll-contain">
        <div className="flex min-h-full items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
          <section className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-xl sm:p-10 lg:p-14">
            {/* Decorative backgrounds */}

            <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              {/* Icon */}

              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">
                <Mail className="size-8 text-white" />
              </div>

              {/* Badge */}

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                <Sparkles className="size-3.5" />
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
                Get the latest AI updates, new model releases,
                productivity tips, product improvements, and
                exclusive EchoGPT news directly in your inbox.
              </p>

              {/* Newsletter Form */}

              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 max-w-xl"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative min-w-0 flex-1">
                    <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      aria-invalid={Boolean(error)}
                      autoComplete="email"
                      required
                      disabled={isLoading}
                      className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                          aria-hidden="true"
                        />

                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <Send className="size-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Success Message */}

              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="size-4 shrink-0" />
                  {success}
                </div>
              )}

              {/* Error Message */}

              {error && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mx-auto mt-5 max-w-xl rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                >
                  {error}
                </div>
              )}

              {/* Privacy */}

              <p className="mt-5 text-xs text-muted-foreground">
                No spam. Unsubscribe anytime. Your email will
                only be used for EchoGPT updates.
              </p>

              {/* Benefits */}

              <div className="mt-8 grid gap-4 border-t border-border pt-7 sm:mt-10 sm:grid-cols-3 sm:pt-8">
                <div className="rounded-xl border border-border bg-background/60 p-4 transition hover:border-cyan-500/30">
                  <Sparkles className="mx-auto mb-2 size-5 text-cyan-500" />

                  <p className="text-sm font-semibold">
                    AI Updates
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Discover new AI features and models.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-background/60 p-4 transition hover:border-blue-500/30">
                  <Send className="mx-auto mb-2 size-5 text-blue-500" />

                  <p className="text-sm font-semibold">
                    Product News
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Stay informed about EchoGPT improvements.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-background/60 p-4 transition hover:border-violet-500/30">
                  <Mail className="mx-auto mb-2 size-5 text-violet-500" />

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
      </div>
    </main>
  );
}
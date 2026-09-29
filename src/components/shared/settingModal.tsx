// "use client";

// import Link from "next/link";
// import {
//   Check,
//   ExternalLink,
//   FileText,
//   Palette,
//   Shield,
//   X,
// } from "lucide-react";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";


// import {
//   AIModelId,
//   aiModels,
// } from "@/components/data/AImodels";
// import ThemeToggle from "../layouts/ThemeToggle";

// interface SettingsModalProps {
//   open: boolean;
//   onClose: () => void;
//   selectedModel: AIModelId;
//   onModelChange: (modelId: AIModelId) => void;
// }

// const SOCIAL_LINKS = {
//   linkedin: "https://www.linkedin.com/",
//   facebook: "https://www.facebook.com/",
// };

// export default function SettingsModal({
//   open,
//   onClose,
//   selectedModel,
//   onModelChange,
// }: SettingsModalProps) {
//   if (!open) {
//     return null;
//   }

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="settings-title"
//         className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
//         onClick={(event) => event.stopPropagation()}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-border px-5 py-4">
//           <div>
//             <h2
//               id="settings-title"
//               className="text-base font-semibold text-foreground"
//             >
//               Settings
//             </h2>

//             <p className="mt-0.5 text-xs text-muted-foreground">
//               Customize your EchoGPT experience
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="Close settings"
//             className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="max-h-[70vh] overflow-y-auto p-5">
//           <div className="space-y-6">
//             {/* Appearance */}
//             <section>
//               <div className="mb-3 flex items-center gap-2">
//                 <Palette className="h-4 w-4 text-cyan-500" />

//                 <h3 className="text-sm font-semibold text-foreground">
//                   Appearance
//                 </h3>
//               </div>

//               <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
//                 <div>
//                   <p className="text-sm font-medium text-foreground">
//                     Theme
//                   </p>

//                   <p className="mt-1 text-xs text-muted-foreground">
//                     Choose between light and dark mode.
//                   </p>
//                 </div>

//                 <ThemeToggle />
//               </div>
//             </section>

//             {/* Default Model */}
//             <section>
//               <div className="mb-3">
//                 <h3 className="text-sm font-semibold text-foreground">
//                   Default Model
//                 </h3>

//                 <p className="mt-1 text-xs text-muted-foreground">
//                   Choose the model used when starting a new chat.
//                 </p>
//               </div>

//               <div className="space-y-2">
//                 {aiModels.map((model) => {
//                   const isSelected = selectedModel === model.id;

//                   return (
//                     <button
//                       key={model.id}
//                       type="button"
//                       onClick={() =>
//                         onModelChange(model.id)
//                       }
//                       className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition ${
//                         isSelected
//                           ? "border-cyan-500/50 bg-cyan-500/5"
//                           : "border-border bg-card hover:border-cyan-500/30 hover:bg-muted/50"
//                       }`}
//                     >
//                       <div className="min-w-0">
//                         <p className="text-sm font-medium text-foreground">
//                           {model.name}
//                         </p>

//                         {model.description && (
//                           <p className="mt-1 text-xs text-muted-foreground">
//                             {model.description}
//                           </p>
//                         )}
//                       </div>

//                       {isSelected && (
//                         <div className="ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
//                           <Check className="h-3.5 w-3.5" />
//                         </div>
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             </section>

//             {/* Follow Us */}
//             <section>
//               <div className="mb-3">
//                 <h3 className="text-sm font-semibold text-foreground">
//                   Follow Us
//                 </h3>

//                 <p className="mt-1 text-xs text-muted-foreground">
//                   Stay connected with EchoGPT.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <a
//                   href={SOCIAL_LINKS.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-cyan-500/40 hover:bg-cyan-500/5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
//                     <FaLinkedinIn className="h-4 w-4" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-foreground">
//                       LinkedIn
//                     </p>

//                     <p className="text-[11px] text-muted-foreground">
//                       Follow us
//                     </p>
//                   </div>

//                   <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
//                 </a>

//                 <a
//                   href={SOCIAL_LINKS.facebook}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-cyan-500/40 hover:bg-cyan-500/5"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
//                     <FaFacebookF className="h-4 w-4" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium text-foreground">
//                       Facebook
//                     </p>

//                     <p className="text-[11px] text-muted-foreground">
//                       Follow us
//                     </p>
//                   </div>

//                   <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
//                 </a>
//               </div>
//             </section>

//             {/* Legal */}
//             <section>
//               <div className="mb-3">
//                 <h3 className="text-sm font-semibold text-foreground">
//                   Legal
//                 </h3>

//                 <p className="mt-1 text-xs text-muted-foreground">
//                   Review EchoGPT policies and terms.
//                 </p>
//               </div>

//               <div className="space-y-2">
//                 <Link
//                   href="/terms-of-use"
//                   onClick={onClose}
//                   className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-cyan-500/40 hover:bg-muted/50"
//                 >
//                   <FileText className="h-4 w-4 text-cyan-500" />

//                   <div>
//                     <p className="text-sm font-medium text-foreground">
//                       Terms of Use
//                     </p>

//                     <p className="text-[11px] text-muted-foreground">
//                       Read our terms and conditions.
//                     </p>
//                   </div>
//                 </Link>

//                 <Link
//                   href="/privacy-policy"
//                   onClick={onClose}
//                   className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-cyan-500/40 hover:bg-muted/50"
//                 >
//                   <Shield className="h-4 w-4 text-cyan-500" />

//                   <div>
//                     <p className="text-sm font-medium text-foreground">
//                       Privacy Policy
//                     </p>

//                     <p className="text-[11px] text-muted-foreground">
//                       Learn how your data is handled.
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//             </section>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-end border-t border-border px-5 py-4">
//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-blue-500/20"
//           >
//             Done
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import {
  Check,
  ChevronDown,
  ExternalLink,
  FileText,
  Palette,
  Shield,
  X,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

import {
  AIModelId,
  aiModels,
} from "@/components/data/AImodels";

import ThemeToggle from "../layouts/ThemeToggle";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  selectedModel: AIModelId;
  onModelChange: (modelId: AIModelId) => void;
}

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/",
  facebook: "https://www.facebook.com/",
};

export default function SettingsModal({
  open,
  onClose,
  selectedModel,
  onModelChange,
}: SettingsModalProps) {
  if (!open) {
    return null;
  }

  const currentModel =
    aiModels.find((model) => model.id === selectedModel) ??
    aiModels[0];

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        className="
          flex
          w-full
          max-w-lg
          max-h-[85vh]
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-background
          shadow-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-border
            px-5
            py-4
          "
        >
          <div>
            <h2
              id="settings-title"
              className="
                text-base
                font-semibold
                text-foreground
              "
            >
              Settings
            </h2>

            <p
              className="
                mt-0.5
                text-xs
                text-muted-foreground
              "
            >
              Customize your EchoGPT experience
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            title="Close settings"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            p-5
          "
        >
          <div className="space-y-6">
            {/* =================================================
                APPEARANCE
            ================================================== */}

            <section>
              <div className="mb-3 flex items-center gap-2">
                <Palette className="h-4 w-4 text-cyan-500" />

                <h3
                  className="
                    text-sm
                    font-semibold
                    text-foreground
                  "
                >
                  Appearance
                </h3>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-border
                  bg-card
                  p-4
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-foreground
                    "
                  >
                    Theme
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-muted-foreground
                    "
                  >
                    Choose between light and dark mode.
                  </p>
                </div>

                <ThemeToggle />
              </div>
            </section>

            {/* =================================================
                DEFAULT MODEL
            ================================================== */}

            <section>
              <div className="mb-3">
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-foreground
                  "
                >
                  Default Model
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-muted-foreground
                  "
                >
                  Select the AI model used for new
                  conversations.
                </p>
              </div>

              {/* Model Selector */}

              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(event) =>
                    onModelChange(
                      event.target.value as AIModelId,
                    )
                  }
                  aria-label="Select default AI model"
                  className="
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-border
                    bg-card
                    px-4
                    py-3
                    pr-11
                    text-sm
                    font-medium
                    text-foreground
                    outline-none
                    transition
                    hover:border-cyan-500/40
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-500/10
                  "
                >
                  {aiModels.map((model) => (
                    <option
                      key={model.id}
                      value={model.id}
                    >
                      {model.name}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-muted-foreground
                  "
                />
              </div>

              {/* Selected model information */}

              {currentModel && (
                <div
                  className="
                    mt-2
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/5
                    p-3
                  "
                >
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-cyan-500
                      text-white
                    "
                  >
                    <Check className="h-3.5 w-3.5" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-foreground
                      "
                    >
                      {currentModel.name}
                    </p>

                    {currentModel.description && (
                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-5
                          text-muted-foreground
                        "
                      >
                        {currentModel.description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* =================================================
                FOLLOW US
            ================================================== */}

            <section>
              <div className="mb-3">
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-foreground
                  "
                >
                  Follow Us
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-muted-foreground
                  "
                >
                  Stay connected with EchoGPT.
                </p>
              </div>

              {/* Vertical social links */}

              <div className="flex flex-col gap-2">
                {/* LinkedIn */}

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-border
                    bg-card
                    p-3
                    transition
                    hover:border-cyan-500/40
                    hover:bg-cyan-500/5
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-500
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-500/10
                      text-blue-600
                      dark:text-blue-400
                    "
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-medium
                        text-foreground
                      "
                    >
                      LinkedIn
                    </p>

                    <p
                      className="
                        text-[11px]
                        text-muted-foreground
                      "
                    >
                      Follow EchoGPT on LinkedIn
                    </p>
                  </div>

                  <ExternalLink
                    className="
                      ml-auto
                      h-3.5
                      w-3.5
                      shrink-0
                      text-muted-foreground
                    "
                  />
                </a>

                {/* Facebook */}

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-border
                    bg-card
                    p-3
                    transition
                    hover:border-cyan-500/40
                    hover:bg-cyan-500/5
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-500
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-500/10
                      text-blue-600
                      dark:text-blue-400
                    "
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-medium
                        text-foreground
                      "
                    >
                      Facebook
                    </p>

                    <p
                      className="
                        text-[11px]
                        text-muted-foreground
                      "
                    >
                      Follow EchoGPT on Facebook
                    </p>
                  </div>

                  <ExternalLink
                    className="
                      ml-auto
                      h-3.5
                      w-3.5
                      shrink-0
                      text-muted-foreground
                    "
                  />
                </a>
              </div>
            </section>

            {/* =================================================
                LEGAL
            ================================================== */}

            <section>
              <div className="mb-3">
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-foreground
                  "
                >
                  Legal
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-muted-foreground
                  "
                >
                  Review EchoGPT policies and terms.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {/* Terms */}

                <Link
                  href="/terms-of-use"
                  onClick={onClose}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-border
                    bg-card
                    p-3
                    transition
                    hover:border-cyan-500/40
                    hover:bg-muted/50
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-500
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-cyan-500/10
                      text-cyan-500
                    "
                  >
                    <FileText className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-medium
                        text-foreground
                      "
                    >
                      Terms of Use
                    </p>

                    <p
                      className="
                        text-[11px]
                        text-muted-foreground
                      "
                    >
                      Read our terms and conditions.
                    </p>
                  </div>
                </Link>

                {/* Privacy */}

                <Link
                  href="/privacy-policy"
                  onClick={onClose}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-border
                    bg-card
                    p-3
                    transition
                    hover:border-cyan-500/40
                    hover:bg-muted/50
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-500
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-cyan-500/10
                      text-cyan-500
                    "
                  >
                    <Shield className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-medium
                        text-foreground
                      "
                    >
                      Privacy Policy
                    </p>

                    <p
                      className="
                        text-[11px]
                        text-muted-foreground
                      "
                    >
                      Learn how your data is handled.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            justify-end
            border-t
            border-border
            px-5
            py-4
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-5
              py-2.5
              text-sm
              font-medium
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
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
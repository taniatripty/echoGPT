"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";

import {
  ImageIcon,
  MessageSquare,
  Play,
  Sparkles,
  Video,
} from "lucide-react";

type PreviewId = "chat" | "image";

interface PreviewItem {
  id: PreviewId;
  label: string;
  description: string;
  image: string;
  alt: string;
  icon: ComponentType<{ className?: string }>;
}

const previews: PreviewItem[] = [
  {
    id: "chat",
    label: "AI Chat",
    description:
      "Have natural conversations with powerful AI models.",
    image: "/app1.PNG",
    alt: "EchoGPT AI chat dashboard",
    icon: MessageSquare,
  },
  {
    id: "image",
    label: "Image Studio",
    description:
      "Turn your ideas into stunning AI-generated images.",
    image: "/app2.PNG",
    alt: "EchoGPT Image Studio",
    icon: ImageIcon,
  },
];

export default function ProductPreview() {
  const [activePreview, setActivePreview] =
    useState<PreviewId>("chat");

  const activeItem =
    previews.find((item) => item.id === activePreview) ??
    previews[0];

  return (
    <section
      id="product-preview"
      className="
        relative
        overflow-hidden
        bg-background
        py-24
        sm:py-32
      "
    >
      {/* =========================================================
          Background Glow
      ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =========================================================
            Section Heading
        ========================================================= */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/5
              px-3
              py-1.5
              text-xs
              font-medium
              text-cyan-600
              dark:text-cyan-400
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Product Preview</span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            See EchoGPT

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              in action
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-muted-foreground
              sm:text-base
            "
          >
            Explore a powerful AI workspace designed for
            conversations, creativity, research, and
            productivity.
          </p>
        </div>

        {/* =========================================================
            Tabs
        ========================================================= */}
        <div className="mt-10 flex justify-center">
          <div
            className="
              inline-flex
              rounded-xl
              border
              border-border
              bg-card
              p-1
              shadow-sm
            "
            role="tablist"
            aria-label="Product previews"
          >
            {previews.map((preview) => {
              const Icon = preview.icon;

              const isActive =
                activePreview === preview.id;

              return (
                <button
                  key={preview.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`preview-${preview.id}`}
                  onClick={() =>
                    setActivePreview(preview.id)
                  }
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    px-4
                    py-2.5
                    text-xs
                    font-medium
                    transition-all
                    duration-200
                    sm:px-5
                    ${
                      isActive
                        ? `
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-600
                          text-white
                          shadow-md
                          shadow-cyan-500/20
                        `
                        : `
                          text-muted-foreground
                          hover:bg-muted
                          hover:text-foreground
                        `
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span>{preview.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            Active Description
        ========================================================= */}
        <div className="mx-auto mt-6 max-w-xl text-center">
          <p
            key={activeItem.id}
            className="
              text-sm
              text-muted-foreground
            "
          >
            {activeItem.description}
          </p>
        </div>

        {/* =========================================================
            Screenshot Preview
        ========================================================= */}
        <div className="relative mx-auto mt-8 max-w-6xl">
          {/* Screenshot Glow */}
          <div
            aria-hidden="true"
            className="
              absolute
              -inset-4
              rounded-[2rem]
              bg-gradient-to-r
              from-cyan-500/10
              via-blue-500/10
              to-cyan-500/10
              blur-2xl
            "
          />

          {/* Screenshot Browser Frame */}
          <div
            id={`preview-${activeItem.id}`}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-card
              shadow-2xl
              shadow-cyan-500/10
            "
          >
            {/* =====================================================
                Browser Header
            ===================================================== */}
            <div
              className="
                flex
                h-10
                items-center
                border-b
                border-border
                bg-muted/30
                px-4
              "
            >
              {/* Browser dots */}
              <div className="flex items-center gap-1.5">
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-red-400/80
                  "
                />

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-yellow-400/80
                  "
                />

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-green-400/80
                  "
                />
              </div>

              {/* Browser URL */}
              <div
                className="
                  mx-auto
                  hidden
                  rounded-md
                  bg-background
                  px-4
                  py-1
                  text-[10px]
                  text-muted-foreground
                  sm:block
                "
              >
                echogpt.live
              </div>

              {/* Right spacer */}
              <div className="w-10" />
            </div>

            {/* =====================================================
                Full Screenshot
            ===================================================== */}
            <div
              className="
                relative
                flex
                w-full
                justify-center
                overflow-hidden
                bg-muted/10
                p-2
                sm:p-4
                lg:p-6
              "
            >
              <Image
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.alt}
                width={1920}
                height={1080}
                priority={activeItem.id === "chat"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                className="
                  h-auto
                  max-h-[650px]
                  w-auto
                  max-w-full
                  rounded-xl
                  object-contain
                  shadow-lg
                "
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            Bottom Features
        ========================================================= */}
        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-3xl
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-4
          "
        >
          <FeatureItem
            icon={MessageSquare}
            label="AI Conversations"
          />

          <FeatureItem
            icon={ImageIcon}
            label="Image Generation"
          />

          <FeatureItem
            icon={Video}
            label="AI Video"
          />

          <FeatureItem
            icon={Play}
            label="Multiple AI Models"
          />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Feature Item
================================================================ */

interface FeatureItemProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
}

function FeatureItem({
  icon: Icon,
  label,
}: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-lg
          bg-cyan-500/10
          text-cyan-500
        "
      >
        <Icon className="h-3.5 w-3.5" />
      </div>

      <span
        className="
          text-xs
          font-medium
          text-muted-foreground
        "
      >
        {label}
      </span>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Bot,
  Crown,
  History,
  Images,
  LifeBuoy,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  Sparkles,
  Video,
  X,
} from "lucide-react";

import ThemeToggle from "@/components/layouts/ThemeToggle";

import UpgradeModal from "../shared/upgradeModal";

import {
  AIModelId,
} from "@/components/data/AImodels";
import SettingsModal from "../shared/settingModal";

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatSidebar({
  isOpen,
  onClose,
}: ChatSidebarProps) {
  const router = useRouter();

  /* =====================================================
     MODAL STATES
  ====================================================== */

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] =
    useState(false);

  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState(false);

  /* =====================================================
     DEFAULT MODEL
  ====================================================== */

  const [selectedModel, setSelectedModel] =
    useState<AIModelId>("echogpt-fast");

  /* =====================================================
     NAVIGATION
  ====================================================== */

  const handleNavigation = () => {
    onClose();
  };

  /* =====================================================
     NEW CHAT
  ====================================================== */

  const handleNewChat = () => {
    const newConversationId = crypto.randomUUID();

    router.push(
      `/chatDashboard?conversation=${newConversationId}`,
    );

    onClose();
  };

  /* =====================================================
     SETTINGS
  ====================================================== */

  const handleOpenSettings = () => {
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsModalOpen(false);
  };

  /* =====================================================
     UPGRADE
  ====================================================== */

  const handleOpenUpgrade = () => {
    setIsUpgradeModalOpen(true);
  };

  const handleCloseUpgrade = () => {
    setIsUpgradeModalOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-[2px]
            md:hidden
          "
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-[280px]
          shrink-0
          flex-col
          border-r
          border-border
          bg-background
          shadow-2xl
          shadow-black/10
          transition-transform
          duration-300
          ease-in-out

          md:static
          md:z-auto
          md:h-screen
          md:w-64
          md:translate-x-0
          md:shadow-none

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <div
          className="
            flex
            h-16
            shrink-0
            items-center
            justify-between
            border-b
            border-border
            px-4
          "
        >
          <Link
            href="/chatDashboard"
            onClick={handleNavigation}
            className="flex items-center gap-2"
          >
            {/* Logo */}

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-br
                from-cyan-400
                to-blue-600
                shadow-sm
              "
            >
              <span className="font-bold text-white">
                E
              </span>
            </div>

            {/* Brand */}

            <span className="font-semibold text-foreground">
              Echo
              <span className="text-cyan-500">
                GPT
              </span>
            </span>
          </Link>

          {/* Mobile close */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            title="Close sidebar"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-border
              text-muted-foreground
              transition-colors
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
              md:hidden
            "
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =================================================
            NEW CHAT
        ================================================== */}

        <div className="p-3">
          <button
            type="button"
            onClick={handleNewChat}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition
              hover:shadow-blue-500/30
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
              focus-visible:ring-offset-2
            "
          >
            <Plus className="h-4 w-4" />

            New Chat
          </button>
        </div>

        {/* =================================================
            NAVIGATION
        ================================================== */}

        <nav
          className="
            flex-1
            space-y-1
            overflow-y-auto
            px-3
          "
        >
          {/* =================================================
              CHAT
          ================================================== */}

          <Link
            href="/chatDashboard"
            onClick={handleNavigation}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-muted
              px-3
              py-2.5
              text-sm
              font-medium
              text-foreground
              transition
              hover:bg-muted/80
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <MessageSquare className="h-4 w-4" />

            Chat
          </Link>

          {/* =================================================
              IMAGE
          ================================================== */}

          <Link
            href="/chatDashboard/imageStudio"
            onClick={handleNavigation}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <Images className="h-4 w-4" />

            Image
          </Link>

          {/* =================================================
              VIDEO
          ================================================== */}

          <Link
            href="/chatDashboard/video"
            onClick={handleNavigation}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <Video className="h-4 w-4" />

            Video
          </Link>

          {/* =================================================
              HISTORY
          ================================================== */}

          <Link
            href="/chatDashboard/chatHistory"
            onClick={handleNavigation}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <History className="h-4 w-4" />

            History
          </Link>

          {/* =================================================
              AI MODELS
          ================================================== */}

          <Link
            href="/chatDashboard/AllAIModels"
            onClick={handleNavigation}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <Bot className="h-4 w-4" />

            AI Models
          </Link>

          {/* =================================================
              SEPARATOR
          ================================================== */}

          <div className="my-4 border-t border-border" />

          {/* =================================================
              SUPPORT
          ================================================== */}

          <Link
            href="/chatDashboard/support"
            onClick={handleNavigation}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <LifeBuoy className="h-4 w-4" />

            Support
          </Link>

          {/* =================================================
              NEWSLETTER
          ================================================== */}

          <Link
            href="/chatDashboard/newsletter"
            onClick={handleNavigation}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-muted-foreground
              transition
              hover:bg-muted
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-500
            "
          >
            <Mail className="h-4 w-4" />

            Newsletter
          </Link>
        </nav>

        {/* =====================================================
            UPGRADE PRO CARD
        ====================================================== */}

        <div className="shrink-0 px-3 pb-3">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-blue-500/20
              bg-gradient-to-br
              from-blue-500/10
              via-cyan-500/5
              to-violet-500/10
              p-3
              dark:border-blue-400/20
            "
          >
            {/* Decorative glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-20
                w-20
                rounded-full
                bg-blue-500/20
                blur-2xl
              "
            />

            <div className="relative">
              {/* Header */}

              <div className="mb-3 flex items-center gap-2">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-cyan-400
                    to-blue-600
                    text-white
                  "
                >
                  <Crown className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-xs font-bold text-foreground">
                      EchoGPT Pro
                    </p>

                    <span
                      className="
                        rounded-full
                        bg-blue-500/10
                        px-1.5
                        py-0.5
                        text-[8px]
                        font-bold
                        uppercase
                        text-blue-600
                        dark:text-blue-400
                      "
                    >
                      Pro
                    </span>
                  </div>

                  <p className="text-[10px] text-muted-foreground">
                    Unlock more powerful AI
                  </p>
                </div>
              </div>

              {/* Features */}

              <div className="mb-3 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 shrink-0 text-cyan-500" />

                  <span className="text-[10px] text-muted-foreground">
                    Premium AI models
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 shrink-0 text-cyan-500" />

                  <span className="text-[10px] text-muted-foreground">
                    Unlimited conversations
                  </span>
                </div>
              </div>

              {/* Upgrade */}

              <button
                type="button"
                onClick={handleOpenUpgrade}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  shadow-md
                  shadow-blue-500/20
                  transition
                  hover:shadow-blue-500/30
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-2
                "
              >
                <Sparkles className="h-3.5 w-3.5" />

                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM ACTIONS
        ====================================================== */}

        <div
          className="
            shrink-0
            border-t
            border-border
            p-3
          "
        >
          <div className="flex items-center justify-between gap-3">
            {/* Theme Toggle */}

            <ThemeToggle />

            {/* Settings */}

            <button
              type="button"
              onClick={handleOpenSettings}
              aria-label="Open settings"
              title="Settings"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-background
                text-foreground
                transition-colors
                hover:bg-accent
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-500
              "
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* =====================================================
          SETTINGS MODAL
      ====================================================== */}

      <SettingsModal
        open={isSettingsModalOpen}
        onClose={handleCloseSettings}
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
      />

      {/* =====================================================
          UPGRADE MODAL
      ====================================================== */}

      <UpgradeModal
        open={isUpgradeModalOpen}
        onClose={handleCloseUpgrade}
        onUpgrade={async (
          plan,
          billingCycle,
        ) => {
          console.log("Plan:", plan);
          console.log(
            "Billing:",
            billingCycle,
          );

          // Connect payment / checkout API here later.
        }}
      />
    </>
  );
}
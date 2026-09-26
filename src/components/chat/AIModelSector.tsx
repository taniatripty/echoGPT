"use client";

import { Check, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { AIModelId, aiModels } from "../data/AImodels";



interface AIModelSelectorProps {
  selectedModel: AIModelId;
  onModelChange: (modelId: AIModelId) => void;
}

export default function AIModelSelector({
  selectedModel,
  onModelChange,
}: AIModelSelectorProps) {
  const [open, setOpen] = useState(false);

  const currentModel =
    aiModels.find(
      (model) => model.id === selectedModel
    ) ?? aiModels[0];

  return (
    <div className="relative">
      {/* =====================================================
          SELECTOR BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-left transition hover:border-cyan-500/40 hover:bg-muted"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </div>

        <div className="hidden min-w-0 sm:block">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-foreground">
              {currentModel.name}
            </span>

            <span className="rounded-full bg-cyan-500/10 px-1.5 py-0.5 text-[9px] font-medium text-cyan-600 dark:text-cyan-400">
              {currentModel.badge}
            </span>
          </div>

          <p className="text-[10px] text-muted-foreground">
            {currentModel.description}
          </p>
        </div>

        <ChevronDown
          className={`ml-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* =====================================================
          DROPDOWN
      ===================================================== */}

      {open && (
        <>
          {/* Click outside */}
          <button
            type="button"
            aria-label="Close model selector"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />

          <div className="absolute bottom-full left-0 z-50 mb-2 w-72 overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-2xl shadow-black/10">
            <div className="px-3 pb-2 pt-2">
              <p className="text-xs font-semibold text-foreground">
                Choose AI model
              </p>

              <p className="mt-0.5 text-[10px] text-muted-foreground">
                Select how EchoGPT should respond.
              </p>
            </div>

            <div className="space-y-1">
              {aiModels.map((model) => {
                const isSelected =
                  model.id === selectedModel;

                return (
                  <button
                    key={model.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onModelChange(model.id);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                      isSelected
                        ? "bg-cyan-500/10"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        isSelected
                          ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Sparkles className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-foreground">
                          {model.name}
                        </span>

                        <span className="rounded-full border border-border px-1.5 py-0.5 text-[9px] text-muted-foreground">
                          {model.badge}
                        </span>
                      </div>

                      <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground">
                        {model.description}
                      </p>
                    </div>

                    {isSelected && (
                      <Check className="h-4 w-4 shrink-0 text-cyan-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
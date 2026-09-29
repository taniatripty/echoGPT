"use client";

import {
  ChevronDown,
  Film,
  Play,
  Sparkles,
  Upload,
  Video,
  X,
} from "lucide-react";
import {
  ChangeEvent,
  useRef,
  useState,
} from "react";

import UpgradeModal from "@/components/shared/upgradeModal";

type AspectRatio = "16:9" | "9:16" | "1:1" | "4:3";

type VideoDuration = "5s" | "10s" | "15s";

type VideoModel =
  | "EchoGPT Video"
  | "EchoGPT Video Pro"
  | "EchoGPT Motion";

interface Creation {
  id: number;
  title: string;
  ratio: AspectRatio;
  duration: VideoDuration;
}

const aspectRatios: AspectRatio[] = [
  "16:9",
  "9:16",
  "1:1",
  "4:3",
];

const videoDurations: VideoDuration[] = [
  "5s",
  "10s",
  "15s",
];

const videoModels: VideoModel[] = [
  "EchoGPT Video",
  "EchoGPT Video Pro",
  "EchoGPT Motion",
];

export default function VideoStudio() {
  const videoInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [prompt, setPrompt] = useState(
    "Create a cinematic video with smooth camera movement",
  );

  const [aspectRatio, setAspectRatio] =
    useState<AspectRatio>("16:9");

  const [duration, setDuration] =
    useState<VideoDuration>("5s");

  const [videoCount, setVideoCount] =
    useState<number>(1);

  const [selectedModel, setSelectedModel] =
    useState<VideoModel>("EchoGPT Video");

  const [isModelOpen, setIsModelOpen] =
    useState(false);

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] =
    useState(false);

  const [uploadError, setUploadError] =
    useState<string | null>(null);

  const [creations] = useState<Creation[]>([]);

  // --------------------------------------------------
  // Upload
  // --------------------------------------------------

  const handleUploadClick = () => {
    videoInputRef.current?.click();
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploadError(null);

    // Validate video type
    if (!file.type.startsWith("video/")) {
      setUploadError(
        "Please select a valid video file.",
      );

      event.target.value = "";
      return;
    }

    // Maximum video size: 50 MB
    const maxSize = 50 * 1024 * 1024;

    if (file.size > maxSize) {
      setUploadError(
        "Video size must be less than 50 MB.",
      );

      event.target.value = "";
      return;
    }

    // Use FileReader instead of useEffect.
    // This avoids the setState-in-effect problem.
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result !== "string") {
        setUploadError(
          "Unable to preview this video.",
        );

        return;
      }

      setSelectedFile(file);
      setPreviewUrl(reader.result);
    };

    reader.onerror = () => {
      setUploadError(
        "Something went wrong while reading the video.",
      );
    };

    reader.readAsDataURL(file);
  };

  // --------------------------------------------------
  // Remove video
  // --------------------------------------------------

  const handleRemoveVideo = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadError(null);

    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
  };

  // --------------------------------------------------
  // Generate
  // --------------------------------------------------

  const handleGenerate = () => {
    if (!selectedFile) {
      setUploadError(
        "Upload a video before generating.",
      );

      return;
    }

    // For now generation requires a paid plan.
    setIsUpgradeModalOpen(true);
  };

  return (
    <>
      <main className="h-[100dvh] overflow-y-auto bg-background text-foreground">
        <section className="mx-auto w-full max-w-6xl px-4 py-4 pb-8 sm:px-6 sm:py-6 lg:px-8">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <header className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-500">
                <Sparkles className="size-3" />

                Creative Studio
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Video{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Studio
                </span>
              </h1>

              <p className="mt-1 text-sm text-muted-foreground">
                Create and transform videos with EchoGPT.
              </p>
            </div>
          </header>

          {/* =====================================================
              VIDEO STUDIO CARD
          ====================================================== */}

          <section className="rounded-2xl border border-border bg-card shadow-lg shadow-blue-500/[0.03]">
            <div className="p-4 sm:p-5">

              {/* =================================================
                  PROMPT
              ================================================== */}

              <div>
                <label
                  htmlFor="video-prompt"
                  className="mb-1.5 block text-xs font-semibold text-muted-foreground"
                >
                  Describe your video
                </label>

                <textarea
                  id="video-prompt"
                  value={prompt}
                  onChange={(event) =>
                    setPrompt(event.target.value)
                  }
                  rows={2}
                  placeholder="Describe the video you want to create..."
                  className="w-full resize-y rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10"
                />
              </div>

              {/* =================================================
                  UPLOAD VIDEO
              ================================================== */}

              <div className="mt-4">

                {!selectedFile ? (
                  <button
                    type="button"
                    onClick={handleUploadClick}
                    className="group flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-muted/20 px-4 py-6 text-center transition-all hover:border-cyan-500/50 hover:bg-cyan-500/[0.03] sm:flex-row sm:justify-start sm:px-5 sm:text-left"
                  >
                    {/* Icon */}

                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                      <Video className="size-5 text-cyan-500" />
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-semibold text-foreground">
                        Upload a video
                      </h2>

                      <p className="mt-1 max-w-md text-xs leading-5 text-muted-foreground">
                        Upload a video to use as a reference
                        for your generation.
                      </p>

                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors group-hover:border-cyan-500/40 group-hover:text-cyan-500">
                        <Upload className="size-3.5" />
                        Choose video
                      </span>
                    </div>

                    {/* File information */}

                    <div className="shrink-0 text-center text-[11px] text-muted-foreground sm:text-right">
                      <p>MP4 · WEBM · MOV</p>
                      <p>Max 50 MB</p>
                    </div>
                  </button>
                ) : (
                  <div className="relative flex h-[clamp(10rem,22vw,14rem)] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-black">
                    {/* Video preview */}

                    {previewUrl && (
                      <video
                        src={previewUrl}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-contain"
                      />
                    )}

                    {/* Bottom information */}

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-4">
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-white">
                          {selectedFile.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-white/70">
                          {(
                            selectedFile.size /
                            (1024 * 1024)
                          ).toFixed(2)}{" "}
                          MB
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleUploadClick}
                        className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                      >
                        <Upload className="size-3" />
                        Replace
                      </button>
                    </div>

                    {/* Remove */}

                    <button
                      type="button"
                      onClick={handleRemoveVideo}
                      aria-label="Remove video"
                      title="Remove video"
                      className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-red-500/80"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                )}

                {/* Error */}

                {uploadError && (
                  <p
                    role="alert"
                    className="mt-2 text-xs text-red-500"
                  >
                    {uploadError}
                  </p>
                )}

                {/* Hidden file input */}

                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* =================================================
                  CONTROLS
              ================================================== */}

              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 md:flex-row md:flex-wrap md:items-end">

                {/* =================================================
                    ASPECT RATIO
                ================================================== */}

                <div className="w-full sm:flex-1 md:w-auto md:flex-none">
                  <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">
                    Ratio
                  </label>

                  <div className="flex w-full rounded-xl border border-border bg-background p-1 md:w-auto">
                    {aspectRatios.map((ratio) => {
                      const active =
                        aspectRatio === ratio;

                      return (
                        <button
                          key={ratio}
                          type="button"
                          onClick={() =>
                            setAspectRatio(ratio)
                          }
                          className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition md:flex-none ${
                            active
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {ratio}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    DURATION
                ================================================== */}

                <div className="w-full sm:flex-1 md:w-auto md:flex-none">
                  <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">
                    Duration
                  </label>

                  <div className="flex w-full rounded-xl border border-border bg-background p-1 md:w-auto">
                    {videoDurations.map((item) => {
                      const active =
                        duration === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setDuration(item)
                          }
                          className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition md:flex-none ${
                            active
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="w-full sm:flex-1 md:w-auto md:flex-none">
                  <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">
                    Number
                  </label>

                  <div className="flex w-full rounded-xl border border-border bg-background p-1 md:w-auto">
                    {[1, 2, 3].map((count) => {
                      const active =
                        videoCount === count;

                      return (
                        <button
                          key={count}
                          type="button"
                          onClick={() =>
                            setVideoCount(count)
                          }
                          className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition md:flex-none ${
                            active
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {count}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    MODEL
                ================================================== */}

                <div className="relative w-full min-w-0 md:flex-1">
                  <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">
                    Model
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setIsModelOpen(
                        (previous) => !previous,
                      )
                    }
                    aria-expanded={isModelOpen}
                    className="flex w-full items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-medium transition hover:border-cyan-500/40"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <Film className="size-3.5 shrink-0 text-cyan-500" />

                      <span className="truncate">
                        {selectedModel}
                      </span>
                    </span>

                    <ChevronDown
                      className={`size-3.5 shrink-0 text-muted-foreground transition-transform ${
                        isModelOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {/* Model dropdown */}

                  {isModelOpen && (
                    <div className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-full overflow-hidden rounded-xl border border-border bg-background p-1.5 shadow-2xl">
                      {videoModels.map((model) => {
                        const active =
                          selectedModel === model;

                        return (
                          <button
                            key={model}
                            type="button"
                            onClick={() => {
                              setSelectedModel(model);
                              setIsModelOpen(false);
                            }}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition ${
                              active
                                ? "bg-cyan-500/10 text-cyan-500"
                                : "hover:bg-muted"
                            }`}
                          >
                            <span>
                              {model}
                            </span>

                            {active && (
                              <span className="text-[10px]">
                                Selected
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* =================================================
                    GENERATE
                ================================================== */}

                <button
                  type="button"
                  onClick={handleGenerate}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 md:w-auto"
                >
                  <Sparkles className="size-3.5" />

                  Generate
                </button>
              </div>

              {/* =================================================
                  INFORMATION
              ================================================== */}

              <div className="mt-3 flex flex-col gap-1 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <span>
                  Video generation requires a paid plan.
                </span>

                <span className="flex items-center gap-1">
                  <Film className="size-3" />

                  {videoCount}{" "}
                  {videoCount === 1
                    ? "video"
                    : "videos"}{" "}
                  per generation
                </span>
              </div>
            </div>
          </section>

          {/* =====================================================
              YOUR CREATIONS
          ====================================================== */}

          <section className="mt-6 sm:mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">
                  Your creations
                </h2>

                <p className="mt-0.5 text-xs text-muted-foreground">
                  Your generated videos will appear here.
                </p>
              </div>

              <Film className="size-4 text-cyan-500" />
            </div>

            {creations.length === 0 ? (
              <div className="grid place-items-center rounded-2xl border border-dashed border-border bg-card/50 px-5 py-10 text-center">
                <div>
                  <div className="mx-auto mb-2 flex size-9 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Video className="size-4 text-cyan-500" />
                  </div>

                  <p className="text-xs font-medium">
                    Nothing here yet
                  </p>

                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Your generated videos will appear here.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory">
                {creations.map((creation) => (
                  <article
                    key={creation.id}
                    className="w-[240px] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card"
                  >
                    <div className="relative aspect-video bg-black">
                      <div className="absolute inset-0 grid place-items-center">
                        <Play className="size-7 text-white/80" />
                      </div>
                    </div>

                    <div className="p-3">
                      <p className="truncate text-xs font-medium">
                        {creation.title}
                      </p>

                      <p className="mt-1 text-[10px] text-muted-foreground">
                        {creation.ratio} ·{" "}
                        {creation.duration}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </section>
      </main>

      {/* =========================================================
          UPGRADE MODAL
      ========================================================== */}

      <UpgradeModal
        open={isUpgradeModalOpen}
        onClose={() =>
          setIsUpgradeModalOpen(false)
        }
        defaultPlan="Pro"
      />
    </>
  );
}
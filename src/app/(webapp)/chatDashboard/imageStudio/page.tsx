

"use client";

import Image from "next/image";
import {
  ChangeEvent,
  useRef,
  useState,
} from "react";

import { signOut, useSession } from "next-auth/react";

import {
  ChevronDown,
  ImagePlus,
  Images,
  LogOut,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

import UpgradeModal from "@/components/shared/upgradeModal";
import ThemeToggle from "@/components/layouts/ThemeToggle";

type AspectRatio = "1:1" | "3:2" | "2:3" | "auto";

type ImageModel =
  | "EchoGPT Image"
  | "EchoGPT Image Pro"
  | "EchoGPT Creative";

interface Creation {
  id: number;
  title: string;
  ratio: AspectRatio;
}

const aspectRatios: AspectRatio[] = [
  "1:1",
  "3:2",
  "2:3",
  "auto",
];

const imageModels: ImageModel[] = [
  "EchoGPT Image",
  "EchoGPT Image Pro",
  "EchoGPT Creative",
];

export default function ImageStudio() {
  const { data: session } = useSession();

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [previewUrl, setPreviewUrl] =
    useState<string | null>(null);

  const [prompt, setPrompt] = useState(
    "Turn my photo into a professional headshot",
  );

  const [aspectRatio, setAspectRatio] =
    useState<AspectRatio>("1:1");

  const [imageCount, setImageCount] =
    useState<number>(1);

  const [selectedModel, setSelectedModel] =
    useState<ImageModel>(
      "EchoGPT Image",
    );

  const [isModelOpen, setIsModelOpen] =
    useState(false);

  const [isUpgradeModalOpen, setIsUpgradeModalOpen] =
    useState(false);

  const [uploadError, setUploadError] =
    useState<string | null>(null);

  const [creations] =
    useState<Creation[]>([]);

  // ----------------------------------------------------------
  // USER
  // ----------------------------------------------------------

  const userName =
    session?.user?.name ??
    "EchoGPT User";

  const userEmail =
    session?.user?.email ??
    "No email available";

  const userImage =
    session?.user?.image ?? null;

  const userInitial =
    userName.charAt(0).toUpperCase();

  // ----------------------------------------------------------
  // UPLOAD
  // ----------------------------------------------------------

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploadError(null);

    if (!file.type.startsWith("image/")) {
      setUploadError(
        "Please select a valid image file.",
      );

      event.target.value = "";

      return;
    }

    const maxSize =
      10 * 1024 * 1024;

    if (file.size > maxSize) {
      setUploadError(
        "Image size must be less than 10 MB.",
      );

      event.target.value = "";

      return;
    }

    const reader =
      new FileReader();

    reader.onload = () => {
      if (
        typeof reader.result !==
        "string"
      ) {
        setUploadError(
          "Unable to preview this image.",
        );

        return;
      }

      setSelectedFile(file);

      setPreviewUrl(
        reader.result,
      );
    };

    reader.onerror = () => {
      setUploadError(
        "Something went wrong while reading the image.",
      );
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadError(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // ----------------------------------------------------------
  // GENERATE
  // ----------------------------------------------------------

  const handleGenerate = () => {
    if (!selectedFile) {
      setUploadError(
        "Upload an image before generating.",
      );

      return;
    }

    setIsUpgradeModalOpen(true);
  };

  // ----------------------------------------------------------
  // LOGOUT
  // ----------------------------------------------------------

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-background text-foreground">
      {/* ====================================================== */}
      {/* HEADER                                                 */}
      {/* ====================================================== */}

      <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur sm:px-6">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-sm shadow-blue-500/20">
            <Sparkles className="h-4 w-4 text-white" />
          </div>

          <div>
            <h1 className="text-sm font-semibold text-foreground">
              EchoGPT
            </h1>

            <p className="hidden text-[10px] text-muted-foreground sm:block">
              Image Studio
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Studio label */}
          {/* <div className="hidden items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 sm:flex">
            <Sparkles className="h-3 w-3 text-cyan-500" />

            <span className="text-[11px] font-medium text-cyan-600 dark:text-cyan-400">
              Creative Studio
            </span>
          </div> */}

          {/* User profile */}
          <div className="group relative">
            {/* Avatar */}
            <button
              type="button"
              aria-label="Open user profile"
              title="Profile"
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-sm font-semibold text-white shadow-sm transition hover:ring-2 hover:ring-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            >
              {userImage ? (
                <Image
                  src={userImage}
                  alt={userName}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>
                  {userInitial}
                </span>
              )}
            </button>

            {/* Profile dropdown */}
            <div
              className="
                invisible absolute right-0 top-full z-50 mt-2 w-72
                translate-y-1 opacity-0
                transition-all duration-200
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
                group-focus-within:visible
                group-focus-within:translate-y-0
                group-focus-within:opacity-100
              "
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl shadow-black/10 backdrop-blur-xl">
                {/* User information */}
                <div className="border-b border-border p-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-sm font-semibold text-white">
                      {userImage ? (
                        <Image
                          src={userImage}
                          alt={userName}
                          width={44}
                          height={44}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span>
                          {userInitial}
                        </span>
                      )}
                    </div>

                    {/* Name + email */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {userName}
                      </p>

                      <p className="truncate text-xs text-muted-foreground">
                        {userEmail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Appearance */}
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Appearance
                    </p>

                    <p className="text-[11px] text-muted-foreground">
                      Switch light and dark mode
                    </p>
                  </div>

                  <ThemeToggle />
                </div>

                {/* Logout */}
                <div className="p-2">
                  <button
                    type="button"
                    onClick={
                      handleLogout
                    }
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-red-500/10 hover:text-red-500"
                  >
                    <LogOut className="h-4 w-4" />

                    <span>
                      Log out
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================== */}
      {/* SCROLLABLE CONTENT                                      */}
      {/* ====================================================== */}

      <main className="min-h-0 flex-1 overflow-y-auto">
        <section className="mx-auto w-full max-w-6xl px-4 py-6 pb-10 sm:px-6 lg:px-8">
          {/* ================================================== */}
          {/* PAGE TITLE                                         */}
          {/* ================================================== */}

          <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-500">
                <Sparkles className="size-3" />

                Creative Studio
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Image{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Studio
                </span>
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Create and transform images
                with EchoGPT.
              </p>
            </div>
          </div>

          {/* ================================================== */}
          {/* IMAGE STUDIO CARD                                  */}
          {/* ================================================== */}

          <section className="rounded-2xl border border-border bg-card shadow-lg shadow-blue-500/[0.03]">
            <div className="p-4 sm:p-5">
              {/* Prompt */}
              <div>
                <label
                  htmlFor="image-prompt"
                  className="mb-1.5 block text-xs font-semibold text-muted-foreground"
                >
                  Describe your image
                </label>

                <textarea
                  id="image-prompt"
                  value={prompt}
                  onChange={(event) =>
                    setPrompt(
                      event.target.value,
                    )
                  }
                  rows={2}
                  placeholder="Describe what you want to create..."
                  className="w-full resize-y rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/10"
                />
              </div>

              {/* Upload image */}
              <div className="mt-4">
                {!selectedFile ? (
                  <button
                    type="button"
                    onClick={
                      handleUploadClick
                    }
                    className="group flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-muted/20 px-4 py-6 text-center transition-all hover:border-cyan-500/50 hover:bg-cyan-500/[0.03] sm:flex-row sm:justify-start sm:px-5 sm:text-left"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                      <ImagePlus className="size-5 text-cyan-500" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-semibold text-foreground">
                        Upload an image
                      </h2>

                      <p className="mt-1 max-w-md text-xs leading-5 text-muted-foreground">
                        Upload a photo to use
                        as a reference for
                        your generation.
                      </p>

                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors group-hover:border-cyan-500/40 group-hover:text-cyan-500">
                        <Upload className="size-3.5" />
                        Choose image
                      </span>
                    </div>

                    <div className="shrink-0 text-center text-[11px] text-muted-foreground sm:text-right">
                      <p>
                        PNG · JPG · WEBP
                      </p>

                      <p>
                        Max 10 MB
                      </p>
                    </div>
                  </button>
                ) : (
                  <div className="relative flex h-[clamp(10rem,22vw,14rem)] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/20">
                    {previewUrl && (
                      <Image
                        src={previewUrl}
                        alt="Uploaded image preview"
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
                        className="object-contain p-3 sm:p-4"
                      />
                    )}

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-4">
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-white">
                          {
                            selectedFile.name
                          }
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
                        onClick={
                          handleUploadClick
                        }
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                      >
                        <Upload className="size-3" />

                        Replace
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={
                        handleRemoveImage
                      }
                      aria-label="Remove image"
                      title="Remove image"
                      className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-lg border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-red-500/80"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                )}

                {uploadError && (
                  <p
                    role="alert"
                    className="mt-2 text-xs text-red-500"
                  >
                    {uploadError}
                  </p>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={
                    handleFileChange
                  }
                  className="hidden"
                />
              </div>

              {/* Controls */}
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 md:flex-row md:flex-wrap md:items-end">
                {/* Ratio */}
                <div className="w-full sm:flex-1 md:w-auto md:flex-none">
                  <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">
                    Ratio
                  </label>

                  <div className="flex w-full rounded-xl border border-border bg-background p-1 md:w-auto">
                    {aspectRatios.map(
                      (ratio) => {
                        const active =
                          aspectRatio ===
                          ratio;

                        return (
                          <button
                            key={
                              ratio
                            }
                            type="button"
                            onClick={() =>
                              setAspectRatio(
                                ratio,
                              )
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
                      },
                    )}
                  </div>
                </div>

                {/* Number */}
                <div className="w-full sm:flex-1 md:w-auto md:flex-none">
                  <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">
                    Number
                  </label>

                  <div className="flex w-full rounded-xl border border-border bg-background p-1 md:w-auto">
                    {[1, 2, 3, 4].map(
                      (count) => {
                        const active =
                          imageCount ===
                          count;

                        return (
                          <button
                            key={
                              count
                            }
                            type="button"
                            onClick={() =>
                              setImageCount(
                                count,
                              )
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
                      },
                    )}
                  </div>
                </div>

                {/* Model */}
                <div className="relative w-full min-w-0 md:flex-1">
                  <label className="mb-1.5 block text-[11px] font-semibold text-muted-foreground">
                    Model
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setIsModelOpen(
                        (previous) =>
                          !previous,
                      )
                    }
                    aria-expanded={
                      isModelOpen
                    }
                    className="flex w-full items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-medium transition hover:border-cyan-500/40"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <Sparkles className="size-3.5 shrink-0 text-cyan-500" />

                      <span className="truncate">
                        {
                          selectedModel
                        }
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

                  {isModelOpen && (
                    <div className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-full overflow-hidden rounded-xl border border-border bg-background p-1.5 shadow-2xl">
                      {imageModels.map(
                        (model) => {
                          const active =
                            selectedModel ===
                            model;

                          return (
                            <button
                              key={
                                model
                              }
                              type="button"
                              onClick={() => {
                                setSelectedModel(
                                  model,
                                );

                                setIsModelOpen(
                                  false,
                                );
                              }}
                              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs transition ${
                                active
                                  ? "bg-cyan-500/10 text-cyan-500"
                                  : "hover:bg-muted"
                              }`}
                            >
                              <span>
                                {
                                  model
                                }
                              </span>

                              {active && (
                                <span className="text-[10px]">
                                  Selected
                                </span>
                              )}
                            </button>
                          );
                        },
                      )}
                    </div>
                  )}
                </div>

                {/* Generate */}
                <button
                  type="button"
                  onClick={
                    handleGenerate
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 md:w-auto"
                >
                  <Sparkles className="size-3.5" />

                  Generate
                </button>
              </div>

              {/* Information */}
              <div className="mt-3 flex flex-col gap-1 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <span>
                  Image generation requires
                  a paid plan.
                </span>

                <span className="flex items-center gap-1">
                  <Images className="size-3" />

                  {imageCount}{" "}
                  {imageCount === 1
                    ? "image"
                    : "images"}{" "}
                  per generation
                </span>
              </div>
            </div>
          </section>

          {/* ================================================== */}
          {/* CREATIONS                                          */}
          {/* ================================================== */}

          <section className="mt-6 sm:mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold">
                  Your creations
                </h2>

                <p className="mt-0.5 text-xs text-muted-foreground">
                  Your generated images
                  will appear here.
                </p>
              </div>

              <Images className="size-4 text-cyan-500" />
            </div>

            {creations.length === 0 ? (
              <div className="grid place-items-center rounded-2xl border border-dashed border-border bg-card/50 px-5 py-10 text-center">
                <div>
                  <div className="mx-auto mb-2 flex size-9 items-center justify-center rounded-xl bg-cyan-500/10">
                    <ImagePlus className="size-4 text-cyan-500" />
                  </div>

                  <p className="text-xs font-medium">
                    Nothing here yet
                  </p>

                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Your generated images
                    will appear here.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {creations.map(
                  (creation) => (
                    <article
                      key={
                        creation.id
                      }
                      className="overflow-hidden rounded-xl border border-border bg-card"
                    >
                      <div className="grid aspect-square place-items-center bg-muted">
                        <ImagePlus className="size-5 text-muted-foreground" />
                      </div>

                      <div className="p-3">
                        <p className="truncate text-xs font-medium">
                          {
                            creation.title
                          }
                        </p>

                        <p className="mt-1 text-[10px] text-muted-foreground">
                          {
                            creation.ratio
                          }
                        </p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            )}
          </section>
        </section>
      </main>

      {/* ====================================================== */}
      {/* UPGRADE MODAL                                          */}
      {/* ====================================================== */}

      <UpgradeModal
        open={isUpgradeModalOpen}
        onClose={() =>
          setIsUpgradeModalOpen(
            false,
          )
        }
        defaultPlan="Pro"
      />
    </div>
  );
}
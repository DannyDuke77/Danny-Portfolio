"use client";

import Image from "next/image";
import FadeIn, { StaggerContainer, StaggerItem } from "@/app/components/Animations";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import useImageModal from "@/app/hooks/useImagesModal";

type Screenshot = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type ProjectGalleryProps = {
  screenshots: Screenshot[];
  title: string;
};

export default function ProjectGallery({ screenshots, title }: ProjectGalleryProps) {
  const imageModal = useImageModal();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots.length) return null;

  const currentScreenshot = screenshots[currentIndex];

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  };

  const next = () => {
    setCurrentIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1,
    );
  };

  const openCurrent = () => {
    imageModal.open(screenshots, currentIndex);
  };

  return (
    <>
      {/* Main screenshot */}
      <div className="group relative overflow-hidden border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div
          onClick={openCurrent}
          className="relative block aspect-video w-full cursor-pointer overflow-hidden bg-stone-100 dark:bg-stone-800"
        >
          <Image
            src={currentScreenshot.src}
            alt={currentScreenshot.alt}
            title="Click to view full size"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            className="object-contain"
          />
        </div>

        {/* Previous */}
        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={previous}
            aria-label="Previous screenshot"
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-stone-700 bg-stone-950/85 text-stone-100 transition-colors hover:border-lime-300 hover:text-lime-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {/* Next */}
        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-stone-700 bg-stone-950/85 text-stone-100 transition-colors hover:border-lime-300 hover:text-lime-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}

        {/* Counter */}
        {screenshots.length > 1 && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 border border-stone-700 bg-stone-950/85 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.15em] text-stone-100">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(screenshots.length).padStart(2, "0")}
          </div>
        )}
      </div>

      {/* Caption */}
      <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.15em] text-stone-900 dark:text-stone-100">
            {currentScreenshot.title}
          </p>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-stone-500 dark:text-stone-400">
            {currentScreenshot.description}
          </p>
        </div>
        <button
          onClick={openCurrent}
          className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-lime-700 dark:text-stone-400 dark:hover:text-lime-300"
        >
          View full size ↗
        </button>
      </div>

      {/* Thumbnails */}
      <StaggerContainer>
        {screenshots.length > 1 && (
          <>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {screenshots.slice(0, 8).map((screenshot, index) => (
                <StaggerItem key={screenshot.src}>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`group relative block w-full overflow-hidden border transition-colors ${
                      currentIndex === index
                        ? "border-lime-700 dark:border-lime-300"
                        : "border-stone-200 hover:border-stone-400 dark:border-stone-800 dark:hover:border-stone-600"
                    }`}
                  >
                    <div className="relative aspect-video bg-stone-100 dark:bg-stone-800">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        loading="lazy"
                        className="object-cover object-top"
                      />
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </div>

            {screenshots.length > 8 && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentIndex(0);
                    imageModal.open(screenshots, 0);
                  }}
                  className="inline-flex items-center gap-2 border border-stone-200 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-900 transition-colors hover:border-lime-700 hover:text-lime-700 dark:border-stone-800 dark:text-stone-100 dark:hover:border-lime-300 dark:hover:text-lime-300"
                >
                  View all screenshots
                  <span className="text-stone-500 dark:text-stone-400">
                    ({screenshots.length})
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </StaggerContainer>
    </>
  );
}
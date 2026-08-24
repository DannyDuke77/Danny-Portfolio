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

export default function ProjectGallery({
  screenshots,
  title,
}: ProjectGalleryProps) {
  const imageModal = useImageModal();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots.length) return null;

  const currentScreenshot = screenshots[currentIndex];

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrentIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const openCurrent = () => {
    imageModal.open(
      screenshots,
      currentIndex
    );
  };

  return (
    <>
      {/* Main Screenshot */}
      <div
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
      >
        <div
          onClick={openCurrent}
          className="relative block aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800"
        >
          <Image
            src={currentScreenshot.src}
            alt={currentScreenshot.alt}
            title="Click to view full size"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            className="object-contain transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>

        {/* Previous */}
        {screenshots.length > 1 && (
          <button
            type="button"
            onClick={previous}
            aria-label="Previous screenshot"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-slate-900 group-hover:opacity-100"
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
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-slate-900 group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}

        {/* Counter */}
        {screenshots.length > 1 && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-slate-900/70 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
            {currentIndex + 1} / {screenshots.length}
          </div>
        )}
      </div>

      {/* Thumbnail Grid */}
      <StaggerContainer>
        {screenshots.length > 1 && (
          <>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {screenshots.slice(0, 8).map((screenshot, index) => (
                <StaggerItem key={screenshot.src}>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`group relative block w-full overflow-hidden rounded-xl border transition-all duration-300 ${
                      currentIndex === index
                        ? "border-blue-500 ring-2 ring-blue-500/20"
                        : "border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        loading="lazy"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
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
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-900 dark:hover:text-blue-400"
                >
                  View All Screenshots
                  <span className="ml-1 text-slate-400">
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
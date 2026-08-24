"use client";

import Modal from "./Modal";
import Image from "next/image";
import useImagesModal from "../../hooks/useImagesModal";
import {
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

const ImagesModal = () => {
  const modal = useImagesModal();

  const currentImage = modal.images[modal.currentIndex];

  const content = (
    <div className="relative flex h-[75vh] w-full items-center justify-center overflow-hidden">
      <TransformWrapper
        key={currentImage?.src}
        initialScale={1}
        minScale={0.8}
        maxScale={4}
        centerOnInit
        wheel={{
          step: 0.001,
        }}
        doubleClick={{
          mode: "toggle",
          step: 1,
        }}
        pinch={{
          step: 5,
        }}
        panning={{
          disabled: false,
        }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Image */}
            <TransformComponent
              wrapperClass="!h-full !w-full"
              contentClass="!h-full !w-full"
            >
              <div className="relative h-[75vh] w-[90vw]">
                {currentImage && (
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    sizes="90vw"
                    priority
                    className="object-contain"
                  />
                )}
              </div>
            </TransformComponent>

            {/* Previous */}
            {modal.images.length > 1 && (
              <button
                type="button"
                onClick={modal.previous}
                aria-label="Previous screenshot"
                className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/75 text-white shadow-lg backdrop-blur-md transition-all duration-200 opacity-50 hover:opacity-100 hover:scale-105 hover:bg-slate-900"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Next */}
            {modal.images.length > 1 && (
              <button
                type="button"
                onClick={modal.next}
                aria-label="Next screenshot"
                className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/75 text-white shadow-lg backdrop-blur-md transition-all duration-200 opacity-50 hover:opacity-100 hover:scale-105 hover:bg-slate-900"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Controls */}
            <div className="absolute bottom-0 left-4 z-20 flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/75 p-1 text-white shadow-lg backdrop-blur-md">
              <button
                type="button"
                onClick={() => zoomOut()}
                aria-label="Zoom out"
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10"
              >
                −
              </button>

              <button
                type="button"
                onClick={() => resetTransform()}
                className="flex h-9 min-w-14 items-center justify-center rounded-full px-2 text-xs font-medium transition hover:bg-white/10"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={() => zoomIn()}
                aria-label="Zoom in"
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10"
              >
                +
              </button>
            </div>

            {/* Counter */}
            {modal.images.length > 1 && (
              <div className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-white/90 shadow-lg backdrop-blur-md">
                {modal.currentIndex + 1} / {modal.images.length}
              </div>
            )}

            {/* Info */}
            {currentImage && (
              <div className="mb-12 md:mb-0 pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 pb-6 pt-24">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-base font-semibold text-white drop-shadow-md">
                    {currentImage.title}
                  </p>

                  <p className="mt-1.5 text-sm leading-relaxed text-slate-200 drop-shadow-md">
                    {currentImage.description}
                  </p>
                </div>
              </div>
            )}

            {/* Download */}
            {currentImage && (
              <a
                href={currentImage.src}
                download
                aria-label="Download screenshot"
                className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/75 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-slate-900"
              >
                <Download className="h-4 w-4" />
              </a>
            )}
          </>
        )}
      </TransformWrapper>
    </div>
  );

  return (
    <Modal
      isOpen={modal.isOpen}
      close={modal.close}
      label={currentImage?.title || "Project screenshot"}
      content={content}
      maxWidth="7xl"
    />
  );
};

export default ImagesModal;
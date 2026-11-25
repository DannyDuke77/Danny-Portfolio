"use client";

import Modal from "./Modal";
import Image from "next/image";
import useImagesModal from "../../hooks/useImagesModal";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImagesModal = () => {
  const modal = useImagesModal();

  const currentImage = modal.images[modal.currentIndex];

  const content = (
    <div className="flex h-[80vh] w-full flex-col">
      {/* Image region */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
        <TransformWrapper
          key={currentImage?.src}
          initialScale={1}
          minScale={0.8}
          maxScale={4}
          centerOnInit
          wheel={{ step: 0.001 }}
          doubleClick={{ mode: "toggle", step: 1 }}
          pinch={{ step: 5 }}
          panning={{ disabled: false }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <TransformComponent
                wrapperClass="!h-full !w-full"
                contentClass="!h-full !w-full"
              >
                <div className="relative h-full w-[88vw] max-w-[1400px] cursor-grab active:cursor-grabbing">
                  {currentImage && (
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      sizes="88vw"
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
                  className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-stone-700 bg-stone-950/85 text-stone-100 transition-colors hover:border-lime-300 hover:text-lime-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Next */}
              {modal.images.length > 1 && (
                <button
                  type="button"
                  onClick={modal.next}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-stone-700 bg-stone-950/85 text-stone-100 transition-colors hover:border-lime-300 hover:text-lime-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}

              {/* Controls */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center border border-stone-700 bg-stone-950/85 font-mono text-xs text-stone-100">
                <button
                  type="button"
                  onClick={() => zoomOut()}
                  aria-label="Zoom out"
                  className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-stone-800 hover:text-lime-300"
                >
                  −
                </button>
                <button
                  type="button"
                  onClick={() => resetTransform()}
                  className="flex h-9 min-w-14 items-center justify-center border-x border-stone-700 px-2 uppercase tracking-[0.15em] transition-colors hover:bg-stone-800 hover:text-lime-300"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => zoomIn()}
                  aria-label="Zoom in"
                  className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-stone-800 hover:text-lime-300"
                >
                  +
                </button>
              </div>

              {/* Counter */}
              {modal.images.length > 1 && (
                <div className="absolute right-4 top-4 z-20 border border-stone-700 bg-stone-950/85 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.15em] text-stone-100">
                  {String(modal.currentIndex + 1).padStart(2, "0")} / {String(modal.images.length).padStart(2, "0")}
                </div>
              )}

              {/* Download */}
              {currentImage && (
                <a
                  href={currentImage.src}
                  download
                  aria-label="Download screenshot"
                  className="absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center border border-stone-700 bg-stone-950/85 text-stone-100 transition-colors hover:border-lime-300 hover:text-lime-300"
                >
                  <Download className="h-3.5 w-3.5" />
                </a>
              )}
            </>
          )}
        </TransformWrapper>
      </div>

      {/* Info bar */}
      {currentImage && (
        <div className="shrink-0 border-t border-stone-200 bg-stone-50 px-5 py-4 dark:border-stone-800 dark:bg-stone-900">
          <div className="mx-auto max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.15em] text-stone-900 dark:text-stone-100">
              {currentImage.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
              {currentImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Modal
      isOpen={modal.isOpen}
      close={modal.close}
      label={currentImage?.title || "Project screenshot"}
      content={content}
      maxWidth="max-w-7xl"
    />
  );
};

export default ImagesModal;
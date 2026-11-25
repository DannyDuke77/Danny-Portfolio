"use client";

import { ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  label: string;
  headerAction?: ReactNode;
  content: ReactElement;
  maxWidth?: string; // full Tailwind class, e.g. "max-w-4xl"
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  close,
  label,
  headerAction,
  content,
  maxWidth = "max-w-4xl",
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      close();
    }, 400);
  }, [close]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-stone-900/70 backdrop-blur-[2px] transition-opacity duration-300 dark:bg-black/80 ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={`relative w-full ${maxWidth} transition-all duration-300 ease-out ${
          showModal
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="overflow-hidden border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3.5 dark:border-stone-800">
            <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
              {label}
            </h3>
            <div className="flex items-center gap-3">
              {headerAction}
              <button
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center border border-stone-200 text-stone-500 transition-colors hover:border-lime-700 hover:text-lime-700 dark:border-stone-800 dark:text-stone-400 dark:hover:border-lime-300 dark:hover:text-lime-300"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[85vh] overflow-y-auto p-4 sm:p-5">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
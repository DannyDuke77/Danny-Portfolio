"use client";

import Modal from "./Modal";
import useCvModal from "../../hooks/useCvModal";
import { Download } from "lucide-react";

const CvModal = () => {
  const modal = useCvModal();

  const headerAction = (
    <a
      href={modal.cvUrl || ""}
      download={modal.fileName || "cv.pdf"}
      className="group inline-flex items-center gap-2 border border-lime-700 bg-lime-700 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-50 transition-colors hover:bg-transparent hover:text-lime-700 dark:border-lime-300 dark:bg-lime-300 dark:text-black dark:hover:bg-transparent dark:hover:text-lime-300"
    >
      <Download className="h-3.5 w-3.5" />
      <span>Download CV</span>
    </a>
  );

  const content = (
    <div className="w-full">
      <iframe
        src={modal.cvUrl || ""}
        title={modal.fileName || "Curriculum Vitae"}
        className="h-[75vh] w-full border border-stone-200 dark:border-stone-800"
      />
    </div>
  );

  return (
    <Modal
      isOpen={modal.isOpen}
      close={modal.close}
      label={modal.fileName || "Curriculum Vitae"}
      headerAction={headerAction}
      content={content}
      maxWidth="max-w-4xl"
    />
  );
};

export default CvModal;
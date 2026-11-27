"use client";

import Modal from "./Modal";
import useCvModal from "../../hooks/useCvModal";
import { ExternalLink } from "lucide-react";

const CvModal = () => {
  const modal = useCvModal();

  const headerAction = (
    <a
      href={modal.cvUrl || ""}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 border border-lime-700 bg-lime-700 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-50 transition-colors hover:bg-transparent hover:text-lime-700 dark:border-lime-300 dark:bg-lime-300 dark:text-black dark:hover:bg-transparent dark:hover:text-lime-300"
    >
      <ExternalLink className="h-3.5 w-3.5" />
      <span>Open in new tab</span>
    </a>
  );

  const content = (
    <div className="w-full">
      <iframe
        src={modal.cvUrl ? `${modal.cvUrl}#navpanes=0&zoom=100` : "about:blank"}
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
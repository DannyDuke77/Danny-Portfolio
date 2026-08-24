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
      className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-md"
    >
      <Download className="h-4 w-4" />
      <span>Download CV</span>
    </a>
  );

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <iframe
        src={modal.cvUrl || ""}
        title={modal.fileName || "Curriculum Vitae"}
        className="h-[75vh] w-full rounded-md border border-slate-300 shadow-md dark:border-slate-700"
      ></iframe>
    </div>
  );

  return (
    <Modal 
      isOpen={modal.isOpen} 
      close={modal.close} 
      label={modal.fileName || "Curriculum Vitae"}
      headerAction={headerAction}
      content={content}
      maxWidth="4xl"
    />
  );
}

export default CvModal
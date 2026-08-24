import useCvModal from "../../hooks/useCvModal";
import { Eye, ArrowUpRight } from "lucide-react";

interface PreviewCvButtonProps {
  className?: string;
}
const PreviewCvButton = ({ className }: PreviewCvButtonProps) => {
  const modal = useCvModal();

  const cvUrl = "/cv/GITAU DANIEL NGIGE CV.pdf";
  const fileName = "GITAU DANIEL NGIGE CV.pdf";

  return (
    <button
      onClick={() => modal.open(cvUrl, fileName)}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10 dark:border-blue-900/60 dark:bg-slate-900 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/40 dark:hover:shadow-blue-500/10 ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <Eye className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

      <span className="relative">
        Preview CV
      </span>

      <ArrowUpRight className="relative h-3.5 w-3.5 opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </button>
  );
};

export default PreviewCvButton;
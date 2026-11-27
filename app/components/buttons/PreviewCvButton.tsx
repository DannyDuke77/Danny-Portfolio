import useCvModal from "../../hooks/useCvModal";
import { Eye, ArrowUpRight } from "lucide-react";

interface PreviewCvButtonProps {
  className?: string;
}

const PreviewCvButton = ({ className }: PreviewCvButtonProps) => {
  const modal = useCvModal();

  const cvUrl = "/cv";
  const fileName = "GITAU DANIEL NGIGE CV.pdf";

  return (
    <button
      onClick={() => modal.open(cvUrl, fileName)}
      className={`group inline-flex items-center gap-2 font-semibold ${className ?? ""}`}
    >
      <Eye className="h-3.5 w-3.5 shrink-0" />
      <span>Preview CV</span>
      <ArrowUpRight className="h-3 w-3 shrink-0 opacity-70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </button>
  );
};

export default PreviewCvButton;
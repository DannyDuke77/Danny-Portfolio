import { create } from "zustand";

interface CvModalStore {
  cvUrl: string | null;
  fileName: string | null;
  isOpen: boolean;
  open: (cvUrl: string, fileName: string) => void;
  close: () => void;
}

const useCvModal = create<CvModalStore>((set) => ({
  cvUrl: null,
  fileName: null,
  isOpen: false,
  open: (cvUrl, fileName) => set({ isOpen: true, cvUrl, fileName }),
  close: () => set({ isOpen: false, cvUrl: null, fileName: null }),
}));

export default useCvModal;
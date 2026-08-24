import { create } from "zustand";

export interface Screenshot {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ImageModalStore {
  isOpen: boolean;
  images: Screenshot[];
  currentIndex: number;

  open: (
    images: Screenshot[],
    index: number
  ) => void;

  close: () => void;
  next: () => void;
  previous: () => void;
}

const useImagesModal = create<ImageModalStore>((set) => ({
  isOpen: false,
  images: [],
  currentIndex: 0,

  open: (images, index) =>
    set({
      isOpen: true,
      images,
      currentIndex: index,
    }),

  close: () =>
    set({
      isOpen: false,
      images: [],
      currentIndex: 0,
    }),

  next: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex + 1) % state.images.length,
    })),

  previous: () =>
    set((state) => ({
      currentIndex:
        state.currentIndex === 0
          ? state.images.length - 1
          : state.currentIndex - 1,
    })),
}));

export default useImagesModal;
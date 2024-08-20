import { create } from "zustand";

type StoreType = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const useFinalModal = create<StoreType>((set) => ({
  isOpen: false,
  close: () => set(() => ({ isOpen: false })),
  open: () => set(() => ({ isOpen: true })),
}));

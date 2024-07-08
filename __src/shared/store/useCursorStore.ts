import { create } from "zustand";

type Store = {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
};

export const useCursorStore = create<Store>()((set) => ({
  isHovered: false,
  setIsHovered: (hovered) => set({ isHovered: hovered }),
}));

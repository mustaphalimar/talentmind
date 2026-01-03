import { create } from "zustand";

export interface UseSidebar {
  visible: boolean;
  onShow: () => void;
  onHide: () => void;
}

export const useSidebar = create<UseSidebar>((set) => ({
  visible: false,

  onShow: () => set({ visible: true }),
  onHide: () => set({ visible: false }),
}));

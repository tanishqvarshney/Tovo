import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("tovo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("tovo-theme", theme);
    set({ theme });
  },
}));
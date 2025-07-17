// store/useDarkModeStore.ts
import { create } from 'zustand';

interface DarkModeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

const useDarkModeStore = create<DarkModeStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setDarkMode: (value) => set({ darkMode: value }),
}));

export default useDarkModeStore;

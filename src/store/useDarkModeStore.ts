import { create } from 'zustand';
import { persist } from "zustand/middleware";

interface DarkModeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

const useDarkModeStore = create<DarkModeStore>()(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setDarkMode: (value) => set({ darkMode: value }),
    }),
    {
      name: 'darkModeStorage',
    }
  )
);

export default useDarkModeStore;

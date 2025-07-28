// src/store/useUserStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  userId: string | null;
  setUserId: (id: string) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (id: string) => set({ userId: id }),
    }),
    {
      name: "userIdStorage",
    }
  )
);

export default useUserStore;

// src/store/useAccountBalance.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AccountState {
  userBalance: string | null;
  setUserBalance: (id: string) => void;
}

const useAccountBalance = create<AccountState>()(
  persist(
    (set) => ({
      userBalance: null,
      setUserBalance: (id: string) => set({ userBalance: id }),
    }),
    {
      name: "userBalanceStorage",
    }
  )
);

export default useAccountBalance;

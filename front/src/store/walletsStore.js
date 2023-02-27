import { create } from "zustand";

const useWalletsStore = create((set) => ({
  wallets: [],
  selectedWallet: null,
  setWallets: (newWallets) => set({ wallets: newWallets }),
  setSelectedWallet: (wallet) => set({ selectedWallet: wallet }),
}));

export default useWalletsStore;

import { create } from "zustand";

const useNavigationStore = create((set) => ({
  currentPanel: "home",
  setCurrentPanel: (panelId) => set({ currentPanel: panelId }),
}));

export default useNavigationStore;

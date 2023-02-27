import { create } from "zustand";

const usePopoutStore = create((set) => ({
  popout: null,
  setPopout: (newPopout) => set({ popout: newPopout }),
}));

export default usePopoutStore;

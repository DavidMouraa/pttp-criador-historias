import { create } from "zustand";

export const useBaseFlowNodeStore = create((set) => ({
  selected: false,
  icon: null,
  label: "Default",
  colors: {
    default: null,
    selected: null,
  }
}))

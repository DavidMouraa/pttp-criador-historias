import { create } from "zustand";

export const useEditingNodeStore = create((set) => ({
  editingNode: null,
  setEditingNode: (node) => set({ editingNode: node }),
  clearEditingNode: () => set({ editingNode: null }),
}))

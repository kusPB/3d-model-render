import create from "zustand";

export const useStore = create((set) => ({
  modelState: undefined,
  materialState: "",
  setSaveModel: (value) =>
    set((state) => ({ modelState: (state.modelState = value) })),
  setSaveMaterial: (value) =>
    set((state) => ({ materialState: (state.materialState = value) }))
}));

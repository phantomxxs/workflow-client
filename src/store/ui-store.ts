import { create } from "zustand";

export interface uiStoreInitialStateType {
  isDarkMode: boolean;
  isSidebarCollapsed: boolean;
  setIsDarkMode: (state: boolean) => void;
  setIsSidebarCollapsed: (state: boolean) => void;
}

export const useUIStore = create<uiStoreInitialStateType>((set) => ({
  isDarkMode: false,
  isSidebarCollapsed: false,
  setIsDarkMode: (newState: boolean) => set(() => ({ isDarkMode: newState })),
  setIsSidebarCollapsed: (newState: boolean) =>
    set(() => ({ isSidebarCollapsed: newState })),
}));

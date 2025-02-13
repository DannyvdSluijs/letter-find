import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

interface AppState {
    letterToFind: string;
    lettersToPickFrom: Record<string, number>;
    updateLetterToFind: (newLetter: string) => void;
}
const defaultLettersToPickFrom = {
    a: 10, b: 5, c: 2, d: 3, e: 12, f: 4, g: 3, h: 5, i: 8,
    j: 1, k: 1, l: 4, m: 3, n: 7, o: 8, p: 3, q: 1, r: 6,
    s: 6, t: 9, u: 3, v: 2, w: 2, x: 1, y: 2, z: 1,
    aa: 2, ui: 1, ij: 1, ee: 2, uu: 1,
};

// Creating the store with correct persist typing
export const useAppStore = create()(
    persist(
        (set) => ({
            letterToFind: "w",
            lettersToPickFrom: defaultLettersToPickFrom,
            updateLetterToFind: (newLetter: string) => set({ letterToFind: newLetter }),
        }),
        {
            name: "app-storage", // Unique key for localStorage
            getStorage: () => localStorage, // Use localStorage for persistence
        }
    ) as unknown as StateCreator<AppState>
);

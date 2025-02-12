import { create } from "zustand";

interface AppState {
    letterToFind: string;
    lettersToPickFrom: string[];
    updateLetterToFind: (newLetter: string) => void;
}
const defaultLettersToPickFrom = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
defaultLettersToPickFrom.push("aa", "ui", "ij", "ee", "uu");

export const useAppStore = create<AppState>((set) => ({
    letterToFind: "w",
    lettersToPickFrom: defaultLettersToPickFrom,
    updateLetterToFind: (newLetter: string) => set({ letterToFind: newLetter }),
}));

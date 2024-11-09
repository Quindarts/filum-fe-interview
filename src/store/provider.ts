import { QuestionSavedStoreType } from "@/types/Question.type";
import { AppStoreType } from "@/types/Zustand.type";
import { create } from "zustand";

const useAppStore = create<AppStoreType>((set) => ({
  email: "",
  totalScores: 0,
  questions: [],
  setEmail: (email: string) => set({ email: email }),
  setTotalScores: (totalScores: number) => set({ totalScores: totalScores }),
  setQuestions: (questions: QuestionSavedStoreType[]) => set({ questions: questions }),
}));

export default useAppStore;

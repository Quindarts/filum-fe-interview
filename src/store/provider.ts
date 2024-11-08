import { QuestionSavedStoreType } from "@/types/Question.type";
import { create } from "zustand";
export interface AppStateType {
  email?: string;
  totalScores: number;
  numberOfQuizzes: number;
  questions: QuestionSavedStoreType[];
}
export interface AppActionsType {
  setEmail: (email: string) => void;
  setTotalScores: (totalScores: number) => void;
  setNumberOfQuestion: (numberOfQuizzes: number) => void;
  setQuestions: (questions: QuestionSavedStoreType[]) => void;
}
type AppStoreType = AppStateType & AppActionsType;

const useAppStore = create<AppStoreType>((set) => ({
  email: "",
  totalScores: 0,
  numberOfQuizzes: 0,
  questions: [],
  setEmail: (email: string) => set({ email: email }),
  setTotalScores: (totalScores: number) => set({ totalScores: totalScores }),
  setNumberOfQuestion: (numberOfQuizzes: number) =>
    set({ numberOfQuizzes: numberOfQuizzes }),
  setQuestions: (questions: QuestionSavedStoreType[]) => set({ questions: questions }),
}));

export default useAppStore;

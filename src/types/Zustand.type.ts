import { QuestionSavedStoreType } from "./Question.type";

export interface AppStateType {
    email?: string;
    totalScores: number;
    questions: QuestionSavedStoreType[];
}

export interface AppActionsType {
    setEmail: (email: string) => void;
    setTotalScores: (totalScores: number) => void;
    setQuestions: (questions: QuestionSavedStoreType[]) => void;
}

export type AppStoreType = AppStateType & AppActionsType;

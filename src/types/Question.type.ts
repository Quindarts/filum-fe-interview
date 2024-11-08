export interface QuestionType {
    id: number;
    title: string;
    options: OptionType[];
}

export interface OptionType {
    id: number;
    text?: string;
    score: number;
}

export type QuestionSavedStoreType = {
    questionId?: number | string;
    optionId?: number | string;
    score: number;
};
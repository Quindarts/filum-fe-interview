import { QuestionType } from "./Question.type";
import { ResultType } from "./Result.type";

export interface AssessmentType {
    title: string;
    description: string;
    questions: QuestionType[];
    results: ResultType[];
}


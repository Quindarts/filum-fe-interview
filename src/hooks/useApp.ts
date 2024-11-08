import useAppStore, { AppActionsType, AppStateType } from '@/store/provider';
import { QuestionSavedStoreType } from '@/types/Question.type';

function useApp() {
    const setListOptions = useAppStore((s: AppActionsType) => s.setQuestions);
    const setTotalScores = useAppStore((s: AppActionsType) => s.setTotalScores);
    const questions = useAppStore((s: AppStateType) => s.questions);
    const totalScores = useAppStore((s: AppStateType) => s.totalScores);
    const rsListOptions = (newOptions: QuestionSavedStoreType) => {
        if (!newOptions) return questions;

        if (questions.some((ques) => ques.questionId === newOptions.questionId && ques.optionId === newOptions.optionId)) {
            return questions.map((ques: QuestionSavedStoreType) =>
                ques.optionId === newOptions.optionId ? { ...ques, ...newOptions } : ques
            )
        }
        return [...questions, newOptions];
    }
    const onToggleListOptions = (newOptions: QuestionSavedStoreType) => {
        const initQuestions = rsListOptions(newOptions)
        let totalScore = 0;
        if (initQuestions.length === 0) {
            setTotalScores(0)
        }
        setListOptions(initQuestions);
        for (const ques of initQuestions) {
            if (ques) {
                totalScore += ques.score || 0;
            }
        }
        setTotalScores(totalScore);
    }
    return {
        questions,
        totalScores,
        onToggleListOptions
    }
}
export default useApp
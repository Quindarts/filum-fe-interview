import useAppStore from '@/store/provider';
import { QuestionSavedStoreType } from '@/types/Question.type';
import { AppActionsType, AppStateType } from '@/types/Zustand.type';

function useApp() {
    const setListOptions = useAppStore((s: AppActionsType) => s.setQuestions);
    const setTotalScores = useAppStore((s: AppActionsType) => s.setTotalScores);
    const email = useAppStore((s: AppStateType) => s.email);
    const questions = useAppStore((s: AppStateType) => s.questions);
    const totalScores = useAppStore((s: AppStateType) => s.totalScores);

    const rsListOptions = (newOptions: QuestionSavedStoreType) => {
        if (!newOptions || !newOptions.questionId || !newOptions.optionId) return questions;
        const questionIndex = questions.findIndex((ques) => ques.questionId === newOptions.questionId && ques.optionId === newOptions.optionId);
        if (questionIndex !== -1) {
            return questions.map((ques, index) =>
                index === questionIndex ? { ...ques, ...newOptions } : ques
            );
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
        email,
        questions,
        totalScores,
        onToggleListOptions
    }
}
export default useApp
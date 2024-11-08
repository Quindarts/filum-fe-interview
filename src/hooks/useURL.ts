import { useSearchParams } from "react-router-dom";

type QueryType = 'current-question'


enum QueryEnum {
    CURRENT_QUESTION = 'current-question',
}
function useURL() {
    const [query, setSearch] = useSearchParams();
    const getQueryField = (type: QueryType) => {
        return query.get(type) ? `${query.get(type)}` : ''
    }
    const setCurrentQuestion = (currentQues?: number) => {
        query.set(QueryEnum.CURRENT_QUESTION, `${!currentQues ? 1 : currentQues}`)
        setSearch(query, {
            replace: true,
        });
    }
    return {
        getQueryField,
        setCurrentQuestion
    }
}

export default useURL
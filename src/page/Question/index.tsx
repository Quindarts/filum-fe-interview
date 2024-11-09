import { useSnackbar } from 'notistack';
import FilumCard from '@/components/Card';
import dataJSON from '@/dummy/data';
import { AssessmentType } from '@/types/Assessment.type';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { OptionType, QuestionSavedStoreType, QuestionType } from '@/types/Question.type';
import useURL from '@/hooks/useURL';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_APP } from '@/constants/Route';
import { useState } from 'react';
import useApp from '@/hooks/useApp';

function QuestionPage() {
  const { onToggleListOptions } = useApp();
  const { enqueueSnackbar } = useSnackbar();
  const { getQueryField } = useURL();
  const dummyData: AssessmentType = dataJSON;

  const { questions } = dummyData;
  const currentQuestion = parseInt(getQueryField('current-question'));
  const navigate = useNavigate();
  const [selectOptions, setSelectOptions] = useState<Partial<QuestionSavedStoreType>>({});

  //TODO: Hanlde event
  const handleNextQues = () => {
    if (!selectOptions.questionId) {
      enqueueSnackbar('Vui lòng chọn câu trả lời', { variant: 'error' });
      return;
    }
    onToggleListOptions(selectOptions as OptionType);
    setSelectOptions({});
    currentQuestion < 10
      ? navigate(`${ROUTE_APP.QUESTION}?current-question=${currentQuestion + 1}`)
      : navigate(`${ROUTE_APP.RESULT}`);
  };
  const handlePreQues = () => {
    setSelectOptions({});
    navigate(`${ROUTE_APP.QUESTION}?current-question=${currentQuestion - 1}`);
  };
  
  const onChoose = ({ score, optionId, questionId }: QuestionSavedStoreType) => {
    setSelectOptions({ questionId, score, optionId });
  };

  return (
    <FilumCard sx={{ px: 4 }}>
      <>
        <Typography variant='h4' fontWeight={600} mb={10} textAlign={'center'} color='grey.300'>
          Câu hỏi {currentQuestion} /10
        </Typography>
        {questions
          .filter((ques) => ques.id == currentQuestion)
          .map((ques: QuestionType) => (
            <Box key={ques.id}>
              <Typography variant='body1' color='grey.300'>
                {ques.title}
              </Typography>
              <Box mb={10} mt={14}>
                {ques?.options.map((opt: OptionType) => (
                  <Button
                    size='large'
                    sx={{ my: 2 }}
                    color={
                      selectOptions?.questionId === ques?.id && selectOptions.optionId === opt.id
                        ? 'info'
                        : 'info'
                    }
                    variant={
                      selectOptions?.questionId === ques?.id && selectOptions.optionId === opt.id
                        ? 'contained'
                        : 'outlined'
                    }
                    fullWidth
                    key={opt.id}
                    onClick={() =>
                      onChoose({ questionId: ques?.id, optionId: opt?.id, score: opt?.score })
                    }
                  >
                    {opt.text}
                  </Button>
                ))}
              </Box>
            </Box>
          ))}
      </>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Button
          color='primary'
          startIcon={<Icon icon='ep:back' />}
          variant='contained'
          disabled={currentQuestion <= 1}
          onClick={handlePreQues}
        >
          Quay lại
        </Button>
        <Button
          color='primary'
          onClick={handleNextQues}
          endIcon={<Icon icon='grommet-icons:link-next' />}
          variant='contained'
        >
          Tiếp theo
        </Button>
      </Box>
    </FilumCard>
  );
}

export default QuestionPage;

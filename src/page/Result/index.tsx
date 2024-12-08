import FilumCard from '@/components/Card';
import useApp from '@/hooks/useApp';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import dataJSON from '@/dummy/data';
import { AssessmentType } from '@/types/Assessment.type';

import Chart from './Chart';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { ResultType } from '@/types/Result.type';
import ModalShareLink from './Modal';
import { useNavigate } from 'react-router-dom';
import { ROUTE_APP } from '@/constants/Route';
function ResultPage() {
  const { results }: AssessmentType = dataJSON;
  const { totalScores, onResetQuizz } = useApp();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleResetQuizz = () => {
    onResetQuizz();
    navigate(ROUTE_APP.INSTRUCTION);
  };
  const yourLevel = results.find(
    (result: ResultType) => totalScores >= result.range[0] && totalScores <= result.range[1],
  ) as ResultType;

  return (
    <>
      <FilumCard sx={{ mt: 10 }}>
        <Box sx={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              borderRadius: '50%',
              bgcolor: 'white',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img width={30} height={30} src={yourLevel?.icon} />
          </Box>
          <Box>
            <Typography
              variant='body2'
              textAlign={'center'}
              color='grey.400'
              textTransform={'uppercase'}
            >
              VOICE OF THE CUSTOMER - CẤP ĐỘ {' ' + yourLevel?.level}
            </Typography>
            <Typography
              variant='h4'
              textTransform={'uppercase'}
              fontWeight={600}
              mt={3}
              color='grey.300'
            >
              {yourLevel.name}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant='body2'
            fontSize={14}
            mt={10}
            mb={20}
            lineHeight={1.7}
            color='grey.400'
          >
            {yourLevel?.description?.text}
          </Typography>
          <Chart score={totalScores} />
        </Box>
      </FilumCard>

      <Box
        sx={{
          transform: {
            xs: 'rotate(0deg)',
            sm: 'rotate(90deg)',
          },
          transformOrigin: 'center',
          gap: 4,
          display: 'flex',
          position: 'fixed',
          bottom: {
            xs: 20,
            sm: 'auto',
          },
          right: {
            xs: 20,
            sm: 0,
          },
        }}
      >
        <Button
          variant='contained'
          color='info'
          sx={{
            height: {
              sm: 50,
            },
          }}
          onClick={handleOpenModal}
          endIcon={<Icon width={20} height={20} icon='uil:share' />}
        >
          Chia sẻ{' '}
        </Button>
        <Tooltip title='Tải xuống kết quả'>
          <Button
            sx={{
              minWidth: 0,
              color: 'info.main',
              bgcolor: 'white',
              transform: {
                xs: 'rotate(0deg)',
                sm: 'rotate(-90deg)',
              },
            }}
            variant='contained'
          >
            <Icon width={24} height={24} icon='line-md:download-outline-loop' />
          </Button>
        </Tooltip>

        <Tooltip onClick={handleResetQuizz} title='Làm lại bài test'>
          <Button
            sx={{
              minWidth: 0,
              color: 'info.main',
              bgcolor: 'white',
              transform: {
                xs: 'rotate(0deg)',
                sm: 'rotate(-90deg)',
              },
            }}
            variant='contained'
          >
            <Icon icon='carbon:reset' width={20} height={20} />
          </Button>
        </Tooltip>
      </Box>
      <ModalShareLink level={yourLevel.level} open={openModal} onClose={handleCloseModal} />
    </>
  );
}

export default ResultPage;

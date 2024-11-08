import FilumCard from '@/components/Card';
import useApp from '@/hooks/useApp';
import { Box, Button, Typography } from '@mui/material';
import dataJSON from '@/dummy/data';
import { AssessmentType } from '@/types/Assessment.type';
import { ResultType } from '@/types/Result.type';
import Chart from './Chart';
import { Icon } from '@iconify/react';
import useShare from '@/hooks/useShare';
function ResultPage() {
  const { results }: AssessmentType = dataJSON;
  const { totalScores, email } = useApp();
  const { onCopyToClipBoard } = useShare();

  const yourLevel = results.find(
    (result: ResultType) => totalScores >= result.range[0] && totalScores <= result.range[1],
  ) as ResultType;

  const handleCopyToClipBoard = async () => {
    await onCopyToClipBoard(`${email}`, yourLevel?.level);
  };
  return (
    <>
      <FilumCard>
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
          endIcon={<Icon width={20} height={20} icon='uil:share' />}
        >
          Chia sẻ{' '}
        </Button>
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
          onClick={() => handleCopyToClipBoard()}
          variant='contained'
        >
          <Icon width={24} height={24} icon='line-md:download-outline-loop' />
        </Button>
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
          <Icon width={24} height={24} icon='fluent-color:mail-16' />
        </Button>
      </Box>
    </>
  );
}

export default ResultPage;

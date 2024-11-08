import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DetailText from './DetailText';
import { Icon } from '@iconify/react';
import { ROUTE_APP } from '@/constants/Route';
import FilumCard from '@/components/Card';

function InstructionPage() {
  const navigate = useNavigate();
  return (
    <>
      <FilumCard sx={{ mt: 20 }}>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            color: {
              xs: 'grey.200',
            },
            textTransform: 'uppercase',
            fontSize: 12,
            mt: 4,
            mb: 6,
          }}
        >
          Hướng dẫn trả lời
        </Typography>
        <Typography
          sx={{
            textAlign: 'start',
            color: {
              xs: 'grey.300',
            },

            fontSize: {
              xs: 16,
              lg: 20,
            },

            fontWeight: 'bold',
          }}
        >
          Hãy dựa vào hướng dẫn sau đây để trả lời các câu hỏi:
        </Typography>
        <Box>
          <DetailText />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Button
            size='large'
            variant='contained'
            endIcon={<Icon icon='ic:baseline-start' />}
            fullWidth
            onClick={() => navigate(`${ROUTE_APP.QUESTION}?current-question=1`)}
          >
            Bắt đầu
          </Button>
        </Box>
      </FilumCard>
    </>
  );
}

export default InstructionPage;

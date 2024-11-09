import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '@/store/provider';
import { Icon } from '@iconify/react';
import FilumCard from '@/components/Card';
import { ROUTE_APP } from '@/constants/Route';
import { AppActionsType } from '@/types/Zustand.type';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [errText, setErrText] = useState('');
  
  const navigate = useNavigate();
  const setEmailStore = useAppStore((state: AppActionsType) => state.setEmail);

  const handleSubmit = () => {
    if (!email.match(`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`)) {
      setErrText('Email không hợp lệ');
      return;
    }
    setEmailStore(email);
    navigate(ROUTE_APP.INSTRUCTION);
    return;
  };

  return (
    <Box
      sx={{
        bgcolor: '#061F40',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FilumCard>
        <Box width={140} textAlign={'center'} mx='auto' borderRadius={1} bgcolor={'primary.main'}>
          <img src='https://assets.filum.ai/landing-page3.0/filum-ai-logo.svg' />
        </Box>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            color: {
              xs: 'grey.400',
            },
            textTransform: 'uppercase',
            fontSize: 12,
            mt: 4,
            mb: 2,
          }}
        >
          Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: {
              xs: 'grey.300',
            },
            fontSize: {
              xs: 16,
              md: 20,
              lg: 22,
            },
            my: {
              xs: 10,
              md: 20,
            },
            fontWeight: 'bold',
          }}
        >
          Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?
        </Typography>
        <Typography fontSize={12} mt={2} mb={6} textAlign={'center'} color='grey.400'>
          Đánh giá khả năng của bạn trong việc lắng nghe, hiểu và đáp ứng các tín hiệu khách hàng
        </Typography>
        <form>
          <TextField
            label='Email'
            error={errText !== '' ? true : false}
            helperText={errText}
            onChange={(e: any) => setEmail(e.target.value)}
            name='email'
            size='small'
            required
            fullWidth
            placeholder='Nhập vào email của bạn'
          />
          <Box sx={{ mt: 10 }}>
            <Button
              onClick={handleSubmit}
              size='large'
              variant='contained'
              endIcon={<Icon icon='hugeicons:start-up-02' />}
              fullWidth
            >
              Bắt đầu
            </Button>
          </Box>
        </form>
      </FilumCard>
    </Box>
  );
}

export default LoginPage;

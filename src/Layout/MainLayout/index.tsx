import Header from '@/components/Shared/Header';
import { Box, CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
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
      <Header />
      <Suspense
        fallback={
          <Box
            position={'fixed'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
            height={'100vh'}
            width={'100vw'}
            bgcolor={'rgba(0,0,0,0.5)'}
          >
            <CircularProgress color='secondary' />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
}

export default MainLayout;

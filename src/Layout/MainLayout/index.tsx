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
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}

export default MainLayout;

import useAppStore from '@/store/provider';
import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import HeaderAppBar from './style';

const Header = () => {
  const email = useAppStore((state) => state.email);
  return (
    <HeaderAppBar position='fixed'>
      <Box className='main__header'>
        <img src='https://assets.filum.ai/landing-page3.0/filum-ai-logo.svg' />
        <Typography variant='body2' color='white'>
          <Icon icon='noto-v1:waving-hand' style={{ marginRight: 6 }} />
          Hello, {email ? email : 'Guest'}
        </Typography>
      </Box>
    </HeaderAppBar>
  );
};

export default Header;

import useAppStore from '@/store/provider';
import styled from '@emotion/styled';
import { AppBar, Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

const HeaderAppBar = styled(AppBar)`
  background-color: 'primary.main';
  padding: 0 20px;
  & .main__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
`;
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

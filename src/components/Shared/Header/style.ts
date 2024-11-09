import styled from '@emotion/styled';
import { AppBar } from '@mui/material';

const HeaderAppBar = styled(AppBar)`
  background-color: 'primary.main';
  padding: 0 20px;
  & .main__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
`;
export default HeaderAppBar;
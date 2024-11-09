import { Box } from '@mui/material';
import { SnackbarContent, useSnackbar } from 'notistack';

function CustomVariantSnackbar(props: any) {
  const { closeSnackbar } = useSnackbar();
  const handleCloseSnackbar = () => closeSnackbar(id);
  const { id, message, ...other } = props;
  return (
    <SnackbarContent role='alert' {...other}>
      <Box>
        {message}
        <button onClick={handleCloseSnackbar}>Close</button>
      </Box>
    </SnackbarContent>
  );
}

export default CustomVariantSnackbar;

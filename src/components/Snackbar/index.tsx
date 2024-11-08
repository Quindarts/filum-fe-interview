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
        <button className='cursor-pointer text-xl text-white' onClick={handleCloseSnackbar}>
          Close
        </button>
      </Box>
    </SnackbarContent>
  );
}

export default CustomVariantSnackbar;

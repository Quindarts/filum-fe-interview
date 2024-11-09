import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
  Button,
  CircularProgress,
  Box,
} from '@mui/material';
import useShare from '@/hooks/useShare';
import useApp from '@/hooks/useApp';
import { useState } from 'react';
interface ModalShareLinkProps extends DialogProps {
  open: boolean;
  onClose: () => void;
  level: number;
}
function ModalShareLink(props: ModalShareLinkProps) {
  const { open, level, onClose, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const { email } = useApp();
  const { onCopyToClipBoard, getLinkShareFacebook, onSendEmail } = useShare();
  const handleCopyToClipBoard = async () => {
    await onCopyToClipBoard(`${email}`, level);
  };
  const link_face = getLinkShareFacebook(`${email}`, level);
  const hanldeSendEmail = async () => {
    setLoading(true);
    await onSendEmail(`${email}`, level);
    setLoading(false);
  };
  return (
    <Dialog maxWidth='sm' {...rest} open={open} onClose={onClose}>
      <DialogTitle>Chia sẻ kết quả </DialogTitle>
      <DialogContent>
        {loading ? (
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            height={200}
            width={200}
          >
            <CircularProgress />{' '}
          </Box>
        ) : (
          <>
            {' '}
            <Typography variant='body1' fontWeight={500} color='grey.700'>
              Dưới đây là một số cách bạn có thể chia sẻ kết quả này với bạn bè và đồng nghiệp của
              mình:
            </Typography>
            <Typography variant='body2' mt={4} mb={10} color='error.main'>
              *Lưu ý: Gửi kết quả về gmail có thể nằm ở thư mục mail rác
            </Typography>
            <Button
              href={`https://www.facebook.com/sharer/sharer.php?u=${link_face}&src=sdkpreparse`}
              fullWidth
              color='info'
            >
              Chia sẻ qua Facebook
            </Button>
            <Button fullWidth color='info' onClick={() => hanldeSendEmail()}>
              Chia sẻ qua Email
            </Button>
            <Button onClick={() => handleCopyToClipBoard()} fullWidth color='info'>
              Sao chép đường dẫn kết quả
            </Button>
            <Button onClick={onClose} sx={{ mt: 4 }} fullWidth color='warning'>
              Hủy
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ModalShareLink;

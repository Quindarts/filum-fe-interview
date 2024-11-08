import { Box } from '@mui/material';

interface ButtonFacebookPropsType {
  linkResult: string;
}
const ButtonFacebook = ({ linkResult }: ButtonFacebookPropsType) => {
  return (
    <Box>
      <div className='fb-share-button' data-href={''} data-layout='' data-size=''>
        <a
          target='_blank'
          href={`https://www.facebook.com/sharer/sharer.php?u=${linkResult}&src=sdkpreparse`}
          className='fb-xfbml-parse-ignore'
        >
          Chia sẻ
        </a>
      </div>
    </Box>
  );
};

export default ButtonFacebook;

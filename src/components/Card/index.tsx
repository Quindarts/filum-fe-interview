import { CardContent, Card, Box, CardProps } from '@mui/material';

// interface CustomCardPropTypes extends CardProps {}
function FilumCard(props: CardProps) {
  const { children, ...rest } = props;
  return (
    <Box {...rest}>
      <Card
        sx={{
          width: {
            xs: '100%',
            sm: 400,
          },
          height: {
            xs: '100%',
            sm: 500,
          },
          bgcolor: {
            xs: 'rgba(230, 227, 227, 0.3)',
          },
          px: 0,
        }}
      >
        <CardContent
          sx={{
            flexDirection: 'column',
            mx: 0,
            mt: {
              xs: 20,
              md: 0,
            },
            p: {
              xs: 10,
            },
          }}
        >
          {children}
        </CardContent>
      </Card>
    </Box>
  );
}

export default FilumCard;

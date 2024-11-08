import GaugeChart from 'react-gauge-chart';
import { Box, BoxProps } from '@mui/material';
import theme from '@/Theme';

interface ChartPropTypes extends BoxProps {
  score: number;
}
function Chart({ score, ...rest }: ChartPropTypes) {
  return (
    <Box {...rest}>
      <GaugeChart
        id='gauge-chart'
        percent={score / 10}
        nrOfLevels={5}
        marginInPercent={0.1}
        arcPadding={0}
        cornerRadius={0}
        needleColor={theme.palette.warning.main}
        colors={['#dedede', theme.palette.warning.main]}
      />
    </Box>
  );
}

export default Chart;

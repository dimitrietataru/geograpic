import { Box, Tooltip, Typography } from '@mui/material';
import type { ColumnPopulationProps } from './types';

const getDisplayValues = (value: number): { value: string; suffix: 'B' | 'M' | 'K' | undefined } => {
  if (value >= 1_000_000_000) {
    return { value: `${(value / 1_000_000_000).toFixed(2)}`, suffix: 'B' };
  }

  if (value >= 1_000_000) {
    return { value: `${(value / 1_000_000).toFixed(1)}`, suffix: 'M' };
  }

  if (value >= 1_000) {
    return { value: `${(value / 1_000).toFixed(1)}`, suffix: 'K' };
  }

  return { value: `${value}`, suffix: undefined };
};

function ColumnPopulation(props: ColumnPopulationProps) {
  const displayValues = getDisplayValues(props.population);
  const localeValue = props.population.toLocaleString('fr-FR');

  return (
    <Tooltip describeChild arrow title={localeValue} placement="left">
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Typography variant="tableText1">{displayValues.value}</Typography>
        {displayValues.suffix && (
          <Box sx={{ height: '100%', ml: 0.5, display: 'flex', alignItems: 'center' }}>
            {displayValues.suffix === 'B' && (
              <Typography variant="tableText2" sx={[({ palette }) => ({ color: palette.data.population.B })]}>
                {displayValues.suffix}
              </Typography>
            )}
            {displayValues.suffix === 'M' && (
              <Typography variant="tableText2" sx={[({ palette }) => ({ color: palette.data.population.M })]}>
                {displayValues.suffix}
              </Typography>
            )}
            {displayValues.suffix === 'K' && (
              <Typography variant="tableText2" sx={[({ palette }) => ({ color: palette.data.population.K })]}>
                {displayValues.suffix}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Tooltip>
  );
}

export default ColumnPopulation;

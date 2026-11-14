import { Box, Divider, Tooltip, Typography } from '@mui/material';
import type { ColumnCodeProps } from './types';

function CodeTooltip({ codeA2, codeA3 }: ColumnCodeProps) {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="tableText2" component="div">
        ISO 3166-1 Alpha-2:{' '}
        <Typography variant="tableText1" sx={{ fontWeight: 'bold' }}>
          {codeA2}
        </Typography>
      </Typography>
      <Typography variant="tableText2" component="div">
        ISO 3166-1 Alpha-3:{' '}
        <Typography variant="tableText1" sx={{ fontWeight: 'bold' }}>
          {codeA3}
        </Typography>
      </Typography>
    </Box>
  );
}

function ColumnCode(props: ColumnCodeProps) {
  return (
    <Tooltip placement="left" arrow describeChild title={<CodeTooltip codeA2={props.codeA2} codeA3={props.codeA3} />}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '2rem', textAlign: 'right', flexShrink: 0 }}>
          <Typography variant="tableText1">{props.codeA2}</Typography>
        </Box>

        <Divider orientation="vertical" flexItem={false} sx={{ height: '1rem', alignSelf: 'center', mx: 1 }} />

        <Box sx={{ width: '2.5rem', textAlign: 'left', flexShrink: 0 }}>
          <Typography variant="tableText2" sx={{ color: 'text.secondary' }}>
            {props.codeA3}
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  );
}

export default ColumnCode;

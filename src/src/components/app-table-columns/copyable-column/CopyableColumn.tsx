import { Box } from '@mui/material';
import AppCopyButton from '../../app-copy-button';
import type { CopyableColumnProps } from './types';

function CopyableColumn(props: CopyableColumnProps) {
  return (
    <Box
      sx={[
        { height: '100%', width: '100%', minHeight: 0, minWidth: 0 },
        { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 0.5 },
        theme => ({ '& .copy-button': { opacity: 0, transition: theme.animations.opacity } }),
        { '&:hover .copy-button, &:focus .copy-button': { opacity: 1 } },
      ]}
    >
      {props.children}
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <AppCopyButton value={props.value} />
      </Box>
    </Box>
  );
}

export default CopyableColumn;

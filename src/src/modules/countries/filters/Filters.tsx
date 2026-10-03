import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Collapse, colors, Divider, IconButton, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import ContinentFilter from './continent-filter';

function Filters() {
  const [isContinentNameOpen, setisContinentNameOpen] = useState(true);

  const handleContinentNameOpen = () => {
    setisContinentNameOpen(!isContinentNameOpen);
  };

  return (
    <Paper
      sx={[
        { height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'start', gap: 2 },
        { overflowY: 'auto', scrollbarGutter: 'stable', px: 1.5 },
      ]}
    >
      <Box className="continentFilter">
        <Box
          sx={[
            { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
            { cursor: 'pointer' },
          ]}
          onClick={handleContinentNameOpen}
        >
          <Typography sx={{ lineHeight: 3, fontSize: '14px' }} variant="subtitle1" color={colors.grey[700]}>
            Continent Name
          </Typography>
          <IconButton size="small" disableRipple sx={{ px: 0 }}>
            {isContinentNameOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
        </Box>
        <Collapse in={isContinentNameOpen}>
          <ContinentFilter />
        </Collapse>
        <Divider variant="middle" sx={{ pt: 2 }} />
      </Box>
    </Paper>
  );
}

export default Filters;

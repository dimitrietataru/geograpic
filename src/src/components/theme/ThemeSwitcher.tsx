import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, IconButton } from '@mui/material';
import { useAppTheme } from '../../theme/hooks/useAppTheme';

function ThemeSwitcher() {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <Box className="themeToggle" sx={{ display: 'flex', justifyContent: 'center' }}>
      <IconButton onClick={toggleTheme}>{mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
    </Box>
  );
}

export default ThemeSwitcher;

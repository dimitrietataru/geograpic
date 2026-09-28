import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FlagIcon from '@mui/icons-material/Flag';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Divider, Drawer, IconButton, List } from '@mui/material';
import { useState } from 'react';
import ThemeSwitcher from '../theme';
import { AppMenuItem } from './AppMenuItem';

function AppMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const widthClosed = 65;
  const widthOpened = 240;

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleContinentsOnClick = () => {
    console.log('menu', 'clicked continents');
  };

  const handleCountriesOnClick = () => {
    console.log('menu', 'clicked countries');
  };

  const handleCitiesOnClick = () => {
    console.log('menu', 'clicked cities');
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={theme => ({
        width: isOpen ? widthOpened : widthClosed,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: isOpen ? widthOpened : widthClosed,
          overflowX: 'hidden',

          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: isOpen ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
          }),
        },
      })}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // alignContent: 'space-between',
          justifyContent: 'space-between',
        }}
      >
        <Box className="menuTop">
          <Box
            className="menuToggle"
            sx={[
              { display: 'flex', alignItems: 'center', height: '48px' },
              isOpen ? { justifyContent: 'flex-end', paddingRight: 2 } : { justifyContent: 'center' },
            ]}
          >
            {isOpen && (
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            )}
            {!isOpen && (
              <IconButton onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
          <Divider variant="middle" />
          <List>
            <AppMenuItem
              label="Continents"
              icon={<PublicIcon />}
              isExpanded={isOpen}
              onClick={handleContinentsOnClick}
            ></AppMenuItem>

            <AppMenuItem
              label="Countries"
              icon={<FlagIcon />}
              isExpanded={isOpen}
              onClick={handleCountriesOnClick}
            ></AppMenuItem>

            <AppMenuItem
              label="Cities"
              icon={<LocationCityIcon />}
              isExpanded={isOpen}
              onClick={handleCitiesOnClick}
            ></AppMenuItem>
          </List>
        </Box>
        <Box className="menuBottom">
          <ThemeSwitcher />
        </Box>
      </Box>
    </Drawer>
  );
}

export default AppMenu;

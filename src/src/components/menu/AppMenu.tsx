import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FlagIcon from '@mui/icons-material/Flag';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Divider, Drawer, IconButton, List } from '@mui/material';
import { useState } from 'react';
import { AppMenuItem } from './AppMenuItem';

function AppMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
        sx={[
          { display: 'flex', alignItems: 'center', height: '48px' },
          isOpen ? { justifyContent: 'flex-end', paddingRight: 2 } : { justifyContent: 'center' },
        ]}
      >
        {isOpen && (
          <Box>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
        )}
        {!isOpen && (
          <Box>
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
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
    </Drawer>
  );
}

export default AppMenu;

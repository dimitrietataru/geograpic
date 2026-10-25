import ExploreIcon from '@mui/icons-material/Explore';
import FlagIcon from '@mui/icons-material/Flag';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Divider, Drawer, List } from '@mui/material';
import { Routes as AppRoutes } from '../../routing/routes';
import { useMenuTranslations } from '../../translations/useAppTranslations';
import AppThemeSwitcher from '../app-theme-switcher';
import AppMenuItem from './app-menu-item-v2';

const WIDTH = 56;

function AppMenu() {
  const [t] = useMenuTranslations();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={theme => ({
        width: `${WIDTH}px`,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          height: 'fit-content',
          width: `${WIDTH}px`,
          overflowX: 'hidden',
          top: '50%',
          transform: 'translateY(-50%)',
          borderRadius: '0 16px 16px 0',
          boxSizing: 'border-box',

          position: 'fixed',
          left: 0,
          overflowY: 'auto',
          zIndex: 999,

          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          py: 1,
        }}
      >
        <Box className="menuTop">
          <List>
            <AppMenuItem to={AppRoutes.Continents} label={t('menu.continents')} icon={<PublicIcon />} />

            <AppMenuItem to={AppRoutes.Countries} label={t('menu.countries')} icon={<FlagIcon />} />

            <AppMenuItem to={AppRoutes.Cities} label={t('menu.cities')} icon={<LocationCityIcon />} />

            <Divider variant="middle" />

            <AppMenuItem to={AppRoutes.MapExplore} label={t('menu.mapExplore')} icon={<ExploreIcon />} />
          </List>
        </Box>
        <Box className="menuBottom">
          <Divider variant="middle" />
          <AppThemeSwitcher />
        </Box>
      </Box>
    </Drawer>
  );
}

export default AppMenu;

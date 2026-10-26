import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router';
import { type MenuItemProps } from './types';

function AppMenuItem(props: MenuItemProps) {
  const { to, label, icon, onClick } = props;

  return (
    <ListItem key={label} disablePadding sx={{ display: 'block', py: 1 }}>
      <ListItemButton
        component={NavLink}
        to={to}
        onClick={onClick}
        sx={[
          { justifyContent: 'center' },
          {
            '& .MuiListItemText-primary': { fontWeight: 400, fontSize: 10 },
            '&.active': {
              backgroundColor: 'action.selected',
              '& .MuiListItemIcon-root': { color: 'primary.main' },
              '& .MuiListItemText-primary': { fontWeight: 600, fontSize: 10 },
            },
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          },
        ]}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center', pt: 0.75 }]}>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
}

export default AppMenuItem;

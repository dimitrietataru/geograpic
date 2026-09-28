import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router';

export type TMenuItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onClick?: () => void;
};

export function AppMenuItem(props: TMenuItemProps) {
  const { isExpanded: isOpen, to, label, icon, onClick } = props;

  return (
    <ListItem key={label} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        component={NavLink}
        to={to}
        onClick={onClick}
        sx={[
          {
            '&.active': {
              backgroundColor: 'action.selected',
              '& .MuiListItemIcon-root': { color: 'primary.main' },
              '& .MuiListItemText-primary': { fontWeight: 600 },
            },
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          },
          isOpen ? { justifyContent: 'initial' } : { justifyContent: 'center' },
        ]}
      >
        <ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, isOpen ? { mr: 3 } : { mr: 'auto' }]}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={[isOpen ? { display: 'block', opacity: 1 } : { display: 'none', opacity: 0 }]}
        />
      </ListItemButton>
    </ListItem>
  );
}

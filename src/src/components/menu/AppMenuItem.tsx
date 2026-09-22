import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export type TMenuItemProps = {
  label: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onClick?: () => void;
};

export function AppMenuItem(props: TMenuItemProps) {
  const { isExpanded: isOpen, label, icon, onClick } = props;

  return (
    <ListItem key={label} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        onClick={onClick}
        sx={[{ height: 48, px: 2.5 }, isOpen ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
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

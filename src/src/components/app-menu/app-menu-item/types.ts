export type MenuItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onClick?: () => void;
};

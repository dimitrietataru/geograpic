export type TMenuItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onClick?: () => void;
};

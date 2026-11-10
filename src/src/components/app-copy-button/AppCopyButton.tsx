import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import type { AppCopyButtonProps } from './types';

function AppCopyButton({ value }: AppCopyButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      // swallow
    }
  };

  return (
    <Tooltip title={copied ? 'Copied' : 'Copy to clipboard'}>
      <IconButton className="copy-button" size="small" onClick={() => void onClick()} sx={{ height: 32, width: 32 }}>
        <ContentCopyIcon
          fontSize="inherit"
          color={copied ? 'success' : 'inherit'}
          sx={[{ opacity: 0.4 }, theme => ({ '&:hover': { opacity: 0.8, transition: theme.animations.opacity } })]}
        />
      </IconButton>
    </Tooltip>
  );
}

export default AppCopyButton;

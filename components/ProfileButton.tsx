import { mdiAccount } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import { useCallback } from 'react';
import { logout } from 'store/auth';

export default function ProfileButton() {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

  const onLogout = useCallback(() => {
    logout();
    popupState.close();
  }, [popupState]);

  return (
    <div>
      <IconButton
        sx={{
          backgroundColor: 'grey.100',
        }}
        {...bindTrigger(popupState)}
      >
        <Box
          component={Icon}
          path={mdiAccount}
          sx={{
            width: 16,
            height: 16,
          }}
        />
      </IconButton>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

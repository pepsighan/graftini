import { IconButton, Menu, MenuItem, Box } from '@mui/material';
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import { mdiAccount } from '@mdi/js';
import { Icon } from '@mdi/react';

export default function ProfileButton() {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
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
        <MenuItem onClick={popupState.close}>Cake</MenuItem>
        <MenuItem onClick={popupState.close}>Death</MenuItem>
      </Menu>
    </div>
  );
}

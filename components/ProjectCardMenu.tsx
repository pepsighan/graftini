import { mdiDotsVertical } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks';

type ProjectCardMenuProps = {
  projectId: string;
};

export default function ProjectCardMenu({ projectId }: ProjectCardMenuProps) {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: `project-card-menu-${projectId}`,
  });

  return (
    <div>
      <IconButton {...bindTrigger(popupState)}>
        <Box
          component={Icon}
          path={mdiDotsVertical}
          sx={{
            width: 16,
            height: 16,
          }}
        />
      </IconButton>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

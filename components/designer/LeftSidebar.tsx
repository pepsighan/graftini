import { Drawer, Toolbar } from '@mui/material';

export const leftSidebarWidth = 250;

export default function LeftSidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: leftSidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: leftSidebarWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
    </Drawer>
  );
}

import { Drawer, Stack, TextField, Toolbar } from '@mui/material';
import Menu from 'components/prebuilt/Menu';
import PostAuthor from 'components/prebuilt/PostAuthor';
import PostCategories from 'components/prebuilt/PostCategories';
import PostContent from 'components/prebuilt/PostContent';
import PostTags from 'components/prebuilt/PostTags';
import PostTitle from 'components/prebuilt/PostTitle';
import WidgetButton from './WidgetButton';

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
      {/* This toolbar is hidden within the original nav. This is here just so that the 
      content hence-forth is not hidden underneath the original nav. */}
      <Toolbar />

      <TextField label="Search Widget" sx={{ mt: 2, mx: 2 }} />
      <Stack spacing={2} sx={{ mt: 2, mx: 2 }}>
        <WidgetButton component={PostTitle}>Post Title</WidgetButton>
        <WidgetButton component={PostContent}>Post Content</WidgetButton>
        <WidgetButton component={Menu}>Menu</WidgetButton>
        <WidgetButton component={PostCategories}>Post Categories</WidgetButton>
        <WidgetButton component={PostTags}>Post Tags</WidgetButton>
        <WidgetButton component={PostAuthor}>Author</WidgetButton>
      </Stack>
    </Drawer>
  );
}

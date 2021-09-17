import { Editor, Element, Frame } from '@craftjs/core';
import { Box } from '@mui/material';
import Root from 'components/prebuilt/Root';
import PostTitle from 'components/prebuilt/PostTitle';
import LeftSidebar, { leftSidebarWidth } from './LeftSidebar';

export default function Designer() {
  return (
    <Editor resolver={{ Title: PostTitle, Container: Root }}>
      <LeftSidebar />
      <Box
        sx={{
          marginLeft: `${leftSidebarWidth}px`,
          userSelect: 'none',
          // The padding is a gutter between the canvas and the rest of the content.
          paddingTop: 2,
          paddingLeft: 2,
          paddingRight: 2,
          bgcolor: 'grey.200',
          // The height of the navigation is 48px + 1px (for the border).
          // TODO: Use a variable to constrain the height of the navigation and use it here.
          height: 'calc(100vh - 49px)',
          overflowY: 'auto',
        }}
      >
        <Frame>
          <Element is={Root} canvas>
            <Element is={PostTitle} />
          </Element>
        </Frame>
      </Box>
    </Editor>
  );
}

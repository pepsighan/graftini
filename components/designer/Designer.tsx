import { Editor, Element, Frame } from '@craftjs/core';
import { Box } from '@mui/material';
import Menu from 'components/prebuilt/Menu';
import PostAuthor from 'components/prebuilt/PostAuthor';
import PostCategories from 'components/prebuilt/PostCategories';
import PostContent from 'components/prebuilt/PostContent';
import PostTags from 'components/prebuilt/PostTags';
import PostTitle from 'components/prebuilt/PostTitle';
import Root from 'components/prebuilt/Root';
import LeftSidebar, { leftSidebarWidth } from './LeftSidebar';

export default function Designer() {
  return (
    <Editor
      resolver={{
        Root,
        Menu,
        PostTitle,
        PostContent,
        PostTags,
        PostCategories,
        PostAuthor,
      }}
    >
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

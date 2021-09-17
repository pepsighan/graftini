import { useNode } from '@craftjs/core';
import { Box } from '@mui/material';
import { leftSidebarWidth } from 'components/designer/LeftSidebar';
import { ReactNode } from 'react';

type RootProps = {
  children?: ReactNode;
};

export default function Root({ children }: RootProps) {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <Box
      ref={connect}
      sx={{
        marginLeft: `${leftSidebarWidth}px`,
        userSelect: 'none',
      }}
    >
      {children}
    </Box>
  );
}

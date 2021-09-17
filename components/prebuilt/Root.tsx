import { useNode } from '@craftjs/core';
import { Box } from '@mui/material';
import { ReactNode, useCallback } from 'react';

type RootProps = {
  children?: ReactNode;
};

export default function Root({ children }: RootProps) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Box
      ref={useCallback(
        (ref: HTMLElement) => connect(drag(ref)),
        [connect, drag]
      )}
    >
      {children}
    </Box>
  );
}

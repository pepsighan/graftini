import { useNode } from '@craftjs/core';
import { Box } from '@mui/material';
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
        bgcolor: 'white',
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
}

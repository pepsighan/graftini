import { Typography } from '@mui/material';
import { useNode } from '@craftjs/core';
import { useCallback } from 'react';

export default function Title() {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Typography
      ref={useCallback(
        (ref: HTMLElement) => connect(drag(ref)),
        [connect, drag]
      )}
      variant="h5"
    >
      Ullamco proident eiusmod do duis
    </Typography>
  );
}

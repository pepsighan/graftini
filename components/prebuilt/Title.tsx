import { Typography } from '@mui/material';
import { useNode } from '@craftjs/core';
import { useCallback } from 'react';
import Outline from 'components/designer/Outline';

export default function Title() {
  const {
    connectors: { connect, drag },
    focus,
  } = useNode(
    useCallback(
      (state) => ({ focus: state.events.hovered || state.events.selected }),
      []
    )
  );

  return (
    <Typography
      ref={useCallback(
        (ref: HTMLElement) => connect(drag(ref)),
        [connect, drag]
      )}
      variant="h5"
      sx={{ position: 'relative' }}
    >
      Ullamco proident eiusmod do duis
      {focus && <Outline />}
    </Typography>
  );
}

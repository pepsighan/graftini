import { Typography } from '@mui/material';
import { useNode } from '@craftjs/core';
import { useCallback } from 'react';
import Outline from 'components/designer/Outline';

export default function PostTitle() {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode(
    useCallback(
      (state) => ({
        hovered: state.events.hovered,
        selected: state.events.selected,
      }),
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
      {(selected || hovered) && (
        <Outline hovered={selected ? false : hovered} />
      )}
    </Typography>
  );
}

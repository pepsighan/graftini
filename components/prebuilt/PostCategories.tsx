import { useNode } from '@craftjs/core';
import { Chip, Stack } from '@mui/material';
import Outline from 'components/designer/Outline';
import { useCallback } from 'react';

export default function PostCategories() {
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
    <Stack
      ref={useCallback(
        (ref: HTMLElement) => connect(drag(ref)),
        [connect, drag]
      )}
      direction="row"
      sx={{ position: 'relative' }}
    >
      <Chip sx={{ mr: 2 }} label="Category 1" />
      <Chip sx={{ mr: 2 }} label="Category 2" />
      <Chip sx={{ mr: 2 }} label="Category 3" />
      <Chip sx={{ mr: 2 }} label="Category 4" />
      <Chip label="Category 5" />

      {(selected || hovered) && (
        <Outline hovered={selected ? false : hovered} />
      )}
    </Stack>
  );
}

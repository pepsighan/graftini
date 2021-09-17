import { useNode } from '@craftjs/core';
import { Chip, Stack } from '@mui/material';
import Outline from 'components/designer/Outline';
import { useCallback } from 'react';

export default function PostTags() {
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
      <Chip sx={{ mr: 2 }} label="Tag 1" />
      <Chip sx={{ mr: 2 }} label="Tag 2" />
      <Chip sx={{ mr: 2 }} label="Tag 3" />
      <Chip sx={{ mr: 2 }} label="Tag 4" />
      <Chip label="Tag 5" />

      {(selected || hovered) && (
        <Outline hovered={selected ? false : hovered} />
      )}
    </Stack>
  );
}

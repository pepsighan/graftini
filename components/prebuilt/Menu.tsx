import { Typography, Stack, Button } from '@mui/material';
import { useNode } from '@craftjs/core';
import { useCallback } from 'react';
import Outline from 'components/designer/Outline';

export default function Menu() {
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
      <Button sx={{ mr: 2 }}>Menu 1</Button>
      <Button sx={{ mr: 2 }}>Menu 2</Button>
      <Button sx={{ mr: 2 }}>Menu 3</Button>
      <Button sx={{ mr: 2 }}>Menu 4</Button>
      <Button>Menu 5</Button>

      {(selected || hovered) && (
        <Outline hovered={selected ? false : hovered} />
      )}
    </Stack>
  );
}

import { useNode } from '@craftjs/core';
import { Avatar, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Outline from 'components/designer/Outline';
import { useCallback } from 'react';

export default function PostAuthor() {
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
      <Avatar>U</Avatar>
      <Box sx={{ ml: 2 }}>
        <Typography>Ullamco Proident</Typography>
        <Typography color="textSecondary">
          Aliqua qui duis esse mollit cupidatat irure aute. Anim eiusmod
          proident voluptate non aliqua labore fugiat proident elit non.
        </Typography>
      </Box>
      {(selected || hovered) && (
        <Outline hovered={selected ? false : hovered} />
      )}
    </Stack>
  );
}

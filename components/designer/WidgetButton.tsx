import { useEditor } from '@craftjs/core';
import { Box, Button } from '@mui/material';
import Title from 'components/prebuilt/Title';
import { useCallback } from 'react';

export default function WidgetButton() {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Button
      ref={useCallback((ref) => create(ref, <Title />), [create])}
      sx={{ height: 150 }}
    >
      <Box sx={{ width: 100, height: 100, border: '1px solid' }} />
    </Button>
  );
}

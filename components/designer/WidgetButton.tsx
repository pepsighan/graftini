import { Button, Box } from '@mui/material';

export default function WidgetButton() {
  return (
    <Button sx={{ height: 150 }}>
      <Box sx={{ width: 100, height: 100, border: '1px solid' }} />
    </Button>
  );
}

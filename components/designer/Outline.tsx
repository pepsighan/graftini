import { Box } from '@mui/material';

export default function Outline() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '1px dashed',
        borderColor: 'primary.main',
      }}
    />
  );
}

import { Box } from '@mui/material';

type OutlineProps = {
  hovered: boolean;
};

export default function Outline({ hovered }: OutlineProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: hovered ? '1px dashed' : '1px solid',
        borderColor: hovered ? 'grey.600' : 'primary.main',
      }}
    />
  );
}

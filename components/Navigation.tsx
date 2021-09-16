import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Image from 'next/image';
import icon from 'assets/icon.png';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit">
          <Image src={icon} alt="Logo" width={24} height={24} />
        </IconButton>
        <Button color="secondary" variant="contained">
          Sign In with GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
}

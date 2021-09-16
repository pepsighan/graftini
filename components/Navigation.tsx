import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Image from 'next/image';
import icon from 'assets/icon.png';

export default function Navigation() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <Image src={icon} alt="Logo" width={32} height={32} />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

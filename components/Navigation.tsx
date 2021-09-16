import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import icon from 'assets/icon.png';
import Image from 'next/image';
import { login } from 'store/auth';

export default function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit">
          <Image src={icon} alt="Logo" width={24} height={24} />
        </IconButton>
        <Button color="secondary" variant="contained" onClick={login}>
          Sign In with GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
}

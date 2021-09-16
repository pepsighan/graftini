import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import icon from 'assets/icon.png';
import Image from 'next/image';
import { useCallback } from 'react';
import { login, LoginStatus, useAuth } from 'store/auth';
import ProfileButton from './ProfileButton';

export default function Navigation() {
  const loginStatus = useAuth(useCallback((state) => state.loginStatus, []));

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit">
          <Image src={icon} alt="Logo" width={24} height={24} />
        </IconButton>

        {loginStatus === LoginStatus.No && (
          <Button color="secondary" variant="contained" onClick={login}>
            Sign In with GitHub
          </Button>
        )}

        {loginStatus === LoginStatus.Yes && <ProfileButton />}
      </Toolbar>
    </AppBar>
  );
}

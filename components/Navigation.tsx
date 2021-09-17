import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import icon from 'assets/icon.png';
import Image from 'next/image';
import { useCallback } from 'react';
import { login, LoginStatus, useAuth } from 'store/auth';
import ProfileButton from './ProfileButton';
import Link from 'next/link';

export default function Navigation() {
  const loginStatus = useAuth(useCallback((state) => state.loginStatus, []));

  return (
    <AppBar
      position="sticky"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href="/" passHref>
          <IconButton component="a" edge="start" color="inherit">
            <Image src={icon} alt="Logo" width={24} height={24} />
          </IconButton>
        </Link>

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

import Home from 'components/Home';
import Projects from 'components/Projects';
import { useCallback } from 'react';
import { LoginStatus, useAuth } from 'store/auth';

export default function Index() {
  const loginStatus = useAuth(useCallback((state) => state.loginStatus, []));

  return (
    <>
      {loginStatus === LoginStatus.No && <Home />}
      {loginStatus === LoginStatus.Yes && <Projects />}
    </>
  );
}

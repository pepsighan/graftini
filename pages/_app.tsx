import { CssBaseline, ThemeProvider } from '@mui/material';
import { useInitializeAuth } from 'store/auth';
import theme from 'utils/theme';

export default function MyApp({ Component, pageProps }) {
  useInitializeAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

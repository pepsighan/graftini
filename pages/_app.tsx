import { CssBaseline, ThemeProvider, GlobalStyles } from '@mui/material';
import { useInitializeAuth } from 'store/auth';
import theme from 'utils/theme';

export default function MyApp({ Component, pageProps }) {
  useInitializeAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={`
          html {
            font-size: 14px;
          }
        `}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'utils/theme';

console.log(theme);

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

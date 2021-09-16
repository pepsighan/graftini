import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useInitializeAuth } from 'store/auth';
import theme from 'utils/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Do not automatically keep on refetching the same data.
      staleTime: Infinity,
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  useInitializeAuth();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

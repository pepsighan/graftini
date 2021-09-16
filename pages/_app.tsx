import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAuth, useInitializeAuth } from 'store/auth';
import theme from 'utils/theme';

export default function MyApp({ Component, pageProps }) {
  useInitializeAuth();

  const uid = useAuth(useCallback((state) => state.user?.uid, []));
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Do not automatically keep on refetching the same data.
            staleTime: Infinity,
          },
        },
      }),
    // When the user changes, reset the query cache in the client.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [uid]
  );

  return (
    <QueryClientProvider key={uid} client={queryClient}>
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

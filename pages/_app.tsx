import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { AuthGuard } from '../modules/AuthGuard';

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      </MantineProvider>
    </SessionProvider>
)}

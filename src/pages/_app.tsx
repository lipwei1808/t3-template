import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import '@/styles/globals.css';
import { api } from '@/utils/api';

import type { AppProps } from 'next/app';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session | null }>) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default api.withTRPC(MyApp);

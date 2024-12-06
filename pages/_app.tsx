import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Navbar from '../components/layout/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from '@/shared/ui/toast/Toaster';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <Toaster />
    </>
  );
}

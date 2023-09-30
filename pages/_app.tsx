import { catamaran } from '@/common/utils/fonts';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${catamaran.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

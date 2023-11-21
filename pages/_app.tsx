import { GlobalStyles } from '@styles/GlobalStyles';
import { NormalyzeStyles } from '@styles/Normalize';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NormalyzeStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

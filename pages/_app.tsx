import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Context from '../Context';

import { GlobalStyles } from '@styles/GlobalStyles';
import { NormalyzeStyles } from '@styles/Normalize';

//Types
import type { AppProps } from 'next/app';

export const client = new ApolloClient({
  uri: 'https://petgram-server-gerar-eg-delacruz.vercel.app/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider>
      <ApolloProvider client={client}>
        <NormalyzeStyles />
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </Context.Provider>
  );
}

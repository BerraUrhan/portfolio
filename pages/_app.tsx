import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add the basket */}
      <Head>
        <link rel="shortcut icon" href="/basket.png" />
        <link rel="icon" href="/basket.png" />
      </Head>
      {/* Add the basket */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}
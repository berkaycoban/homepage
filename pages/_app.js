import Head from 'next/head'

import 'styles/app.css'

import FontFace from '@comp/font-face'

import { Chakra } from 'chakra'
import { StoreProvider } from 'store'

export default function MyApp({ Component, pageProps, cookies }) {
  return (
    <Chakra cookies={cookies}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </Head>

      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>

      <FontFace />
    </Chakra>
  )
}

export { getServerSideProps } from 'chakra'

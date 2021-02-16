import React from 'react'
import Head from 'next/head'

import 'styles/app.css'

import { StoreProvider } from 'store'

import FontFace from '@comp/font-face'

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        {/* base */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </Head>

      <Component {...pageProps} />

      <FontFace />
    </StoreProvider>
  )
}

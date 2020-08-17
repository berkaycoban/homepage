import React from 'react'
import Head from 'next/head'

import '../styles/app.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Head>
        {/* base */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </Component>
  )
}

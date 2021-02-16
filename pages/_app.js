import Head from 'next/head'
import { Chakra } from 'chakra'
import { StoreProvider } from 'store'
import { Box } from '@chakra-ui/react'

import 'styles/app.css'

import Header from '@comp/header'
import Footer from '@comp/footer'
import FontFace from '@comp/font-face'

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
        <Header />
        <Box as={'main'}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </StoreProvider>

      <FontFace />
    </Chakra>
  )
}

export { getServerSideProps } from 'chakra'

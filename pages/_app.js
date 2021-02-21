import Head from 'next/head'
import { Chakra } from 'chakra'
import { StoreProvider } from 'store'
import { Box } from '@chakra-ui/react'

import 'styles/app.css'

import Header from '@comp/Header'
import Footer from '@comp/Footer'
import FontFace from '@comp/FontFace'

import SiteConfig from 'config'

export default function MyApp({ Component, pageProps, cookies }) {
  return (
    <Chakra cookies={cookies}>
      <Head>
        <title>{SiteConfig.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </Head>

      <StoreProvider>
        <Header />
        <Box as={'main'} py={'20'}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </StoreProvider>

      <FontFace />
    </Chakra>
  )
}

export { getServerSideProps } from 'chakra'

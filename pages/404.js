import React, { useContext } from 'react'
import Head from 'next/head'

import Layout from '@comp/layout'
import Error404 from '@comp/error'

import StoreContext from 'store'
import siteConfig from 'config'

function ErrorPage() {
  const { userLanguage } = useContext(StoreContext)
  const title = userLanguage == 'en' ? 'Page not found!' : 'Sayfa bulunamadı!'

  return (
    <Layout>
      <Head>
        <title>
          {title} - {siteConfig.shortTitle}
        </title>
      </Head>
      <Error404 />
    </Layout>
  )
}

export default ErrorPage

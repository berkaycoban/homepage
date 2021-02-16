import React, { useContext } from 'react'
import Head from 'next/head'

import Error404 from '@comp/error'

import StoreContext from 'store'
import siteConfig from 'config'

function ErrorPage() {
  const { userLanguage } = useContext(StoreContext)
  const title = userLanguage == 'en' ? 'Page not found!' : 'Sayfa bulunamadı!'

  return (
    <>
      <Head>
        <title>
          {title} - {siteConfig.shortTitle}
        </title>
      </Head>
      <Error404 />
    </>
  )
}

export default ErrorPage

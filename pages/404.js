import React from 'react'

import Layout from '../components/layout'
import Error404 from '../components/error'

import LanguageText from '../lib/language-text'

function ErrorPage() {
  return (
    <>
      <head>
        <title>
          <LanguageText tid={'pageNotFound'} />
        </title>
      </head>
      <Layout>
        <Error404 />
      </Layout>
    </>
  )
}

export default ErrorPage

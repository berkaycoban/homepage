import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'

import { getAllProjects } from '../lib/api'

function HomePage({ allProjects }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      {JSON.stringify(allProjects)}
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'title_en',
    'desc',
    'desc_en',
    'slug',
    'date',
    'imageSrc',
    'imageAlt'
  ])

  return {
    props: { allProjects }
  }
}

export default HomePage

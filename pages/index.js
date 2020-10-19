import React, { useContext } from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import HeaderTitle from '../components/header/title'
import About from '../components/about'
import Projects from '../components/projects'

import { getAllProjects } from '../lib/api'
import StoreContext from '../store'
import siteConfig from '../site.config'

function HomePage({ allProjects }) {
  const { userLanguage } = useContext(StoreContext)
  const title = userLanguage == 'en' ? 'Home Page' : 'Anasayfa'

  return (
    <Layout>
      <Head>
        <title>
          {title} - {siteConfig.shortTitle}
        </title>
      </Head>

      <HeaderTitle />

      <About />
      <Projects home allProjects={allProjects} />
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
    'imageAlt',
    'category'
  ])

  return {
    props: { allProjects }
  }
}

export default HomePage

import React, { useContext } from 'react'
import Head from 'next/head'

import HeaderTitle from '@comp/header/title'
import About from '@comp/about'
import Projects from '@comp/projects'

import { getAllProjects } from 'lib/api'
import StoreContext from 'store'
import siteConfig from 'config'

function HomePage({ allProjects }) {
  const { userLanguage } = useContext(StoreContext)
  const title = userLanguage == 'en' ? 'Home Page' : 'Anasayfa'

  return (
    <>
      <Head>
        <title>
          {title} - {siteConfig.shortTitle}
        </title>
      </Head>

      <HeaderTitle />

      <About />
      <Projects home allProjects={allProjects} />
    </>
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
    'category'
  ])

  return {
    props: { allProjects }
  }
}

export default HomePage

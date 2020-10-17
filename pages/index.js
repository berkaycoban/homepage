import React from 'react'

import Layout from '../components/layout'
import HeaderTitle from '../components/header/title'
import About from '../components/about'
import Projects from '../components/projects'

import { getAllProjects } from '../lib/api'

function HomePage({ allProjects }) {
  return (
    <Layout>
      <head>
        <title>Home Page</title>
      </head>

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
    'imageAlt'
  ])

  return {
    props: { allProjects }
  }
}

export default HomePage

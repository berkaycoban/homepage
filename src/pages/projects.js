import React, { useContext } from 'react'
import Head from 'next/head'

import groupBy from 'lodash.groupby'

import Layout from 'components/layout'
import Projects from 'components/projects'

import { getAllProjects } from 'lib/api'
import StoreContext from 'store'
import siteConfig from 'config'

function ProjectsPage({ allProjects }) {
  const { userLanguage } = useContext(StoreContext)
  const title = userLanguage == 'en' ? 'Projects' : 'Projeler'

  return (
    <Layout>
      <Head>
        <title>
          {title} - {siteConfig.shortTitle}
        </title>
      </Head>

      <Projects allProjects={allProjects} />
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
    'category'
  ])

  return {
    props: {
      allProjects: groupBy(allProjects, (project) =>
        new Date(project.date).getFullYear()
      )
    }
  }
}

export default ProjectsPage

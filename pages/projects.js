import React from 'react'
import Head from 'next/head'

import groupBy from 'lodash.groupby'

import Layout from '../components/layout'

import Projects from '../components/projects'

import { getAllProjects } from '../lib/api'

function ProjectsPage({ allProjects }) {
  return (
    <Layout>
      <Head>
        <title>Portfolio Page</title>
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
    'imageSrc',
    'imageAlt'
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

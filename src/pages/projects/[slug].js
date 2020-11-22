import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import Layout from 'components/layout'
import ProjectDetail from 'components/projects/detail'

import markdownToHtml from 'lib/markdownToHtml'
import { getAllProjects, getProjectBySlug } from 'lib/api'
import StoreContext from 'store'

import siteConfig from 'config'

function ProjectPage({ project }) {
  const { userLanguage } = useContext(StoreContext)
  const title = userLanguage == 'en' ? project.title_en : project.title

  const router = useRouter()

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage code={404} />
  }

  return (
    <Layout>
      <Head>
        <title>
          {title} - {siteConfig.shortTitle}
        </title>
      </Head>
      <ProjectDetail {...project} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'title_en',
    'desc',
    'desc_en',
    'content',
    'slug',
    'date',
    'imageSrc',
    'imageAlt',
    'category',
    'tools'
  ])

  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug
        }
      }
    }),
    fallback: false
  }
}

export default ProjectPage

import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import Layout from '../../components/layout'
import ProjectDetail from '../../components/projects/detail'

import markdownToHtml from '../../lib/markdownToHtml'
import { getAllProjects, getProjectBySlug } from '../../lib/api'

function ProjectPage({ project }) {
  const router = useRouter()

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage code={404} />
  }

  return (
    <Layout>
      <ProjectDetail {...project} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'excerpt',
    'attendees'
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

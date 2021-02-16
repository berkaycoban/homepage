import { useRouter } from 'next/router'

import ErrorPage from 'next/error'

import ProjectDetail from '@comp/projects/detail'

import markdownToHtml from 'lib/markdownToHtml'
import { getAllProjects, getProjectBySlug } from 'lib/api'

function ProjectPage({ project }) {
  const router = useRouter()

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage code={404} />
  }

  return (
    <>
      <ProjectDetail {...project} />
    </>
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

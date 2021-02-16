import groupBy from 'lodash.groupby'

import Projects from '@comp/projects'

import { getAllProjects } from 'lib/api'

function ProjectsPage({ allProjects }) {
  return (
    <>
      <Projects allProjects={allProjects} />
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
    props: {
      allProjects: groupBy(allProjects, (project) =>
        new Date(project.date).getFullYear()
      )
    }
  }
}

export default ProjectsPage

import styles from './style.module.css'

import Markdown from './markdown'

function ProjectDetail({ ...project }) {
  console.log(project)
  return <Markdown content={project.content} />
}

export default ProjectDetail

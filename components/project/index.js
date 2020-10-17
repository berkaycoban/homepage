import React from 'react'

import styles from './style.module.css'

import Markdown from './markdown'

function Project({ ...project }) {
  return (
    <div className={styles.project}>
      <Markdown content={project.content} />
    </div>
  )
}

export default Project

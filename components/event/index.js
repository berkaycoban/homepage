import React from 'react'

import styles from './style.module.css'

import Markdown from './markdown'

function Event({ ...event }) {
  return (
    <div className={styles.event}>
      <Markdown content={event.content} />
    </div>
  )
}

export default Event

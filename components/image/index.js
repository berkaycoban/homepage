import React from 'react'

import styles from './style.module.css'

function Image({ src, alt }) {
  return (
    <figure className={styles.container}>
      <img src={src} alt={alt} className={styles.item} />
    </figure>
  )
}

export default Image

import React from 'react'

import styles from './style.module.css'

function Image({ src, alt }) {
  return (
    <figure>
      <img src={src} alt={alt} className={styles.image} />
    </figure>
  )
}

export default Image

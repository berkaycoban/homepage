import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function PostTitle({ className, children }) {
  return (
    <header className={cn([styles.title, className])}>
      <h5>{children}</h5>
    </header>
  )
}

export default PostTitle

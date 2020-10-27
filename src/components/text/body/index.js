import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

export default function Body({ children, className }) {
  return <p className={cn([styles.body, className])}>{children}</p>
}

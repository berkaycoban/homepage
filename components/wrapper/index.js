import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Wrapper({ className, children }) {
  return <div className={cn([styles.wrapper, className])}>{children}</div>
}

export default Wrapper

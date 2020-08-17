import React from 'react'

import styles from './style.module.css'

function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>
}

export default Layout

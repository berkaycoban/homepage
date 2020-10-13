import React from 'react'

import styles from './style.module.css'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
    </div>
  )
}

export default Layout

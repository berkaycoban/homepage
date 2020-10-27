import React from 'react'

import styles from './style.module.css'

import Wrapper from '../wrapper'
import Navigation from '../navigation'
import Logo from '../logo'

function Header() {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.content}>
          <Logo />
          <Navigation />
        </div>
      </Wrapper>
    </header>
  )
}

export default React.memo(Header)

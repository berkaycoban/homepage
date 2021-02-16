import React from 'react'
import styles from './style.module.css'

import Wrapper from 'components/wrapper'
import Navigation from 'components/navigation'
import Logo from 'components/logo'

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

import React, { useState } from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import Menu from './menu'
import Button from '../button'

import { SIZE } from '../../constants'
import useWindowSize from '../../hooks/useWindowSize'

function Navigation() {
  const size = useWindowSize()
  const isDesktop = size.width >= SIZE.MOBILE_SIZE

  const [showMenu, setShowMenu] = useState(null)

  const fixedMobileMenu = showMenu ? styles.fixedMobileMenu : ''

  return (
    <>
      {isDesktop ? (
        <Menu className={styles.navigation} />
      ) : (
        <>
          <Button
            onClick={() => {
              setShowMenu(!showMenu)
            }}
            className={cn([styles.mobileMenuWrapper, fixedMobileMenu])}
            key="mobile-menu-button"
            aria-label="mobile-menu-button"
          >
            <div
              className={cn([styles.hamburgerMenu, showMenu && styles.open])}
            ></div>
          </Button>

          {showMenu && <Menu className={styles.mobileNavigation} />}
        </>
      )}
    </>
  )
}

export default Navigation

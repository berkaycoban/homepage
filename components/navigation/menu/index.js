import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import styles from './style.module.css'

import Button from '../../button'

import { PAGES } from '../../../constants'

import { languageOptions } from '../../../languages'

import StoreContext from '../../../store'

function Menu({ className }) {
  const router = useRouter()
  const store = useContext(StoreContext)

  return (
    <nav className={className}>
      {Object.keys(PAGES).map((key) => {
        const PAGE = PAGES[key]
        const ACTIVE =
          router && router.asPath === PAGE.path ? styles.active : ''
        const NAME =
          store.userLanguage === languageOptions.en ? PAGE.name : PAGE.name_tr

        return (
          <Button
            href={PAGE.path}
            key={`link-${key}`}
            target={PAGE.target}
            className={ACTIVE}
          >
            {NAME}
          </Button>
        )
      })}
    </nav>
  )
}

export default Menu

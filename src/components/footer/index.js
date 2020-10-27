import React, { useContext } from 'react'

import styles from './style.module.css'

import Wrapper from '../wrapper'
import Button from '../button'
import Logo from '../logo'

import { SOCIAL } from '../../constants'

import { languageOptions } from '../../languages'

import StoreContext from '../../store'

function Footer() {
  const store = useContext(StoreContext)

  const changeLanguage = () => {
    store.userLanguageChange(
      store.userLanguage === languageOptions.en
        ? languageOptions.tr
        : languageOptions.en
    )
  }

  const languageButtonText =
    store.userLanguage === languageOptions.en ? 'TR' : 'EN'

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.grid}>
          <Logo className={styles.footerLogo} />

          <div className={styles.links}>
            <>
              {Object.keys(SOCIAL).map((key) => {
                const ITEM = SOCIAL[key]

                return (
                  <Button
                    href={ITEM.url}
                    key={`social-link-${ITEM.url}`}
                    target={ITEM.target}
                    key={`social-link-${ITEM.url}`}
                  >
                    {ITEM.name}
                  </Button>
                )
              })}

              <Button
                onClick={changeLanguage}
                className={styles.changeLanguageButton}
              >
                {languageButtonText}
              </Button>
            </>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default React.memo(Footer)

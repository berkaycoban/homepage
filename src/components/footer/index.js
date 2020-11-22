import React, { useContext } from 'react'

import styles from './style.module.css'

import Wrapper from 'components/wrapper'
import Button from 'components/button'
import Logo from 'components/logo'

import { languageOptions } from 'languages'
import StoreContext from 'store'
import siteConfig from 'config'

import { SOCIAL } from '../../constants'

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
                  >
                    {ITEM.name}
                  </Button>
                )
              })}

              <Button href={`mailto:${siteConfig.author.email}`} key={'email'}>
                Email
              </Button>

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

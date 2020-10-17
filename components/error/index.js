import React from 'react'

import styles from './style.module.css'

import Wrapper from '../wrapper'
import SectionTitle from '../text/section-title'
import Title from '../text/title'
import Button from '../button'

import LanguageText from '../../lib/language-text'

import siteConfig from '../../site.config'

function Error404() {
  return (
    <section className={styles.error}>
      <Wrapper>
        <Title className={styles.head}>
          <LanguageText tid={'areYouLost'} />
        </Title>

        <h2>
          <LanguageText tid={'pageNotExists'} />
        </h2>

        <h3 className={styles.title}>
          <LanguageText tid={'helpfulLinks'} />
        </h3>

        <ul className={styles.links}>
          <li>
            <Button href="/" key="home">
              <LanguageText tid={'homePageTitle'} />
            </Button>
          </li>
          <li>
            <Button
              href={siteConfig.author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              key="twitter"
            >
              Twitter
            </Button>
          </li>
        </ul>

        <SectionTitle className={styles.errorCode}>
          <LanguageText tid={'errorCode'} />: 404
        </SectionTitle>
      </Wrapper>
    </section>
  )
}

export default Error404

import React from 'react'

import styles from './style.module.css'

import Wrapper from '../wrapper'
import Title from '../text/title'

import siteConfig from '../../site.config'

import LanguageText from '../../lib/language-text'

function HeaderTitle() {
  const title = siteConfig.title.split(' ')[0]

  return (
    <div className={styles.title}>
      <Wrapper>
        <Title>
          <LanguageText tid={'welcomeTitle'} /> <span>{title}</span>
        </Title>
        <h2 className={styles.job}>
          <LanguageText tid={'job'} />
        </h2>
      </Wrapper>
    </div>
  )
}

export default HeaderTitle

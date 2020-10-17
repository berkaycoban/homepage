import React from 'react'

import styles from './style.module.css'

import Wrapper from '../wrapper'
import Body from '../text/body'

import LanguageText from '../../lib/language-text'

function About() {
  return (
    <section className={styles.about}>
      <Wrapper>
        <Body>
          <LanguageText tid={'about'} />
        </Body>
      </Wrapper>
    </section>
  )
}

export default About
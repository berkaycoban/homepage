import React from 'react'

import styles from './style.module.css'

import Wrapper from '../wrapper'
import Body from '../text/body'

import LanguageText from '../../lib/language-text'
import MySkills from './skills'

function About() {
  return (
    <section className={styles.about}>
      <Wrapper>
        <MySkills />
      </Wrapper>
    </section>
  )
}

export default About

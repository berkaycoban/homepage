import styles from './style.module.css'

import Wrapper from 'components/wrapper'

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

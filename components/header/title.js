import styles from './style.module.css'

import Wrapper from 'components/wrapper'
import Title from 'components/text/title'

import LanguageText from 'lib/language-text'

function HeaderTitle() {
  return (
    <div className={styles.title}>
      <Wrapper>
        <Title>
          <LanguageText tid={'welcomeTitle'} /> <span>Berkay</span>
        </Title>
        <h2 className={styles.job}>
          <LanguageText tid={'job'} />
        </h2>
      </Wrapper>
    </div>
  )
}

export default HeaderTitle

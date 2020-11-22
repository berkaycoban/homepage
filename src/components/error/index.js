import styles from './style.module.css'

import Wrapper from 'components/wrapper'
import SectionTitle from 'components/text/section-title'
import Title from 'components/text/title'
import Button from 'components/button'

import LanguageText from 'lib/language-text'

import siteConfig from 'config'

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
              <LanguageText tid={'homePage'} />
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

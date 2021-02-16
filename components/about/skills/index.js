import styles from './style.module.css'

import TextBody from 'components/text/body'
import SectionTitle from 'components/text/section-title'

import LanguageText from 'lib/language-text'

import { SKILLS } from '../../../constants'

function MySkills() {
  return (
    <>
      <SectionTitle center subTitle={<LanguageText tid={'mySkillsSubtitle'} />}>
        <LanguageText tid={'mySkills'} />
      </SectionTitle>
      <div className={styles.skills}>
        {Object.keys(SKILLS).map((key) => {
          const ITEM = SKILLS[key]

          return (
            <div className={styles.item} key={`skills-${key}`}>
              <span>{ITEM.icon}</span>
              {ITEM.items.map((name) => {
                return <TextBody key={`skills-${key}-${name}`}>{name}</TextBody>
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MySkills

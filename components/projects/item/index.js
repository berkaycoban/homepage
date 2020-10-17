import React, { useContext } from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { tr } from 'date-fns/locale'

import styles from './style.module.css'

import TextBody from '../../text/body'
import Image from '../../image'
import Button from '../../button'

import StoreContext from '../../../store'
import LanguageText from '../../../lib/language-text'

import { languageOptions } from '../../../languages'

// TODO: Proje turune gore border-top rengi degisecek
function ProjectItem({
  title = 'Project Name',
  description = 'Lorem ipsum dolor sit amet.',
  datetime = new Date('2020', '08', '10'),
  imageSrc,
  imageAlt,
  slug
}) {
  const store = useContext(StoreContext)

  // Datetime i18n
  const locale = store.userLanguage === languageOptions.tr
  const dateTime = formatDistanceToNowStrict(
    datetime,
    locale && {
      locale: tr
    }
  )

  return (
    <div className={styles.project}>
      <Button href={`project/${slug}`}>
        {imageSrc && (
          <div className={styles.image}>
            <Image src={imageSrc} alt={imageAlt} />
          </div>
        )}

        <h5 className={styles.name}>{title}</h5>

        <TextBody className={styles.description}>{description}</TextBody>

        <time className={styles.datetime}>
          {dateTime} <LanguageText tid={'ago'} />
        </time>
      </Button>
    </div>
  )
}

export default ProjectItem

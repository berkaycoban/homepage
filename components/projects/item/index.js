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
import PostTitle from '../../text/post-title'

import getBorderColor from '../../../hooks/getProjectBorderColor'

function ProjectItem({
  TITLE = 'Project Name',
  DESCRIPTION = 'Lorem ipsum dolor sit amet.',
  DATETIME = new Date('2020', '08', '10'),
  ...project
}) {
  const store = useContext(StoreContext)

  // project border top color
  const borderColor = getBorderColor(project.category)

  // Datetime i18n
  const locale = store.userLanguage === languageOptions.tr
  const dateTime = formatDistanceToNowStrict(
    DATETIME,
    locale && {
      locale: tr
    }
  )

  return (
    <article
      className={styles.project}
      style={{ '--border-color': borderColor }}
    >
      <Button href={`projects/${project.slug}`}>
        {project.imageSrc && (
          <div className={styles.image}>
            <Image src={project.imageSrc} alt={project.imageAlt} />
          </div>
        )}

        <PostTitle className={styles.name}>{TITLE}</PostTitle>

        <TextBody className={styles.description}>{DESCRIPTION}</TextBody>

        <time className={styles.datetime}>
          {dateTime} <LanguageText tid={'ago'} />
        </time>
      </Button>
    </article>
  )
}

export default ProjectItem

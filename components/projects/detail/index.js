import { useContext } from 'react'
import styles from './style.module.css'

import Markdown from './markdown'
import Wrapper from '../../wrapper'
import Image from '../../image'
import SectionTitle from '../../text/section-title'

import StoreContext from '../../../store'

function ProjectDetail({ ...project }) {
  const { userLanguage } = useContext(StoreContext)

  const TITLE = userLanguage == 'tr' ? project.title : project.title_en
  return (
    <section>
      <Wrapper className={styles.detail}>
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          className={styles.image}
        />
        <SectionTitle className={styles.title}>{TITLE}</SectionTitle>

        <div className={styles.content}>
          {userLanguage == 'tr' && (
            <Markdown className={styles.content} content={project.content} />
          )}

          <div className={styles.tools}>
            {Object.keys(project.tools).map((item) => {
              return <span>{item}</span>
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProjectDetail

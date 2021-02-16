import { useContext } from 'react'
import Image from 'next/image'

import styles from './style.module.css'

import Markdown from './markdown'
import Wrapper from 'components/wrapper'
import SectionTitle from 'components/text/section-title'

import StoreContext from 'store'

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
          layout="responsive"
          width={700}
          height={475}
        />
        <SectionTitle className={styles.title}>{TITLE}</SectionTitle>

        <div className={styles.content}>
          {userLanguage == 'tr' && (
            <Markdown className={styles.content} content={project.content} />
          )}

          <div className={styles.tools}>
            {Object.keys(project.tools).map((item) => {
              return <span key={item}>{item}</span>
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ProjectDetail

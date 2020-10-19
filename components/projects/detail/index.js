import styles from './style.module.css'

import Markdown from './markdown'
import Wrapper from '../../wrapper'
import Image from '../../image'
import SectionTitle from '../../text/section-title'

function ProjectDetail({ ...project }) {
  return (
    <section>
      <Wrapper className={styles.detail}>
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          className={styles.image}
        />
        <SectionTitle className={styles.title}>{project.title}</SectionTitle>
        <Markdown content={project.content} className={styles.content} />

        {/* TODO: Kullanilan araclar gelecek */}

        {/* {Object.keys(project.tools).map((key) => {
          const ITEM = project.tools[key]

          return ITEM
        })} */}
      </Wrapper>
    </section>
  )
}

export default ProjectDetail

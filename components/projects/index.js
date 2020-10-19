import React, { useContext } from 'react'

import styles from './style.module.css'

import Wrapper from '../wrapper'
import SectionTitle from '../text/section-title'
import ProjectItem from './item'

import StoreContext from '../../store'
import LanguageText from '../../lib/language-text'

function Projects({ home, allProjects }) {
  const { userLanguage } = useContext(StoreContext)

  return (
    <section className={styles.projects}>
      <Wrapper>
        {home ? (
          <>
            <SectionTitle
              subTitle={<LanguageText tid={'projectsSubtitle'} />}
              center
            >
              <LanguageText tid={'projectsTitle'} />
            </SectionTitle>
            <div className={styles.content}>
              {allProjects.map((project) => {
                const title =
                  userLanguage === 'tr' ? project.title : project.title_en
                const desc =
                  userLanguage === 'tr' ? project.desc : project.desc_en
                const dateTime = new Date(project.date)

                return (
                  <ProjectItem
                    {...project}
                    title={title}
                    description={desc}
                    datetime={dateTime}
                    key={`project-${project.slug}`}
                  />
                )
              })}
            </div>
          </>
        ) : (
          <>
            {Object.keys(allProjects)
              .sort(() => -1)
              .map((year) => {
                return (
                  <div key={`title-${year}`}>
                    <SectionTitle>{year}</SectionTitle>

                    <div className={styles.content}>
                      {allProjects[year].map((project) => {
                        const title =
                          userLanguage === 'tr'
                            ? project.title
                            : project.title_en
                        const desc =
                          userLanguage === 'tr' ? project.desc : project.desc_en
                        const dateTime = new Date(project.date)

                        return (
                          <ProjectItem
                            {...project}
                            title={title}
                            description={desc}
                            datetime={dateTime}
                            key={`project-${project.slug}`}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
          </>
        )}
      </Wrapper>
    </section>
  )
}

export default Projects

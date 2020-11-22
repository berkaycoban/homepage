import { useContext } from 'react'

import styles from './style.module.css'

import Wrapper from 'components/wrapper'
import SectionTitle from 'components/text/section-title'
import ProjectItem from './item'

import StoreContext from 'store'
import LanguageText from 'lib/language-text'

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
                const TITLE =
                  userLanguage === 'tr' ? project.title : project.title_en
                const DESC =
                  userLanguage === 'tr' ? project.desc : project.desc_en
                const DATETIME = new Date(project.date)

                return (
                  <ProjectItem
                    {...project}
                    TITLE={TITLE}
                    DESCRIPTION={DESC}
                    DATETIME={DATETIME}
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
                        const TITLE =
                          userLanguage === 'tr'
                            ? project.title
                            : project.title_en
                        const DESC =
                          userLanguage === 'tr' ? project.desc : project.desc_en
                        const DATETIME = new Date(project.date)

                        return (
                          <ProjectItem
                            {...project}
                            TITLE={TITLE}
                            DESCRIPTION={DESC}
                            DATETIME={DATETIME}
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

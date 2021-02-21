import { useContext } from 'react'

import { Box, Container, Grid } from '@chakra-ui/react'

import SectionTitle from 'components/text/section-title'
import ProjectItem from './item'

import StoreContext from 'store'

function Projects({ allProjects }) {
  const { userLanguage } = useContext(StoreContext)

  return (
    <Box as={'section'}>
      <Container maxW={'3xl'}>
        <>
          {Object.keys(allProjects)
            .sort(() => -1)
            .map((year) => {
              return (
                <Box key={`title-${year}`}>
                  <SectionTitle>{year}</SectionTitle>

                  <Grid gap={8} mt={12}>
                    {allProjects[year].map((project) => {
                      const TITLE =
                        userLanguage === 'tr' ? project.title : project.title_en
                      const DESC =
                        userLanguage === 'tr' ? project.desc : project.desc_en
                      const DATETIME = new Date(project.date)

                      return (
                        <ProjectItem
                          {...project}
                          title={TITLE}
                          description={DESC}
                          datetime={DATETIME}
                          key={`project-${project.slug}`}
                        />
                      )
                    })}
                  </Grid>
                </Box>
              )
            })}
        </>
      </Container>
    </Box>
  )
}

export default Projects

import { useContext } from 'react'
import groupBy from 'lodash.groupby'

import { Box, Container, Grid, Heading, GridItem } from '@chakra-ui/react'

import ProjectItem from '@comp/ProjectItem'

import StoreContext from 'store'

import { getAllProjects } from 'lib/api'

function ProjectsPage({ allProjects }) {
  const { userLanguage } = useContext(StoreContext)

  return (
    <Box as={'section'} mt={-8}>
      <Container maxW={'3xl'}>
        <Grid gap={20}>
          {Object.keys(allProjects)
            .sort(() => -1)
            .map((year) => {
              return (
                <GridItem key={`title-${year}`}>
                  <Heading as={'h3'} fontWeight={'400'} size={'lg'}>
                    {year}
                  </Heading>

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
                </GridItem>
              )
            })}
        </Grid>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'title_en',
    'desc',
    'desc_en',
    'slug',
    'date',
    'category'
  ])

  return {
    props: {
      allProjects: groupBy(allProjects, (project) =>
        new Date(project.date).getFullYear()
      )
    }
  }
}

export default ProjectsPage

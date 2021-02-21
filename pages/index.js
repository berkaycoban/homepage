import { useContext } from 'react'
import {
  Stack,
  Heading,
  Container,
  Box,
  VStack,
  Grid,
  useColorModeValue
} from '@chakra-ui/react'

import Skill from '@comp/Skill'
import ProjectItem from '@comp/projects/item'
import Social from '@comp/Social'

import { getAllProjects } from 'lib/api'
import LanguageText from 'lib/language-text'
import StoreContext from 'store'

function HomePage({ projects }) {
  const { userLanguage } = useContext(StoreContext)

  const subTitleColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  return (
    <>
      {/* about title */}
      <Container as={'section'} maxW={'4xl'} pb={20} centerContent>
        <Stack spacing={'40px'} textAlign={'center'}>
          <Heading fontWeight={'700'} size={'3xl'}>
            <LanguageText tid={'welcomeTitle'} />{' '}
            <Box as={'span'} color={'primary'}>
              Berkay
            </Box>
          </Heading>

          <Heading as={'h3'} fontWeight={'400'} size={'xl'}>
            <LanguageText tid={'job'} />
          </Heading>
        </Stack>

        <Box mt={12}>
          <Social />
        </Box>
      </Container>

      <Skill />

      {/* projects */}
      <Container as={'section'} maxW={'3xl'} py={20}>
        <VStack spacing={'12px'}>
          <Heading as={'h3'} fontWeight={'400'} size={'xl'}>
            <LanguageText tid={'projectsTitle'} />
          </Heading>
          <Heading
            as={'h5'}
            fontWeight={'400'}
            size={'md'}
            color={subTitleColor}
          >
            <LanguageText tid={'projectsSubtitle'} />
          </Heading>
        </VStack>

        <Grid gap={8} mt={12}>
          {projects.map((item) => {
            const TITLE = userLanguage === 'tr' ? item.title : item.title_en
            const DESC = userLanguage === 'tr' ? item.desc : item.desc_en
            const DATETIME = new Date(item.date)

            return (
              <ProjectItem
                {...item}
                title={TITLE}
                desc={DESC}
                datetime={DATETIME}
                key={`project-${item.slug}`}
              />
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects([
    'title',
    'title_en',
    'desc',
    'desc_en',
    'slug',
    'date',
    'category'
  ])

  return {
    props: { projects }
  }
}

export default HomePage

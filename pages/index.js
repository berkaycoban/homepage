import { Stack, Heading, Container, Box } from '@chakra-ui/react'

import Skill from '@comp/skill'
import Projects from '@comp/projects'
import Social from '@comp/social'

import { getAllProjects } from 'lib/api'
import LanguageText from 'lib/language-text'

function HomePage({ allProjects }) {
  return (
    <>
      {/* about title */}
      <Container maxW={'4xl'} pb={24} centerContent>
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

      <Projects home allProjects={allProjects} />
    </>
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
    props: { allProjects }
  }
}

export default HomePage

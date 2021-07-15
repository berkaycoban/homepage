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

// import Skill from '@comp/Skill'
import ProjectItem from '@comp/ProjectItem'
import Social from '@comp/Social'

import { getAllProjects } from 'lib/api'
import LanguageText from 'lib/language-text'
import StoreContext from 'store'

function HomePage({ projects }) {
  const { userLanguage } = useContext(StoreContext)

  const subTitleColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const projectsBgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  return (
    <>
      {/* about title */}
      <Container as={'section'} maxW={'4xl'} pb={20} centerContent>
        <Stack spacing={16} textAlign={'center'}>
          <Heading fontWeight={'700'} size={'3xl'}>
            <LanguageText tid={'welcomeTitle'} />{' '}
            <Box as={'span'} color={'primary'}>
              Berkay
            </Box>
          </Heading>

          <VStack>
            <Heading as={'h3'} fontWeight={'300'} size={'md'}>
              <LanguageText tid={'aboutMe'} />
            </Heading>
            <Heading as={'h3'} fontWeight={'300'} size={'md'}>
              <LanguageText tid={'also'} />
            </Heading>
          </VStack>
          <Heading as={'h3'} fontWeight={'300'} size={'md'}>
            <LanguageText tid={'contactMe'} />
          </Heading>
        </Stack>

        <Social mt={12} language={userLanguage} />
      </Container>

      {/* 
        Until skills updated.
        <Skill />
      */}

      {/* projects */}
      <Box as={'section'} bg={projectsBgColor} py={20}>
        <Container maxW={'3xl'}>
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
      </Box>
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

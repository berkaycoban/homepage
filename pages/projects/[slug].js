import { useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ErrorPage from 'next/error'
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Grid,
  useColorModeValue
} from '@chakra-ui/react'

import StoreContext from 'store'

import markdownToHtml from 'lib/markdownToHtml'
import { getAllProjects, getProjectBySlug } from 'lib/api'

function ProjectPage({ project }) {
  const router = useRouter()

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage code={404} />
  }

  const { userLanguage } = useContext(StoreContext)
  const TITLE = userLanguage == 'tr' ? project.title : project.title_en

  const color = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  return (
    <Box as="section" mt={-20}>
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        layout="responsive"
        width={2000}
        height={1000}
      />
      <Container maxW={'3xl'}>
        <Grid gap={12} py={20} textAlign={'center'} justifyContent={'center'}>
          <VStack spacing={'12px'}>
            <Heading as={'h3'} fontWeight={'400'} size={'xl'}>
              {TITLE}
            </Heading>
          </VStack>

          <Text>
            {userLanguage == 'tr' && (
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            )}
          </Text>

          <Box color={color}>
            {Object.keys(project.tools).map((item) => {
              return (
                <Box as={'span'} key={item} px={2}>
                  {item}
                </Box>
              )
            })}
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'title_en',
    'desc',
    'desc_en',
    'content',
    'slug',
    'date',
    'imageSrc',
    'imageAlt',
    'category',
    'tools'
  ])

  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug
        }
      }
    }),
    fallback: false
  }
}

export default ProjectPage

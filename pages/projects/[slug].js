import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ErrorPage from 'next/error'
import {
  Box,
  Container,
  VStack,
  Heading,
  Grid,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'

import StoreContext from 'store'

import markdownToHtml from 'lib/markdownToHtml'
import { getAllProjects, getProjectBySlug } from 'lib/api'
import LanguageText from 'lib/language-text'

function ProjectPage({ project }) {
  const router = useRouter()

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage code={404} />
  }

  const { userLanguage } = useContext(StoreContext)
  const TITLE = userLanguage == 'tr' ? project.title : project.title_en

  const color = useColorModeValue('blackAlpha.600', 'gray.600')

  const paddingTop = project.imageSrc ? 20 : 0

  // TODO: Refactor

  return (
    <Box as="section" mt={-20}>
      {project.imageSrc && (
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          layout="responsive"
          width={1200}
          height={500}
        />
      )}

      <Container maxW={'3xl'} pt={paddingTop}>
        <Grid gap={12} pb={20} textAlign={'center'} justifyContent={'center'}>
          <VStack spacing={'12px'}>
            <Heading as={'h3'} fontWeight={'400'} size={'xl'}>
              {TITLE}
            </Heading>
          </VStack>

          {userLanguage == 'tr' && (
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          )}

          <VStack color={color} spacing={4}>
            <Heading as={'h4'} size={'md'} fontWeight={'300'}>
              <LanguageText tid={'usedLibraries'} />
            </Heading>
            <List display={'flex'} gridGap={4}>
              {React.Children.toArray(
                Object.keys(project.tools).map((item) => {
                  return <ListItem>{item}</ListItem>
                })
              )}
            </List>
          </VStack>
        </Grid>
      </Container>

      {project.detailImageSrc && (
        <Image
          src={project.detailImageSrc}
          alt={project.detailImageAlt}
          layout="responsive"
          width={2867}
          height={5044}
        />
      )}
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
    'detailImageSrc',
    'detailImageAlt',
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

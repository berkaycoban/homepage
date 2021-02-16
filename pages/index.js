import React, { useContext } from 'react'
import Head from 'next/head'
import { Stack, Heading, Container, Box } from '@chakra-ui/react'

import About from '@comp/about'
import Projects from '@comp/projects'

import { getAllProjects } from 'lib/api'
import LanguageText from 'lib/language-text'
import StoreContext from 'store'
import siteConfig from 'config'

function HomePage({ allProjects }) {
  const { userLanguage } = useContext(StoreContext)
  const title = userLanguage == 'en' ? 'Home Page' : 'Anasayfa'

  return (
    <>
      <Head>
        <title>
          {title} - {siteConfig.shortTitle}
        </title>
      </Head>

      <Container maxW={'4xl'} p={24}>
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
      </Container>

      <About />
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

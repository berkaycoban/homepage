import { useContext } from 'react'
import { Stack, Heading, Container, Box, VStack } from '@chakra-ui/react'

// import Skill from '@comp/Skill'
import Social from '@comp/Social'

import LanguageText from 'lib/language-text'
import StoreContext from 'store'

function HomePage() {
  const { userLanguage } = useContext(StoreContext)

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
    </>
  )
}

export default HomePage

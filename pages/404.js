import { useContext } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Grid,
  Text,
  Link,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'

import Social from '@comp/social'

import LanguageText from 'lib/language-text'
import StoreContext from 'store'

import { MENU } from '../constants'

function MenuLink({ url, title, title_tr, isExternal }) {
  const store = useContext(StoreContext)
  const language = store.userLanguage

  const linkColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const linkHoverColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  return (
    <NextLink href={url} passHref>
      <Text
        as={Link}
        decoration="none"
        color={linkColor}
        _hover={{ color: linkHoverColor }}
        isExternal={isExternal}
      >
        {language === 'en' ? title : title_tr}
      </Text>
    </NextLink>
  )
}

function ErrorPage() {
  return (
    <Box py={4}>
      <Container maxW={'3xl'}>
        <Grid gap={8}>
          <Heading color={'primary'} size={'2xl'}>
            <LanguageText tid={'areYouLost'} />
          </Heading>

          <Heading as={'h3'} size={'xl'} fontWeight={'300'}>
            <LanguageText tid={'pageNotExists'} /> <br />
            <LanguageText tid={'helpfulLinks'} />
          </Heading>

          <HStack spacing={'24px'} fontSize={'xl'} mt={4}>
            {MENU.map((item) => (
              <MenuLink key={item.url} {...item} />
            ))}
          </HStack>

          <Social />

          <Heading as={'h4'} size={'lg'} mt={4}>
            <LanguageText tid={'errorCode'} />: 404
          </Heading>
        </Grid>
      </Container>
    </Box>
  )
}

export default ErrorPage

import { useContext } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Container,
  HStack,
  Box,
  Grid,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import ChangeColorMode from '@comp/ColorMode'
import ChangeLanguage from '@comp/Language'

import { MENU } from '../constants'

import StoreContext from 'store'

function MenuLink({ url, title, title_tr, isExternal }) {
  const store = useContext(StoreContext)
  const language = store.userLanguage

  const router = useRouter()
  const activePage = url === router.pathname

  const linkColor = useColorModeValue(
    activePage ? 'blackAlpha.600' : 'blackAlpha.800',
    activePage ? 'whiteAlpha.600' : 'whiteAlpha.800'
  )
  const linkHoverColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

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

function Header() {
  const bgColor = useColorModeValue('white', 'black')

  return (
    <Box
      as={'header'}
      py={8}
      my={4}
      bg={bgColor}
      position={'sticky'}
      top={0}
      zIndex={'10'}
    >
      <Container maxW={'3xl'}>
        <Grid
          as={'nav'}
          templateColumns={'auto auto'}
          justifyContent={'space-between'}
        >
          <HStack spacing={'24px'}>
            {MENU.map((item) => (
              <MenuLink key={item.url} {...item} />
            ))}
          </HStack>

          <HStack spacing={'16px'}>
            <ChangeColorMode key={'change-color-mode'} />
            <ChangeLanguage key={'change-language'} />
          </HStack>
        </Grid>
      </Container>
    </Box>
  )
}

export default Header

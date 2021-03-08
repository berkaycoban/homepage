import { useContext } from 'react'
import { Container, Box, Link, Text, useColorModeValue } from '@chakra-ui/react'

import StoreContext from 'store'

function Footer() {
  const bgColor = useColorModeValue('white', 'black')
  const textColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const linkHoverColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  const store = useContext(StoreContext)
  const language = store.userLanguage

  return (
    <Box as={'footer'} bg={bgColor} py={8} my={4}>
      <Container maxW={'3xl'} centerContent>
        <Text color={textColor} textAlign={'center'}>
          {language == 'tr' ? (
            <>
              Bu web sitesinin kaynak kodlarına{' '}
              <Text
                as={Link}
                href="https://github.com/berkaycoban/homepage"
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Github üzerinden
              </Text>{' '}
              ulaşabilirsiniz ❤️
            </>
          ) : (
            <>
              You can access the source code of this website on{' '}
              <Text
                as={Link}
                href="https://github.com/berkaycoban/homepage"
                _hover={{ color: linkHoverColor }}
                isExternal
              >
                Github
              </Text>{' '}
              ❤️
            </>
          )}
        </Text>
      </Container>
    </Box>
  )
}

export default Footer

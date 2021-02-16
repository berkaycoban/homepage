import NextLink from 'next/link'
import {
  Container,
  HStack,
  Box,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { SOCIAL } from '../constants'

function MenuLink({ url, name }) {
  const linkColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')
  const linkHoverColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <NextLink href={url} passHref>
      <Text
        as={Link}
        decoration="none"
        color={linkColor}
        _hover={{ color: linkHoverColor }}
        isExternal
      >
        {name}
      </Text>
    </NextLink>
  )
}

function Footer() {
  const bgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  return (
    <Box as={'footer'} bg={bgColor} p={8}>
      <Container maxW={'3xl'} centerContent>
        <HStack spacing={'24px'}>
          {SOCIAL.map((item) => {
            return <MenuLink key={item.name} {...item} />
          })}
        </HStack>
      </Container>
    </Box>
  )
}

export default Footer

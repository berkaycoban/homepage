import { useContext } from 'react'
import { parseISO, formatDistanceToNowStrict } from 'date-fns'
import { Box, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

import { tr } from 'date-fns/locale'

import StoreContext from 'store'
import LanguageText from 'lib/language-text'

function BookmarkCard(item) {
  const store = useContext(StoreContext)

  // Datetime i18n
  const locale = store.userLanguage === 'tr'
  const dateTime = formatDistanceToNowStrict(
    parseISO(item.created),
    locale && {
      locale: tr
    }
  )

  const linkColor = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')
  const linkHoverColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')

  return (
    <Box
      _hover={{
        boxShadow: 'md'
      }}
      transitionDuration={'300ms'}
      cursor={'pointer'}
      key={item._id}
    >
      <Heading as={'h4'} size={'md'}>
        <NextLink href={item.link} passHref>
          <Text
            as={Link}
            decoration="none"
            color={linkColor}
            _hover={{ color: linkHoverColor }}
            isExternal={true}
          >
            {item.title}
          </Text>
        </NextLink>
      </Heading>

      <Box fontSize={'sm'} marginTop={'1rem'} color={linkColor}>
        <span>{item.domain}</span>
        <span>・</span>
        <span>
          {dateTime} <LanguageText tid={'ago'} />
        </span>
      </Box>
    </Box>
  )
}

export default BookmarkCard

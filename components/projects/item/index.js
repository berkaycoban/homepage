import { useContext } from 'react'
import NextLink from 'next/link'
import { Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { tr } from 'date-fns/locale'

import StoreContext from 'store'
import LanguageText from 'lib/language-text'

function ProjectItem({ title, desc, datetime, ...project }) {
  const store = useContext(StoreContext)

  // Datetime i18n
  const locale = store.userLanguage === 'tr'
  const dateTime = formatDistanceToNowStrict(
    datetime,
    locale && {
      locale: tr
    }
  )

  const color = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      border={'1px'}
      borderColor={borderColor}
      p={8}
      _hover={{
        boxShadow: 'md'
      }}
      transitionDuration={'300ms'}
      cursor={'pointer'}
    >
      <NextLink href={`projects/${project.slug}`}>
        <Box>
          <Heading as={'h4'} size={'md'}>
            {title}
          </Heading>

          <Text my={4}>{desc}</Text>

          <Box
            as={'time'}
            color={color}
            textTransform={'uppercase'}
            fontSize={'sm'}
            marginTop={'auto'}
          >
            {dateTime} <LanguageText tid={'ago'} />
          </Box>
        </Box>
      </NextLink>
    </Box>
  )
}

export default ProjectItem

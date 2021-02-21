import {
  Container,
  VStack,
  Box,
  Heading,
  Link,
  Grid,
  Icon,
  IconButton,
  useColorModeValue,
  HStack,
  List,
  ListItem
} from '@chakra-ui/react'

import { SKILLS } from '../constants'

import LanguageText from 'lib/language-text'

function SkillItem({ icon, items }) {
  const iconHoverColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')

  return (
    <VStack textAlign={'center'} spacing={'20px'}>
      <Box
        as={'span'}
        fontSize={'5xl'}
        color={'primary'}
        _hover={{ color: iconHoverColor }}
        transitionDuration={'300ms'}
      >
        {icon}
      </Box>

      <List spacing={'4px'} fontSize={'lg'}>
        {items.map((item) => {
          return (
            <ListItem
              key={`item_${item}`}
              _hover={{ fontWeight: '600' }}
              children={item}
              cursor={'pointer'}
              fontWeight={'500'}
            />
          )
        })}
      </List>
    </VStack>
  )
}

function Skill({ frontend = true, backend = true, tools = true, ...props }) {
  const bgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
  const subTitleColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600')

  return (
    <Box as={'section'} bg={bgColor} py={20}>
      <Container maxW={'4xl'} centerContent>
        <VStack spacing={'12px'}>
          <Heading as={'h3'} fontWeight={'400'} size={'xl'}>
            <LanguageText tid={'mySkills'} />
          </Heading>
          <Heading
            as={'h5'}
            fontWeight={'400'}
            size={'md'}
            color={subTitleColor}
          >
            <LanguageText tid={'mySkillsSubtitle'} />
          </Heading>
        </VStack>

        <Grid
          mt={12}
          templateColumns={{ md: 'repeat(3, 1fr)' }}
          gap={24}
          justifyContent={'space-between'}
        >
          {tools && (
            <SkillItem
              key={'tools'}
              icon={SKILLS.tools.icon}
              items={SKILLS.tools.items}
            />
          )}
          {frontend && (
            <SkillItem
              key={'frontend'}
              icon={SKILLS.frontend.icon}
              items={SKILLS.frontend.items}
            />
          )}
          {backend && (
            <SkillItem
              key={'backend'}
              icon={SKILLS.backend.icon}
              items={SKILLS.backend.items}
            />
          )}
        </Grid>
      </Container>
    </Box>
  )
}

export default Skill

import { Container, Box, Heading, Grid } from '@chakra-ui/layout'
import groupBy from 'lodash.groupby'

import { format, parseISO } from 'date-fns'

import { getBookmark } from 'lib/raindrop'
import LanguageText from 'lib/language-text'

import BookmarkCard from '@comp/BookmarkCard'

function BookmarkPage({ data, weeks }) {
  return (
    <Box as={'section'} mt={-8}>
      <Container maxW={'3xl'}>
        <Grid gap={20}>
          {weeks.map((date) => (
            <Box key={date} className="mt-20">
              <Heading as={'h3'} fontWeight={'400'} size={'lg'}>
                {date}. <LanguageText tid={'week'} />, 2021
              </Heading>

              <Grid gap={8} mt={12}>
                {data[date].map((item) => {
                  return <BookmarkCard key={item._id} {...item} />
                })}
              </Grid>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  const data = await getBookmark()

  const dataGroupByDay = groupBy(data, (item) => {
    const weekNumber = format(parseISO(item.created), 'w')
    return parseInt(weekNumber) - 1
  })

  const weeks = Object.keys(dataGroupByDay)
    .map((o) => parseInt(o))
    .reverse()

  return {
    props: {
      data: dataGroupByDay,
      weeks
    },
    revalidate: 7200
  }
}

export default BookmarkPage

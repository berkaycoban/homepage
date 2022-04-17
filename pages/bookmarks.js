import { Container, Box, Heading, Grid, Divider } from '@chakra-ui/layout'
import groupBy from 'lodash.groupby'

import { format, parseISO } from 'date-fns'

import { getBookmark } from 'lib/raindrop'
import LanguageText from 'lib/language-text'

import BookmarkCard from '@comp/BookmarkCard'

function BookmarkPage({ data }) {
  return (
    <Box as={'section'} mt={-8}>
      <Container maxW="3xl">
        <Grid gap="10">
          {data.map((item) => (
            <>
              <Heading as="h1" fontWeight="700" size="xl">
                {item.year}
              </Heading>

              <Divider />

              <Grid gap="20" mb="10">
                {item.weeks.map((date) => (
                  <Box key={date} className="mt-20">
                    <Heading as="h3" fontWeight="400" size="lg">
                      {date}. <LanguageText tid={'week'} />, {item.year}
                    </Heading>

                    <Grid gap="8" mt="12">
                      {item.bookmarks[date].map((item) => {
                        return <BookmarkCard key={item._id} {...item} />
                      })}
                    </Grid>
                  </Box>
                ))}
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  const resData = await getBookmark()

  const dataGroupByYear = groupBy(resData, (item) => {
    return parseInt(format(parseISO(item.created), 'yyyy'))
  })

  let data = []

  Object.keys(dataGroupByYear).map((year) => {
    const bookmarksByYear = dataGroupByYear[year]

    const dataGroupByDay = groupBy(bookmarksByYear, (item) => {
      const weekNumber = format(parseISO(item.created), 'w')
      return parseInt(weekNumber) - 1
    })

    const weeks = Object.keys(dataGroupByDay)
      .map((o) => parseInt(o))
      .reverse()

    data.push({ year, weeks, bookmarks: dataGroupByDay })
  })

  data.sort((a, b) => (a.year < b.year ? 1 : -1))

  return {
    props: { data },
    revalidate: 7200
  }
}

export default BookmarkPage

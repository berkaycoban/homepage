import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import Layout from '../../components/layout'
import Event from '../../components/event'

import markdownToHtml from '../../lib/markdownToHtml'
import { getAllEvents, getEventBySlug } from '../../lib/api'

function EventPage({ event }) {
  const router = useRouter()

  if (!router.isFallback && !event?.slug) {
    return <ErrorPage code={404} />
  }

  return (
    <Layout>
      <Event {...event} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const event = getEventBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'excerpt',
    'attendees'
  ])

  const content = await markdownToHtml(event.content || '')

  return {
    props: {
      event: {
        ...event,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const events = getAllEvents(['slug'])

  return {
    paths: events.map((event) => {
      return {
        params: {
          slug: event.slug
        }
      }
    }),
    fallback: false
  }
}

export default EventPage

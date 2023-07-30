export const MENU = [
  {
    url: '/',
    title: 'Home',
    title_tr: 'Anasayfa'
  },
  // {
  //   url: '/projects',
  //   title: 'Projects',
  //   title_tr: 'Projeler'
  // },
  {
    url: '/bookmarks',
    title: 'Bookmarks',
    title_tr: 'Yer imleri'
  }
  // {
  //   url: 'https://twitter.com/intent/follow?screen_name=berkaycoban35',
  //   title: 'Follow Me',
  //   title_tr: 'Beni takip et',
  //   isExternal: true
  // }
]

import * as Icon from '../components/icons'

export const SKILLS = {
  tools: {
    icon: <Icon.Tools />,
    items: ['Illustrator', 'Photoshop', 'Figma']
  },
  frontend: {
    icon: <Icon.Frontend />,
    items: ['HTML 5', 'CSS 3 & SCSS', 'JS & Next.js']
  },
  backend: {
    icon: <Icon.Backend />,
    items: ['PHP', 'Symfony', 'MySQL']
  }
}

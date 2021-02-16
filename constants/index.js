export const MENU = [
  {
    url: '/',
    title: 'Home',
    title_tr: 'Anasayfa'
  },
  {
    url: '/projects',
    title: 'Projects',
    title_tr: 'Projeler'
  },
  {
    url: 'https://twitter.com/intent/follow?screen_name=berkaycoban35',
    title: 'Follow Me',
    title_tr: 'Beni takip et',
    isExternal: true
  }
]

export const SOCIAL = {
  instagram: {
    url: 'https://instagram.com/berkaycoban35',
    name: 'Instagram',
    target: '_blank'
  },
  twitter: {
    url: 'https://twitter.com/berkaycoban35',
    name: 'Twitter',
    target: '_blank'
  },
  github: {
    url: 'https://github.com/berkaycoban',
    name: 'Github',
    target: '_blank'
  }
}

export const SIZE = {
  MOBILE_SIZE: 768,
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}

import * as Icon from '../components/icons'

export const SKILLS = {
  tools: {
    icon: <Icon.Tools />,
    items: ['Illustrator', 'Photoshop', 'Figma']
  },
  frontend: {
    icon: <Icon.Frontend />,
    items: ['HTML 5', 'CSS 3 & SASS', 'Javascript']
  },
  backend: {
    icon: <Icon.Backend />,
    items: ['PHP', 'Symfony', 'MySQL']
  }
}

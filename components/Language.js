import { useContext } from 'react'
import { Button, Icon, useColorModeValue } from '@chakra-ui/react'

import StoreContext from 'store'

function Language() {
  const store = useContext(StoreContext)

  const changeLanguage = () => {
    const newLang = store.userLanguage === 'en' ? 'tr' : 'en'
    store.userLanguageChange(newLang)
  }

  const bgColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <>
      <Button
        onClick={changeLanguage}
        variant={'ghost'}
        fontWeight={400}
        p={2}
        bg={bgColor}
        _hover={{ bg: bgColor }}
      >
        {store.userLanguage == 'tr' ? (
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 30"
            width={'24px'}
          >
            <clipPath id="a">
              <path d="M0 0v30h60V0z" />
            </clipPath>
            <clipPath id="b">
              <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
            </clipPath>
            <g clipPath="url(#a)">
              <path d="M0 0v30h60V0z" fill="#012169" />
              <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
              <path
                d="M0 0l60 30m0-30L0 30"
                clipPath="url(#b)"
                stroke="#C8102E"
                strokeWidth="4"
              />
              <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
              <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
            </g>
          </Icon>
        ) : (
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 800"
            width={'24px'}
          >
            <rect width="1200" height="800" fill="#E30A17" />
            <circle cx="425" cy="400" r="200" style={{ fill: '#ffffff' }} />
            <circle cx="475" cy="400" r="160" style={{ fill: '#E30A17' }} />
            <polygon
              style={{ fill: '#ffffff' }}
              points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221"
            />
          </Icon>
        )}
      </Button>
    </>
  )
}

export default Language

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const styles = {
  global: (props) => ({
    body: {
      color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
      bg: mode('white', 'black')(props)
    }
  })
}

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif'
  },
  colors: {
    primary: '#00b0ff'
  },
  styles,
  config
})

export default theme

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  //background colours
  global: props => ({
    body: {
      bg: mode('#ffffff', '#202023')(props),
      fontSize: 20
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 5,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  //text hyperlink colours
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}
//heading fonts
const fonts = {
  heading: "'IBM Plex Mono'",
}

const colors = {
  //grassTeal: '#88ccca'
  smokeGrey: '#25292b'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ 
  config, 
  styles,
  components: { 
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  },
  fonts:{
    heading: `'IBM Plex Mono'`,
    body: `'Patrick Hand'`,
  }, 
  colors 
})
export default theme

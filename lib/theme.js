import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  //background colours
  global: props => ({
    body: {
      //bg: mode('#f0e7db', '#202023')(props)
      bg: mode('#ffffff', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      //in text underline colour
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
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
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  //grassTeal: '#88ccca'
  smokeGrey: '#25292b'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme

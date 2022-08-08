import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#1E152A', '#1E152A')(props),
      fontSize: 20
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 22,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },

  Link: {
    baseStyle: props => ({
      //color: mode('#3d7aed', '#ff63c3')(props),
      color: mode('#ffc90d', '#ffc90d')(props),
      textUnderlineOffset: 3,
      _focus: {
        boxShadow: 'none'
      }
    })
  }
}

const fonts = {
  heading: "'IBM Plex Mono'",
  body: "'Patrick Hand'"
}

const colors = {
  starYellow: '#ffc90d'
}

const config = {
  initialColorMode: 'dark',
  //useSystemColorMode: true
}

const theme = extendTheme({ 
  config, 
  styles,
  components,
  fonts, 
  colors 
})

export default theme

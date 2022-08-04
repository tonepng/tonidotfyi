import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f2f2f2', '#202023')(props),
      //fontSize: 25
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 25,
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
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'IBM Plex Mono'",
  body: "'Patrick Hand'"
}

const colors = {
  smokeGrey: '#25292b'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

// const theme = extendTheme({ 
//   config, 
//   styles,
//   components: { 
//     Link: {
//       baseStyle: {
//         _focus: {
//           boxShadow: 'none'
//         }
//       }
//     }
//   },
//   fonts:{
//     heading: `'IBM Plex Mono'`,
//     body: `'Patrick Hand'`,
//   }, 
//   colors 
// })

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme

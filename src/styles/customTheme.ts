import { theme, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: 'Roboto, sans-serif',
    heading: 'Roboto, serif',
  },
  colors: {
    ...theme.colors,
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
})

export default customTheme

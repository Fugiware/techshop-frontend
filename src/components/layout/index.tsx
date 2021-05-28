import { Box } from '@chakra-ui/layout'
import { ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1000} transition="0.5s ease-out">
      <Meta />
      <Box margin="6">
        <Header />
        <Box as="main" marginY={16} >
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout

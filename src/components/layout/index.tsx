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
    <>
      <Header />
      <Box margin="0 auto" transition="0.5s ease-out">
        <Meta />
        <Box margin={{ base: '0 12px', sm: '0 16px', md: '0 80px' }}>
          <Box as="main" marginY={16}>
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Layout

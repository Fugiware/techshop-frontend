import { Box, Flex, Heading } from '@chakra-ui/layout'

import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        TechShop
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  )
}

export default Header

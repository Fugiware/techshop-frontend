import { Flex, Link, Text } from '@chakra-ui/layout'

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        <Link href="https://github.com/Fugiware" isExternal>
          &copy; Fujiware -
        </Link>
        {" "} {new Date().getFullYear()}
      </Text>
    </Flex>
  )
}

export default Footer

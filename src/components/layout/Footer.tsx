import { Flex, Link, Text } from '@chakra-ui/layout'

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      padding={{ base: '0 12px', sm: '0 16px', md: '0 80px' }}
    >
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

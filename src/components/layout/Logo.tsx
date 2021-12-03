import { Flex, Text } from '@chakra-ui/react'
import { MdDevices } from 'react-icons/md'

export default function Logo({ isFlex = false }: { isFlex?: boolean }) {
  return (
    <Flex
      flex={{ base: isFlex ? 1 : 0 }}
      justify={{ base: 'center', md: 'start' }}
      alignItems="center"
    >
      <Text
        bgGradient="linear(to-l, #38B2AC,#3182CE)"
        bgClip="text"
        fontSize="29px"
        fontWeight="medium"
      >
        TECHSHOP
      </Text>
      <MdDevices
        style={{
          width: '30px',
          height: '30px',
          marginLeft: '4px',
        }}
        color="#38B2AC"
      />
    </Flex>
  )
}

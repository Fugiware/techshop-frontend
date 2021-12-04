import { useState, memo } from 'react'
import { useRouter } from 'next/router'
import {
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react'
import { Box, Center, Flex } from '@chakra-ui/layout'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import Logo from 'components/layout/Logo'
import { useNotify } from 'hooks/useNotify'
import { sendLogin } from 'services/auth'

const Login = () => {
  const router = useRouter()
  const notify = useNotify()

  const [loading, setLoading] = useState(false)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const VisibilityIcon = showPassword ? MdVisibilityOff : MdVisibility

  const handleLogin = async () => {
    try {
      setLoading(true)
      const data = await sendLogin()
      notify.showSuccess('Login efetuado com sucesso!')
      router.push('/')
    } catch (error) {
      notify.showError('Ocorreu um erro ao tentar fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Center margin="0 auto" backgroundColor="#EBEBEB" height="100vh" width="100vw">
      <Box
        backgroundColor="white"
        height="540px"
        width="500px"
        margin="12px"
        shadow="sm"
        padding="24px"
        borderRadius="3px"
      >
        <Flex width="100%" justify="center" marginTop="24px" marginBottom="30px">
          <Logo />
        </Flex>

        <Flex width="100%" paddingTop="16px">
          <Flex direction="column">
            <Text color="#3182CE" fontSize="22px" fontWeight="Bold">
              Login
            </Text>
            <Text color="#3182CE" fontSize="12px" fontWeight="medium">
              Compre e venda utilizando os diversos recursos de nossa plataforma digital
            </Text>
          </Flex>
        </Flex>

        <Flex width="100%" paddingTop="20px" direction="column">
          <Input
            value={login}
            placeholder="Login"
            size="md"
            onChange={(e) => setLogin(e.target.value)}
          />

          <InputGroup marginTop="20px">
            <Input
              value={password}
              placeholder="Senha"
              size="md"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement
              children={
                <VisibilityIcon
                  color="#333"
                  opacity="0.4"
                  style={{
                    width: '24px',
                    height: '24px',
                  }}
                  cursor="pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              }
            />
          </InputGroup>

          <Link color="#3182CE" marginTop="8px">
            <Text color="#3182CE" fontSize="14px" fontWeight="medium" align="end">
              Esqueceu a senha?
            </Text>
          </Link>

          <Flex width="100%" marginTop="42px" justify="center">
            <Button
              bgGradient="linear-gradient(90deg, #3182CE 0%, #26A69A 100%);"
              color="white"
              colorScheme="blue"
              width="140px"
              fontSize="18px"
              fontWeight="medium"
              isLoading={loading}
              onClick={() => handleLogin()}
            >
              Entrar
            </Button>
          </Flex>

          <Flex width="100%" margin={{ base: '40px 0 0 0', sm: '80px 0 0 0' }}>
            <Text color="#ADADAD" fontSize="14px" fontWeight="medium">
              Não possui uma conta?{' '}
              <Link color="#26A69A" marginTop="8px" href="/signup">
                Sign in
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Center>
  )
}

Login.displayName = 'Login'

export default memo(Login)

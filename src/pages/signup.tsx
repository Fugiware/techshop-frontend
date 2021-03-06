import { useState, memo } from 'react'
import { useRouter } from 'next/router'
import {
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Link,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { Box, Center, Flex } from '@chakra-ui/layout'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import Logo from 'components/layout/Logo'
import { sendSignup } from 'services/auth'
import { useNotify } from 'hooks/useNotify'

const SignUp = () => {
  const router = useRouter()
  const notify = useNotify()

  const [loading, setLoading] = useState(false)

  const [nome, setNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [rg, setRG] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [tipo, setTipo] = useState('CLIENTE')
  const [showPassword, setShowPassword] = useState(false)

  const VisibilityIcon = showPassword ? MdVisibilityOff : MdVisibility

  const handleSignUp = async () => {
    try {
      setLoading(true)
      const data = await sendSignup()
      notify.showSuccess('Cadastro realizado com sucesso!')
      router.push('/')
    } catch (error) {
      notify.showError('Ocorreu um erro ao tentar fazer o cadastro')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Center margin="0 auto" backgroundColor="#EBEBEB" height="100vh" width="100vw">
      <Box
        backgroundColor="white"
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
              Sign Up
            </Text>
            <Text color="#26A69A" fontSize="12px" fontWeight="medium">
              Compre e venda utilizando os diversos recursos de nossa plataforma digital
            </Text>
          </Flex>
        </Flex>

        <Flex width="100%" paddingTop="24px" direction="column">
          <Text color="#3182CE" fontWeight="medium" marginBottom="8px">
            O que deseja fazer na plataforma?
          </Text>
          <RadioGroup onChange={setTipo} value={tipo}>
            <Stack direction="row">
              <Radio value="CLIENTE" paddingRight="20px">
                Quero comprar
              </Radio>
              <Radio value="VENDEDOR" colorScheme="teal">
                Quero Vender
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>

        <Flex width="100%" paddingTop="24px" direction="column">
          <Input
            value={nome}
            placeholder="Nome"
            size="md"
            onChange={(e) => setNome(e.target.value)}
          />
        </Flex>

        <Flex width="100%" paddingTop="20px" direction="column">
          <Input
            value={cpf}
            placeholder="CPF"
            size="md"
            onChange={(e) => setCPF(e.target.value)}
          />
        </Flex>

        <Flex width="100%" paddingTop="20px" direction="column">
          <Input
            value={rg}
            placeholder="RG"
            size="md"
            onChange={(e) => setRG(e.target.value)}
          />
        </Flex>

        <Flex width="100%" paddingTop="20px" direction="column">
          <Input
            value={email}
            placeholder="E-mail"
            size="md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>

        <Flex width="100%" paddingTop="20px" direction="column">
          <InputGroup>
            <Input
              value={senha}
              placeholder="Senha"
              size="md"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setSenha(e.target.value)}
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

          <Flex width="100%" marginTop="52px" justify="center">
            <Button
              bgGradient="linear-gradient(90deg, #3182CE 0%, #26A69A 100%);"
              color="white"
              colorScheme="blue"
              width="140px"
              fontSize="18px"
              fontWeight="medium"
              isLoading={loading}
              onClick={() => handleSignUp()}
            >
              Cadastrar
            </Button>
          </Flex>

          <Flex width="100%" margin="60px 0 0 0">
            <Text color="#ADADAD" fontSize="14px" fontWeight="medium">
              J?? possui uma conta?{' '}
              <Link color="#26A69A" marginTop="8px" href="/login">
                Login
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Center>
  )
}

SignUp.displayName = 'Signup'

export default memo(SignUp)

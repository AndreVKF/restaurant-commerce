import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../hooks/authentication"

import {
  Container,
  HeaderContainer,
  FormContainer,
  InputWrapper,
} from "./styles"

import { ReactComponent as Logo } from "../../assets/icons/Logo.svg"

import Input from "../../components/Input"
import PasswordInput from "../../components/PasswordInput"
import Button from "../../components/Button"

import { toast } from "react-toastify"
import { useCartContext } from "../../hooks/cart"

const SignIn = () => {
  const { login } = useAuthContext()
  const { handleEraseCart } = useCartContext()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = (event) => {
    event.preventDefault()

    if (email === "" || password === "") {
      toast.error("Email e password são campos obrigatórios!!")
      return
    }

    login({ email, password })
  }

  useEffect(() => {
    handleEraseCart()
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <h1>food explorer</h1>
      </HeaderContainer>

      <FormContainer>
        <h2>Faça login</h2>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Senha</label>
          <PasswordInput
            id="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputWrapper>
        <Button onClick={handleClick}>
          <span>Entrar</span>
        </Button>
        <Link to="/register">
          <span>Criar uma conta</span>
        </Link>
      </FormContainer>
    </Container>
  )
}

export default SignIn

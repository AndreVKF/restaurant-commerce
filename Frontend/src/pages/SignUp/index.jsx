import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { toast } from "react-toastify"

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

import { useAuthContext } from "../../hooks/authentication"
import { ROUTES } from "../../common/constants"
import { api } from "../../services/api"
import { useCartContext } from "../../hooks/cart"

const SignUp = () => {
  const { handleEraseCart } = useCartContext()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { login } = useAuthContext()

  const handleClick = (event) => {
    event.preventDefault()

    if (name === "" || email === "" || password === "") {
      toast.error("Todos os campos devem ser preenchidos!!")
      return
    }

    if (password.length < 6) {
      toast.error("Password deve ter pelo menos 6 caracteres!!")
    }

    api
      .post(ROUTES.CREATE_USER, { name, email, password })
      .then((data) => {
        login({ email, password })
        navigate("/")
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.mensage)
        } else {
          toast.error("Não foi possível criar conta!!")
        }
      })
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
        <h2>Crie sua conta</h2>

        <InputWrapper>
          <label htmlFor="name">Seu nome</label>
          <Input
            type="name"
            id="name"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InputWrapper>

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
          <span>Criar conta</span>
        </Button>

        <Link to="/">
          <span>Já tenho uma conta</span>
        </Link>
      </FormContainer>
    </Container>
  )
}

export default SignUp

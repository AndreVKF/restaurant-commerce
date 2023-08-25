import {
  Container,
  HeaderContainer,
  FormContainer,
  InputWrapper,
} from "./styles"

import { ReactComponent as Logo } from "../../assets/icons/Logo.svg"

import Input from "../../components/Input"
import Button from "../../components/Button"

const index = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <h1>food explorer</h1>
      </HeaderContainer>

      <FormContainer>
        <h2>Faça login</h2>

        <InputWrapper>
          <label htmlFor="name">Seu nome</label>
          <Input type="name" id="name" placeholder="Exemplo: Maria da Silva" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
          />
        </InputWrapper>
        <Button>
          <span>Criar conta</span>
        </Button>

        <span>Já tenho uma conta</span>
      </FormContainer>
    </Container>
  )
}

export default index

import { useEffect } from "react"
import { useResolvedPath } from "react-router-dom"

import {
  Container,
  MainContainer,
  FormContainer,
  FormInputWrapper,
  ButtonContainer,
} from "./styles"
import { FiUpload } from "react-icons/fi"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import GoBack from "../../components/GoBack"
import Input from "../../components/Input"
import SelectInput from "../../components/SelectInput"
import MultiSelect from "../../components/MultiSelectInput"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"

import theme from "../../styles/theme"

const categoryArray = [
  { value: 0, label: "Refeição" },
  { value: 1, label: "Sobremesa" },
  { value: 2, label: "Bebida" },
]

const ingredientsArray = [
  { value: 0, label: "Batata" },
  { value: 1, label: "Banana" },
  { value: 2, label: "Farinha" },
]

const CrudDish = () => {
  const { pathname } = useResolvedPath()
  const formHeader = pathname.includes("create_dish")
    ? "Adicionar prato"
    : pathname.includes("update_dish")
    ? "Editar prato"
    : ""

  const ButtonOptions = () => {
    if (pathname.includes("create_dish")) {
      return (
        <Button color={theme.COLORS.TOMATO_400}>
          <span>Adicionar</span>
        </Button>
      )
    } else if (pathname.includes("update_dish")) {
      return (
        <>
          <Button color={theme.COLORS.DARK_800}>
            <span>Excluir prato</span>
          </Button>
          <Button color={theme.COLORS.TOMATO_400}>
            <span>Salvar alterações</span>
          </Button>
        </>
      )
    } else {
      return <></>
    }
  }

  return (
    <Container>
      <Header />
      <MainContainer>
        <GoBack />
        <h1>{formHeader}</h1>

        <FormContainer>
          <FormInputWrapper $name={"upload-img"}>
            <label htmlFor="upload-img">Imagem do prato</label>
            <Input
              icon={FiUpload}
              type="file"
              placeholder="selecione imagem"
              id="upload-img"
              style={{ display: "none" }}
            >
              <span>selecione imagem</span>
            </Input>
          </FormInputWrapper>
          <FormInputWrapper $name={"dish-name"}>
            <label htmlFor="dish-name">Nome</label>
            <Input type="text" placeholder="Ex.: Salada Cesar" id="dish-name" />
          </FormInputWrapper>
          <FormInputWrapper $name={"dish-category"}>
            <label htmlFor="dish-category">Categoria</label>
            <SelectInput options={categoryArray} id="dish-category" />
          </FormInputWrapper>
          <FormInputWrapper $name={"dish-ingredients"}>
            <label htmlFor="dish-ingredients">Ingredientes</label>
            <MultiSelect options={ingredientsArray} />
          </FormInputWrapper>
          <FormInputWrapper $name={"dish-price"}>
            <label htmlFor="dish-price">Preço</label>
            <Input type="text" placeholder="R$ 0,00" id="dish-price" />
          </FormInputWrapper>
          <FormInputWrapper $name={"dish-description"}>
            <label htmlFor="dish-description">Descrição</label>
            <TextArea
              id="dish-description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </FormInputWrapper>
        </FormContainer>
        <ButtonContainer>{ButtonOptions()}</ButtonContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default CrudDish

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

import theme from "../..//styles/theme"

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

const index = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <GoBack size="small" />
        <h1>Novo prato</h1>

        <FormContainer>
          <FormInputWrapper>
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
          <FormInputWrapper>
            <label htmlFor="dish-name">Nome</label>
            <Input type="text" placeholder="Ex.: Salada Cesar" id="dish-name" />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor="dish-category">Categoria</label>
            <SelectInput options={categoryArray} id="dish-category" />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor="dish-ingredients">Ingredientes</label>
            <MultiSelect options={ingredientsArray} />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor="dish-description">Descrição</label>
            <TextArea
              id="dish-description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </FormInputWrapper>
          <ButtonContainer>
            <Button color={theme.COLORS.TOMATO_400}>
              <span>Salvar alterações</span>
            </Button>
          </ButtonContainer>
        </FormContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default index

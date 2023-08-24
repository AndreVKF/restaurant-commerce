import {
  Container,
  DescriptionContainer,
  IngredientsContainer,
  ButtonsContainer,
} from "./styles"

import DishAdder from "../DishAdder"
import Button from "../Button"
import IngredientContainer from "../IngredientContainer"

import { ReactComponent as Receipt } from "../../assets/icons/Receipt.svg"

const index = () => {
  return (
    <Container>
      <img src="/images/Mask group-1.png" alt="Imagem de um prato delicioso" />

      <DescriptionContainer>
        <h2>Salada Ravanello</h2>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>
        <IngredientsContainer>
          <IngredientContainer name="Batata" />
          <IngredientContainer name="Batata" />
          <IngredientContainer name="Batata" />
          <IngredientContainer name="Batata" />
          <IngredientContainer name="Batata" />
          <IngredientContainer name="Batata" />
        </IngredientsContainer>
        <ButtonsContainer>
          <DishAdder size={"medium"} />

          <Button>
            <Receipt />
            <span>pedir ∙ R$ 25,00</span>
          </Button>
        </ButtonsContainer>
      </DescriptionContainer>
    </Container>
  )
}

export default index

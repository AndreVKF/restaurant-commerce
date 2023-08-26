import { useAuthContext } from "../../hooks/authentication"

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

const DishDetails = () => {
  const { userData } = useAuthContext()
  const isAdmin = { userData }

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

        {isAdmin ? (
          <ButtonsContainer>
            <Button>
              <span>Editar prato</span>
            </Button>
          </ButtonsContainer>
        ) : (
          <ButtonsContainer>
            <div>
              <DishAdder size={"medium"} />
            </div>
            <Button>
              <Receipt />
              <span>pedir ∙ R$ 25,00</span>
            </Button>
          </ButtonsContainer>
        )}
      </DescriptionContainer>
    </Container>
  )
}

export default DishDetails

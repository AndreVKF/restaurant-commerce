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
import { useEffect } from "react"
import { api } from "../../services/api"

const DishDetails = ({ dish }) => {
  const { userData, isAdmin } = useAuthContext()

  return (
    <Container>
      <img
        src={
          dish.dish_image_url
            ? `${api.defaults.baseURL}/files/${dish.dish_image_url}`
            : "/images/default_dish.png"
        }
        alt="Imagem de um prato delicioso"
      />

      <DescriptionContainer>
        <h2>{dish.dish_name}</h2>
        <p>{dish.dish_description}</p>
        {dish.ingredients && (
          <IngredientsContainer>
            {dish.ingredients.split(",").map((ingredient, idx) => {
              return <IngredientContainer key={idx} name={ingredient} />
            })}
          </IngredientsContainer>
        )}

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

import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
import { api } from "../../services/api"

import { adjustDishPrice } from "../../common/functions"
import { useCartContext } from "../../hooks/cart"

const DishDetails = ({ dish }) => {
  const { userData, isAdmin } = useAuthContext()
  const { handleAddToCart } = useCartContext()

  const [count, setCount] = useState("01")
  const navigate = useNavigate()

  const dishPrice = adjustDishPrice(dish.dish_price)

  const handleGoToUpdate = () => {
    navigate(`/update_dish/${dish.id_dish}`)
  }

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
            <Button onClick={handleGoToUpdate}>
              <span>Editar prato</span>
            </Button>
          </ButtonsContainer>
        ) : (
          <ButtonsContainer>
            <div>
              <DishAdder size={"medium"} count={count} setCount={setCount} />
            </div>
            <Button onClick={() => handleAddToCart({ dish, quantity: count })}>
              <Receipt />
              <span>pedir ∙ R$ {dishPrice}</span>
            </Button>
          </ButtonsContainer>
        )}
      </DescriptionContainer>
    </Container>
  )
}

export default DishDetails

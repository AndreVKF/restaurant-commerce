import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../../hooks/cart"
import { Container, DishContainer, ButtonsContainer } from "./styles"

import { api } from "../../services/api"
import { adjustDishPrice, titleizeText } from "../../common/functions"

import Button from "../../components/Button"
import DishAdder from "../../components/DishAdder"

const DishSearch = ({ dish }) => {
  const navigate = useNavigate()
  const { handleAddToCart } = useCartContext()
  const [count, setCount] = useState("01")

  const handleClick = () => {
    navigate(`/dish/${dish.id_dish}`)
  }

  return (
    <Container>
      <DishContainer onClick={handleClick}>
        <img
          src={
            dish.dish_image_url
              ? `${api.defaults.baseURL}/files/${dish.dish_image_url}`
              : "/images/default_dish.png"
          }
          alt="Imagem de uma receita deliciosa"
        />
        <h3>{titleizeText(dish.dish_name)}</h3>
        <span>R$ {adjustDishPrice(dish.dish_price)}</span>
      </DishContainer>

      <ButtonsContainer>
        <DishAdder count={count} setCount={setCount} />
        <Button onClick={() => handleAddToCart({ dish, quantity: count })}>
          <span>Incluir</span>
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default DishSearch

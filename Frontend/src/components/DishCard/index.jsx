import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/authentication"
import { useCartContext } from "../../hooks/cart"

import {
  Container,
  PriceTag,
  ButtonContainer,
  MarkersContainer,
} from "./styles"

import { ReactComponent as Heart } from "../../assets/icons/Heart.svg"
import { ReactComponent as Pencil } from "../../assets/icons/Pencil.svg"

import Button from "../Button"
import DishAdder from "../DishAdder"

import { titleizeText, adjustDishPrice } from "../../common/functions"
import { api } from "../../services/api"

const DishCard = ({ dish }) => {
  const { isAdmin } = useAuthContext()
  const { cartDispatch } = useCartContext()
  const navigate = useNavigate()

  const [count, setCount] = useState("01")

  const handleGoToDish = (id_dish) => {
    navigate(`/dish/${id_dish}`)
  }

  const handleGoToUpdateDish = (id_dish) => {
    navigate(`/update_dish/${id_dish}`)
  }

  const handleAddToCart = () => {
    const purchase = {
      id_dish: dish.id_dish,
      price: dish.dish_price,
      quantity: Number(count),
    }
    cartDispatch({ type: "ADD", data: purchase })
  }

  return (
    <Container>
      <MarkersContainer>
        {isAdmin ? (
          <Pencil onClick={() => handleGoToUpdateDish(dish.id_dish)} />
        ) : (
          <Heart />
        )}
      </MarkersContainer>

      <img
        onClick={() => handleGoToDish(dish.id_dish)}
        src={
          dish.dish_image_url
            ? `${api.defaults.baseURL}/files/${dish.dish_image_url}`
            : "/images/default_dish.png"
        }
        alt="Imagem de uma receita deliciosa"
      />
      <h2 onClick={() => handleGoToDish(dish.id_dish)}>
        {titleizeText(dish.dish_name)} <span>{">"}</span>
      </h2>
      <p>{dish.dish_description}</p>
      <PriceTag>
        <span>R$ {adjustDishPrice(dish.dish_price)}</span>
      </PriceTag>

      {!isAdmin && (
        <ButtonContainer>
          <div>
            <DishAdder count={count} setCount={setCount} />
          </div>
          <Button onClick={handleAddToCart}>
            <span>Incluir</span>
          </Button>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default DishCard

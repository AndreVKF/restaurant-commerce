import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/authentication"

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
import { api } from "../../services/api"

const DishCard = ({ dish }) => {
  const { isAdmin } = useAuthContext()
  const navigate = useNavigate()

  const formatDishPrice = (price) => {
    return String(price / 100).replace(".", ",")
  }

  const handleGoToDish = (id_dish) => {
    navigate(`/dish/${id_dish}`)
  }

  const handleGoToUpdateDish = (id_dish) => {
    navigate(`/update_dish/${id_dish}`)
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
        {dish.dish_name} <span>{">"}</span>
      </h2>
      <p>{dish.dish_description}</p>
      <PriceTag>
        <span>R$ {formatDishPrice(dish.dish_price)}</span>
      </PriceTag>

      {!isAdmin && (
        <ButtonContainer>
          <div>
            <DishAdder />
          </div>
          <Button>
            <span>Incluir</span>
          </Button>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default DishCard

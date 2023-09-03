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

import { ReactComponent as Pencil } from "../../assets/icons/Pencil.svg"

import Button from "../Button"
import DishAdder from "../DishAdder"

import { titleizeText, adjustDishPrice } from "../../common/functions"
import { ROUTES } from "../../common/constants"
import { api } from "../../services/api"

const DishCard = ({ dish }) => {
  const { isAdmin, userData } = useAuthContext()
  const { handleAddToCart } = useCartContext()
  const navigate = useNavigate()

  const [count, setCount] = useState("01")
  const [isFavoriteDish, setIsFavoriteDish] = useState(dish.isFavorite)

  const handleGoToDish = (id_dish) => {
    navigate(`/dish/${id_dish}`)
  }

  const handleGoToUpdateDish = (id_dish) => {
    navigate(`/update_dish/${id_dish}`)
  }

  const handleFavoriteClick = async ({ id_user, id_dish }) => {
    let isFavorite = !isFavoriteDish

    if (isFavorite) {
      await api.post(`${ROUTES.FAVORITES}`, { id_user, id_dish })
    } else {
      await api.delete(`${ROUTES.FAVORITES}`, { data: { id_user, id_dish } })
    }

    dish.isFavorite = isFavorite

    setIsFavoriteDish(isFavorite)
  }

  return (
    <Container>
      <MarkersContainer $isFavoriteDish={isFavoriteDish}>
        {isAdmin ? (
          <Pencil onClick={() => handleGoToUpdateDish(dish.id_dish)} />
        ) : (
          <div
            onClick={async () =>
              await handleFavoriteClick({
                id_dish: dish.id_dish,
                id_user: userData.id_user,
              })
            }
          >
            <svg height="24" width="26" viewBox="0 0 230 230">
              <path
                d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
              c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
              C235.26,57.99,236.537,96.466,213.588,120.982z"
              />
            </svg>
          </div>
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
          <Button onClick={() => handleAddToCart({ dish, quantity: count })}>
            <span>Incluir</span>
          </Button>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default DishCard

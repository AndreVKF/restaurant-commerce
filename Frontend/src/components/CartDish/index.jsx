import { useCartContext } from "../../hooks/cart"
import { Container, CartDishDetails } from "./styles"
import { titleizeText } from "../../common/functions"

import { api } from "../../services/api"

const CartDish = ({ cartDish }) => {
  const { handleRemoveDish } = useCartContext()

  const calcDishTotal = () => {
    const dishTotal = (Number(cartDish.quantity) * Number(cartDish.price)) / 100
    const dishTotalStr = dishTotal.toLocaleString("pt-BR")

    return dishTotalStr
  }

  return (
    <Container>
      <img
        src={
          cartDish.dish_image_url
            ? `${api.defaults.baseURL}/files/${cartDish.dish_image_url}`
            : "/images/default_dish.png"
        }
        alt="Image do prato selecionado"
      />

      <CartDishDetails>
        <div>
          <h3>
            {cartDish.quantity} x {titleizeText(cartDish.dish_name)}
          </h3>
          <span>R$ {calcDishTotal()}</span>
        </div>
        <span
          onClick={() => {
            handleRemoveDish({ id_dish: cartDish.id_dish })
          }}
        >
          Excluir
        </span>
      </CartDishDetails>
    </Container>
  )
}

export default CartDish

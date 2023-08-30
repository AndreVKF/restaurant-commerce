import { Container } from "./styles"

import { api } from "../../services/api"
import { adjustDishPrice, titleizeText } from "../../common/functions"

const DishSearch = ({ dish }) => {
  return (
    <Container>
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
    </Container>
  )
}

export default DishSearch

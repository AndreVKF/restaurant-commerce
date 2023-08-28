import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Container, MainContainer } from "./styles"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import GoBack from "../../components/GoBack"
import DishDetails from "../../components/DishDetails"

import { api } from "../../services/api"
import { ROUTES } from "../../common/constants"

const Dish = () => {
  const navigate = useNavigate()

  const [dish, setDish] = useState(null)
  const { id_dish } = useParams()

  useEffect(() => {
    api
      .get(`${ROUTES.DISHES_DETAILS}/${id_dish}`)
      .then((resp) => {
        if (Object.keys(resp.data).length === 0) {
          navigate("/dish_not_found")
        }

        setDish(resp.data)
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Não foi possível obter dados da receita!!")
        }
      })
  }, [])

  return (
    <Container>
      <Header />
      <MainContainer>
        <div>
          <GoBack />
        </div>
        {dish && <DishDetails dish={dish} />}
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default Dish

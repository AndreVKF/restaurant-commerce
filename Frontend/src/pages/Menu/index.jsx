import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/authentication"
import { FiSearch } from "react-icons/fi"

import { Container, MainContainer, DishSearchContainer } from "./styles"

import HeaderMenu from "../../components/HeaderMenu"
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import DishSearch from "../../components/DishSearch"
import RedirectSearch from "../../components/RedirectSearch"
import Loading from "../../components/Loading"

import { api } from "../../services/api"
import { ROUTES } from "../../common/constants"
import { toast } from "react-toastify"

const Menu = () => {
  const { isAdmin } = useAuthContext()
  const [isLoading, setIsLoading] = useState(true)
  const [filterText, setFilterText] = useState("")

  const [dishesArray, setDishesArray] = useState([])
  const [filteredDishesArray, setFilteredDishesArray] = useState([])

  useEffect(() => {
    setIsLoading(true)

    api
      .get(ROUTES.DISHES_DETAILS)
      .then((resp) => {
        if (resp.data) {
          const { data } = resp
          setDishesArray(data)
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Não foi possível baixar dados dos pratos!!")
        }
      })
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (isLoading) return

    if (filterText === "") {
      setFilteredDishesArray(dishesArray)
      return
    }

    let filterTextLowerCase = filterText.toLowerCase()
    let filteredDishes = dishesArray.filter((dish) => {
      let dishName = dish.dish_name.toLowerCase()
      let ingredientsArray = dish.ingredients
        .split(",")
        .map((ing) => ing.toLowerCase())

      if (dishName.includes(filterTextLowerCase)) {
        return true
      }

      for (let ingredient of ingredientsArray) {
        if (ingredient.includes(filterTextLowerCase)) {
          return true
        }
      }

      return false
    })

    console.log(filteredDishes)
  }, [isLoading, filterText, dishesArray])

  return isLoading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <HeaderMenu />
      <MainContainer>
        <Input
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
        />
        <DishSearchContainer>
          {dishesArray &&
            dishesArray.map((dish) => {
              return <DishSearch key={dish.id_dish} dish={dish} />
            })}

          {isAdmin && <RedirectSearch text={"Novo Prato"} />}

          <RedirectSearch text={"Sair"} />
        </DishSearchContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default Menu

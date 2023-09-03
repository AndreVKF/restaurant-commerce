import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/authentication"
import { FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import { Container, MainContainer, DishSearchContainer } from "./styles"

import HeaderMenu from "../../components/HeaderMenu"
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import DishSearch from "../../components/DishSearch"
import RedirectSearch from "../../components/RedirectSearch"
import Loading from "../../components/Loading"

import { api } from "../../services/api"
import { useGetDimensions } from "../../hooks/dimensions"
import { ROUTES } from "../../common/constants"
import { toast } from "react-toastify"
import theme from "../../styles/theme"
import { breakpoints } from "../../styles/utils"

const Menu = () => {
  const navigate = useNavigate()
  const { isAdmin, logout, userData } = useAuthContext()

  const { width } = useGetDimensions()

  const [isLoading, setIsLoading] = useState(true)
  const [filterFavorites, setFilterFavorites] = useState(false)
  const [filterText, setFilterText] = useState("")
  const [dishesArray, setDishesArray] = useState([])
  const [favoritesArray, setFavoritesArray] = useState([])
  const [filteredDishesArray, setFilteredDishesArray] = useState([])

  const handleGoToNewDish = () => {
    navigate("/create_dish")
  }

  const handleGoToCart = () => {
    navigate("/cart")
  }

  const handleExit = () => {
    navigate("/")
    logout()
  }

  useEffect(() => {
    const desktopWidth = /\d+/.exec(breakpoints.sm)

    if (desktopWidth.length === 0) return

    const limitWidth = Number(desktopWidth[0])

    if (width > limitWidth) {
      navigate("/")
    }
  }, [width])

  useEffect(() => {
    setIsLoading(true)

    const fetchDishes = async () => {
      const resp = await api.get(ROUTES.DISHES_DETAILS)
      setDishesArray(resp.data)
    }

    const fetchFavorites = async () => {
      const resp = await api.get(`${ROUTES.FAVORITES}/${userData.id_user}`)
      const favorites = resp.data.map((favorite) => {
        return favorite.id_dish
      })
      setFavoritesArray(favorites)
    }

    const promisesArray = [fetchDishes(), fetchFavorites()]

    Promise.all(promisesArray)
      .catch(() => toast.error("Erro ao buscar dados!!"))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (isLoading) return

    let prevDishes = [...dishesArray]

    if (filterFavorites) {
      prevDishes = prevDishes.filter((dish) => {
        return favoritesArray.includes(dish.id_dish)
      })
    }

    if (filterText === "") {
      setFilteredDishesArray(prevDishes)
      return
    }

    let filterTextLowerCase = filterText.toLowerCase()
    let filteredDishes = prevDishes.filter((dish) => {
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

    setFilteredDishesArray(filteredDishes)
  }, [isLoading, filterFavorites, filterText, dishesArray])

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
          {isAdmin && (
            <RedirectSearch text={"Novo Prato"} onClick={handleGoToNewDish} />
          )}

          <RedirectSearch text={"Pedidos"} onClick={handleGoToCart} />

          {!isAdmin && (
            <>
              <RedirectSearch
                text={"Meus favoritos"}
                onClick={() => setFilterFavorites(!filterFavorites)}
                $color={filterFavorites && theme.COLORS.TOMATO_200}
              />
            </>
          )}

          {filteredDishesArray &&
            filteredDishesArray.map((dish) => {
              return <DishSearch key={dish.id_dish} dish={dish} />
            })}
          <RedirectSearch text={"Sair"} onClick={handleExit} />
        </DishSearchContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default Menu

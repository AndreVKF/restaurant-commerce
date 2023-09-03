import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import {
  Container,
  MainContainer,
  BannerContainer,
  DishesRouletteContainer,
  DishesContainer,
} from "./styles"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HomeBanner from "../../components/HomeBanner"
import DishSlider from "../../components/DishSlider"
import Loading from "../../components/Loading"

import { api } from "../../services/api"
import { groupDishByCategory } from "../../common/functions"
import { ROUTES } from "../../common/constants"
import { useAuthContext } from "../../hooks/authentication"

const Home = () => {
  const { userData } = useAuthContext()
  const [isLoading, setIsLoading] = useState(true)
  const [filterText, setFilterText] = useState("")

  const [dishesArray, setDishesArray] = useState([])
  const [groupedDishesObj, setGroupedDishesObj] = useState({})
  const [filterFavorites, setFilterFavorites] = useState(false)
  const [filteredGroupedDishesObj, setFilteredGroupedDishesObj] = useState({})
  const [userFavoriteDishes, setUserFavoriteDishes] = useState([])

  useEffect(() => {
    setIsLoading(true)

    const fetchDishes = async () => {
      const resp = await api.get(ROUTES.DISHES_DETAILS)

      const dishesArray = resp.data
      setDishesArray(dishesArray)
    }

    const fetchFavorites = async () => {
      const resp = await api.get(`${ROUTES.FAVORITES}/${userData.id_user}`)

      const userFavoritesDishes = resp.data
      const userFavoritesArray = userFavoritesDishes.map((favorite) => {
        return favorite.id_dish
      })
      setUserFavoriteDishes(userFavoritesArray)
    }

    const promisesArray = [fetchDishes(), fetchFavorites()]

    Promise.all(promisesArray)
      .catch(() => toast.error("Erro ao buscar dados!!"))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (isLoading) return

    // add favorite tag
    const dishesArrayWithFavorite = dishesArray.map((dish) => {
      return {
        ...dish,
        isFavorite: userFavoriteDishes.includes(dish.id_dish),
      }
    })

    const groupedDishes = groupDishByCategory(dishesArrayWithFavorite)
    setGroupedDishesObj(groupedDishes)
  }, [isLoading])

  useEffect(() => {
    if (isLoading) return

    if (filterText === "" && !filterFavorites) {
      setFilteredGroupedDishesObj(groupedDishesObj)
      return
    }

    if (filterFavorites) {
      let filteredDishes = []

      Object.keys(groupedDishesObj).forEach((category) => {
        groupedDishesObj[category].forEach((dish) => {
          if (dish.isFavorite) {
            filteredDishes.push(dish)
          }
        })
      })
      const filteredGroupedDishes = groupDishByCategory(filteredDishes)
      setFilteredGroupedDishesObj(filteredGroupedDishes)
      return
    }

    let filteredDishes = []
    let filterTextLowerCase = filterText.toLowerCase()

    Object.keys(groupedDishesObj).forEach((category) => {
      groupedDishesObj[category].forEach((dish) => {
        if (filterFavorites) {
          if (!dish.isFavorite) return
        }

        let dishName = dish.dish_name.toLowerCase()
        let ingredientsArray = dish.ingredients
          .split(",")
          .map((ing) => ing.toLowerCase())

        if (dishName.includes(filterTextLowerCase)) {
          filteredDishes.push(dish)
          return
        }

        for (let ingredient of ingredientsArray) {
          if (ingredient.includes(filterTextLowerCase)) {
            filteredDishes.push(dish)
            return
          }
        }
      })
    })
    const filteredGroupedDishes = groupDishByCategory(filteredDishes)
    setFilteredGroupedDishesObj(filteredGroupedDishes)
  }, [isLoading, filterText, filterFavorites, groupedDishesObj])

  return isLoading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Header
        filterText={filterText}
        setFilterText={setFilterText}
        filterFavorites={filterFavorites}
        setFilterFavorites={setFilterFavorites}
      />
      <MainContainer>
        <BannerContainer>
          <HomeBanner />
        </BannerContainer>

        <DishesContainer>
          {filteredGroupedDishesObj &&
            Object.keys(filteredGroupedDishesObj).map((key, idx) => {
              const dishCategoryArray = filteredGroupedDishesObj[key]

              return (
                <DishesRouletteContainer key={idx}>
                  <DishSlider category={key} dishesArray={dishCategoryArray} />
                </DishesRouletteContainer>
              )
            })}
        </DishesContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default Home

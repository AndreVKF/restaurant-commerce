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

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [filterText, setFilterText] = useState("")

  const [groupedDishesObj, setGroupedDishesObj] = useState({})
  const [filteredGroupedDishesObj, setFilteredGroupedDishesObj] = useState({})

  useEffect(() => {
    setIsLoading(true)

    api
      .get(ROUTES.DISHES_DETAILS)
      .then((resp) => {
        if (resp.data) {
          const groupedDishes = groupDishByCategory(resp.data)
          setGroupedDishesObj(groupedDishes)
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Erro interno do servidor!!")
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (isLoading) return

    if (filterText === "") {
      setFilteredGroupedDishesObj(groupedDishesObj)
      return
    }

    let filteredDishes = []
    let filterTextLowerCase = filterText.toLowerCase()

    Object.keys(groupedDishesObj).forEach((category) => {
      groupedDishesObj[category].forEach((dish) => {
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
  }, [isLoading, filterText, groupedDishesObj])

  return isLoading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Header filterText={filterText} setFilterText={setFilterText} />
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

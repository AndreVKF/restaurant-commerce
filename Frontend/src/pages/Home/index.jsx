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

import { api } from "../../services/api"
import { groupDishByCategory } from "../../common/functions"
import { ROUTES } from "../../common/constants"

const Home = () => {
  const [groupedDishesObj, setGroupedDishesObj] = useState({})

  useEffect(() => {
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
          toast.error(err.response)
        } else {
          toast.error("Erro interno do servidor!!")
        }
      })
  }, [])

  return (
    <Container>
      <Header />
      <MainContainer>
        <BannerContainer>
          <HomeBanner />
        </BannerContainer>

        <DishesContainer>
          {groupedDishesObj &&
            Object.keys(groupedDishesObj).map((key, idx) => {
              const dishCategoryArray = groupedDishesObj[key]

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

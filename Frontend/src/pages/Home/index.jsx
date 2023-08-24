import {
  Container,
  MainContainer,
  BannerContainer,
  DishesRouletteContainer,
} from "./styles"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HomeBanner from "../../components/HomeBanner"
import DishSlider from "../../components/DishSlider"

const index = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <BannerContainer>
          <HomeBanner />
        </BannerContainer>

        <DishesRouletteContainer>
          <DishSlider />
        </DishesRouletteContainer>

        <DishesRouletteContainer>
          <DishSlider />
        </DishesRouletteContainer>

        <DishesRouletteContainer>
          <DishSlider />
        </DishesRouletteContainer>

        <DishesRouletteContainer>
          <DishSlider />
        </DishesRouletteContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default index

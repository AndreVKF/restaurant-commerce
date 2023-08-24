// import Swiper core and required modules
import { Navigation, A11y, EffectFade } from "swiper/modules"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css/bundle"

import { Container, SwiperContainer } from "./styles"

import DishCard from "../DishCard"

const index = ({ props }) => {
  return (
    <Container>
      <h2>Refeições</h2>

      <SwiperContainer>
        <Swiper
          // install Swiper modules
          modules={[Navigation, EffectFade, A11y]}
          spaceBetween={8}
          slidesPerView={2}
          loop
          navigation
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <DishCard />
          </SwiperSlide>
          <SwiperSlide>
            <DishCard />
          </SwiperSlide>
          <SwiperSlide>
            <DishCard />
          </SwiperSlide>
          <SwiperSlide>
            <DishCard />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </Container>
  )
}

export default index

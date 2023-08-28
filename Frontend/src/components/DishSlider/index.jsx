// import Swiper core and required modules
import { Navigation, A11y, EffectFade } from "swiper/modules"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css/bundle"

import { Container, SwiperContainer } from "./styles"

import DishCard from "../DishCard"

import { useEffect, useState } from "react"
import { useGetDimensions } from "../../hooks/dimensions"

import { breakpoints } from "../../styles/utils"

const DishSlider = ({ category, dishesArray }) => {
  const [numberSlides, setNumberSlides] = useState(2)
  const { width, height } = useGetDimensions()

  useEffect(() => {
    const xlBreakpoint = Number(breakpoints.fullscreen.replace(/\D/g, ""))

    if (width >= xlBreakpoint) {
      setNumberSlides(4)
    } else if (width >= 1400) {
      setNumberSlides(3)
    } else {
      setNumberSlides(2)
    }
  }, [width])

  return (
    <Container>
      <h2>{category}</h2>

      <SwiperContainer>
        <Swiper
          // install Swiper modules
          modules={[Navigation, EffectFade, A11y]}
          spaceBetween={120}
          slidesPerView={numberSlides}
          loop={true}
          navigation
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {dishesArray &&
            dishesArray.map((dish, idx) => {
              return (
                <SwiperSlide key={dish.id_dish}>
                  <DishCard dish={dish} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </SwiperContainer>
    </Container>
  )
}

export default DishSlider

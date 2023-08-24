import styled from "styled-components"

import { poppins_200_medium } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;

  > h2 {
    ${poppins_200_medium}
    font-size: 1.8rem;
  }
`

export const SwiperContainer = styled.div`
  width: 100%;
  margin-top: 2.4rem;

  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  .swiper-button-prev::after {
    font-size: 3.4rem;
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  .swiper-button-next::after {
    font-size: 3.4rem;
  }
`

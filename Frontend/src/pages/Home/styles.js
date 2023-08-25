import styled from "styled-components"

import { devices } from "../../styles/utils"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
export const MainContainer = styled.main`
  flex: 1;
`
export const BannerContainer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
  padding-left: 0.6rem;
  padding-right: 1.6rem;

  @media screen and ${devices.desktop} {
    padding-top: 2rem;
    padding-left: 5.4rem;
    padding-right: 12.4rem;
  }
`

export const DishesRouletteContainer = styled.div`
  padding: 2.4rem;

  @media screen and ${devices.desktop} {
    padding: 6.2rem 12.3rem 4.8rem;
  }
`

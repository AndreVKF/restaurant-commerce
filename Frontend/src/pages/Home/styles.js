import styled from "styled-components"

import { desktop_main_container_padding, devices } from "../../styles/utils"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
export const MainContainer = styled.main`
  flex: 1;

  padding-bottom: 4.8rem;
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

export const DishesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  gap: 2.4rem;
  padding-left: calc(2rem + 2vw);
  padding-right: calc(2rem + 2vw);

  @media screen and ${devices.desktop} {
    ${desktop_main_container_padding}
    gap: 4.8rem;
  }
`

export const DishesRouletteContainer = styled.div`
  @media screen and ${devices.desktop} {
  }

  @media screen and ${devices.fullscreen} {
  }
`

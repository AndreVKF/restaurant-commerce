import styled from "styled-components"

import {
  desktop_main_container_padding,
  poppins_200_medium,
  poppins_400_medium,
  devices,
} from "../../styles/utils"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
`

export const MainContentDesktop = styled.div`
  display: none;

  flex: 1;

  ${desktop_main_container_padding}
  padding-top: 3.4rem;
  padding-bottom: 20rem;

  @media screen and ${devices.desktop} {
    display: grid;

    grid-template-areas:
      "goback goback"
      "cart payment";

    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 1fr;

    row-gap: 3.4rem;
  }
`

export const GoBackContainer = styled.div`
  grid-area: goback;
`

export const DishesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 2.4rem;
  }

  @media screen and ${devices.desktop} {
    grid-area: cart;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > h2 {
      ${poppins_400_medium}
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    > h3 {
      ${poppins_200_medium}
    }
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  @media screen and ${devices.desktop} {
    grid-area: payment;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    width: 53rem;
    height: 58rem;

    > h2 {
      ${poppins_400_medium}
    }
  }
`

export const MainContentMobile = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: start;

  padding: 5.6rem 9rem 3rem 3.5rem;

  > button {
    margin-top: 3.2rem;
  }

  @media screen and ${devices.desktop} {
    display: none;
  }
`

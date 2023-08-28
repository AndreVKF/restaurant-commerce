import styled from "styled-components"
import { devices } from "../../styles/utils"

import { poppins_300_regular, poppins_400_medium } from "../../styles/utils"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;
  > img {
    width: 26.4rem;
    height: 26.4rem;
    object-fit: cover;
  }

  @media screen and ${devices.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: calc(4rem + 2vw);

    > img {
      width: min(39rem, 28rem + 8vw);
      height: min(39rem, 28rem + 8vw);
      object-fit: cover;
    }
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.4rem;

  > h2,
  > p {
    text-align: center;
  }

  @media screen and ${devices.desktop} {
    > h2,
    > p {
      width: 100%;
      text-align: start;
    }

    > h2 {
      ${poppins_400_medium}
    }

    > p {
      ${poppins_300_regular}
    }
  }
`

export const IngredientsContainer = styled.div`
  display: grid;

  width: 100%;

  grid-template-columns: repeat(3, 1fr);
  row-gap: 2.4rem;
  place-items: center;

  @media screen and ${devices.desktop} {
    justify-items: start;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
  }

  @media screen and ${devices.fullscreen} {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  width: 100%;
  margin-top: 2.4rem;

  @media screen and ${devices.desktop} {
    justify-content: start;
    margin-top: 2.4rem;

    > button {
      > svg {
        display: none;
      }

      max-width: 16rem;
    }
  }
`

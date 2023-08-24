import styled from "styled-components"

import { poppins_100_medium, roboto_small_regular } from "../../styles/utils"

export const Container = styled.div`
  width: 21rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.2rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  padding: 2.4rem 0.2rem;

  position: relative;

  > img {
    width: 8.8rem;
    height: 8.8rem;
  }

  > h2 {
    ${poppins_100_medium}
    text-align: center;
  }
`

export const MarkersContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  height: 2.4rem;
  width: 2.4rem;

  > svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const PriceTag = styled.div`
  ${roboto_small_regular}
  color: ${({ theme }) => theme.COLORS.CAKE_100};
`

export const ButtonContainer = styled.div`
  width: 16.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  > div {
    width: fit-content;
  }

  > button {
    width: 100%;
  }
`

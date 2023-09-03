import styled from "styled-components"

import { poppins_200_medium, roboto_smallest_regular } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 1.6rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
    object-fit: cover;
  }
`

export const CartDishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > h3 {
      ${poppins_200_medium}
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > span {
      ${roboto_smallest_regular}
      color: ${({ theme }) => theme.COLORS.LIGHT_400}
    }
  }

  > span {
    ${roboto_smallest_regular}
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: pointer;
  }
`

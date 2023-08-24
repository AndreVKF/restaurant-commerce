import styled from "styled-components"

import { poppins_200_medium, roboto_small_regular } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.8rem;

  padding: 1.4rem 0.2rem 1.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  > img {
    width: 4.8rem;
    height: 4.8rem;
  }

  > h2 {
    ${poppins_200_medium}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > span {
    ${roboto_small_regular}
    color: ${({ theme }) => theme.COLORS.CAKE_100}
  }
`

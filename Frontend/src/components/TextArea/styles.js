import styled from "styled-components"

import { roboto_small_regular } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;

  > textarea {
    ${roboto_small_regular}

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding: 1.4rem;
    border: none;
    border-radius: 0.8rem;
  }
`

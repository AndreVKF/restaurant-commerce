import styled from "styled-components"

import { poppins_100_medium } from "../../styles/utils"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

  > span {
    ${poppins_100_medium}
    white-space: nowrap;
  }
`

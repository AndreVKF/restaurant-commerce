import styled from "styled-components"

import { roboto_bigger_bold } from "../../styles/utils"

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  > h1 {
    ${roboto_bigger_bold}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

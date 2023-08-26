import styled from "styled-components"

import { roboto_small_regular } from "../../styles/utils"

export const Header = styled.header`
  width: 100%;
  height: 11.4rem;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  > svg {
    cursor: pointer;
  }

  > span {
    ${roboto_small_regular}
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

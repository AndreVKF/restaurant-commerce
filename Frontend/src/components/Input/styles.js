import styled from "styled-components"

import { roboto_small_regular } from "../../styles/utils"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  width: 100%;
  padding: 1.4rem;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > svg {
    transform: scale(1.4);
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:focus {
      outline: none;
    }

    &::placeholder {
      ${roboto_small_regular}
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`

import styled from "styled-components"

import { roboto_smaller_regular } from "../../styles/utils"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.5rem;
  padding-right: 1.2rem;

  > select {
    ${roboto_smaller_regular}
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    padding: 1.4rem;
    border-radius: 0.5rem;

    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;

    > option {
      ${roboto_smaller_regular}
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    &:focus {
      outline: none;
    }
  }

  > svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_400};
    transform: scale(1.2);
  }
`

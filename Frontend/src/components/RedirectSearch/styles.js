import styled from "styled-components"

import { poppins_200_medium } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.8rem;

  padding: 1.4rem 0.2rem 1.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  > span {
    ${poppins_200_medium}
    color: ${(props) =>
      props.$color ? props.$color : props.theme.COLORS.LIGHT_300};
  }

  cursor: pointer;
`

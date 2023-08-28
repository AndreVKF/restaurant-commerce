import styled from "styled-components"
import { poppins_200_medium } from "../../styles/utils"

const sizingObject = {
  small: {
    fontSize: "1.6rem",
    scale: 0.6,
  },
  regular: {
    fontSize: "2.4rem",
    scale: 1,
  },
}

export const Container = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    transform: scale(${(props) => sizingObject[props.$size].scale});
  }

  > span {
    ${poppins_200_medium}
    font-size: ${(props) => sizingObject[props.$size].fontSize};
  }
`

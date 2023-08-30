import styled from "styled-components"

const sizingObject = {
  small: {
    gap: "1.4rem",
    fontSize: "2rem",
    scale: 1,
  },
  medium: {
    gap: "3.2rem",
    fontSize: "2.4rem",
    scale: 1.4,
  },
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => sizingObject[props.$size].gap};

  font-size: ${(props) => sizingObject[props.$size].fontSize};

  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > div {
    display: grid;
    place-items: center;
    height: ${(props) => sizingObject[props.$size].fontSize};
    cursor: pointer;
  }

  > svg {
    transform: scale(${(props) => sizingObject[props.$size].scale});
  }
`

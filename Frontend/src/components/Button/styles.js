import styled from "styled-components"

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${(props) => props.$color || props.theme.COLORS.TOMATO_100};

  width: 100%;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.6rem;

  span,
  p {
    white-space: nowrap;
  }

  svg {
    transform: scale(0.8);
    min-width: 2.4rem;
  }
`

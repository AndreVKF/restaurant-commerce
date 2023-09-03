import styled from "styled-components"

import {
  poppins_100_medium,
  poppins_300_bold,
  roboto_smaller_regular,
  roboto_small_regular,
  roboto_biggest_regular,
  devices,
} from "../../styles/utils"

export const Container = styled.div`
  width: 21rem;
  min-height: 29.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.2rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;
  padding: 2.4rem 0.2rem;

  position: relative;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    object-fit: cover;
    cursor: pointer;
  }

  > h2 {
    ${poppins_100_medium}
    text-align: center;
    cursor: pointer;
  }

  > p {
    display: none;
  }

  @media screen and ${devices.desktop} {
    width: 30.4rem;
    min-height: 46.2rem;
    gap: 1.5rem;
    padding: 2.4rem;
    padding-bottom: 4.6rem;

    > img {
      width: 17.6rem;
      height: 17.6rem;
      object-fit: cover;
    }

    > h2 {
      ${poppins_300_bold}
    }

    > p {
      ${roboto_smaller_regular}
      display: inline;
      text-align: center;
    }
  }
`

export const MarkersContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  height: 2.4rem;
  width: 2.4rem;

  > div {
    svg {
      cursor: pointer;

      & path {
        fill: transparent;
        stroke: ${(props) =>
          props.$isFavoriteDish
            ? props.theme.COLORS.TOMATO_100
            : props.theme.COLORS.LIGHT_100};
        fill: ${(props) =>
          props.$isFavoriteDish
            ? props.theme.COLORS.TOMATO_100
            : "transparent"};

        stroke-width: 20;

        stroke-dasharray: 800;
        stroke-dashoffset: 0;
      }

      path {
        animation: ${(props) =>
          props.$isFavoriteDish ? "animate-heart 1s linear forwards" : ""};
      }

      @keyframes animate-heart {
        0% {
          stroke-dashoffset: 0;
        }

        40% {
          stroke-dashoffset: 800;
          fill: transparent;
        }

        100% {
          stroke-dashoffset: 1600;
          fill: transparent;
        }

        100% {
          stroke-dashoffset: 1600;
          stroke: ${({ theme }) => theme.COLORS.TOMATO_100};
          fill: ${({ theme }) => theme.COLORS.TOMATO_100};
        }
      }
    }
  }
`

export const PriceTag = styled.div`
  ${roboto_small_regular}
  color: ${({ theme }) => theme.COLORS.CAKE_100};

  @media screen and ${devices.desktop} {
    ${roboto_biggest_regular}
  }
`

export const ButtonContainer = styled.div`
  width: 16.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  > div {
    width: fit-content;
  }

  > button {
    width: 100%;
  }

  @media screen and ${devices.desktop} {
    flex-direction: row;
  }
`

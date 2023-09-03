import styled from "styled-components"

import {
  poppins_200_medium,
  poppins_100_regular,
  poppins_500_medium,
  roboto_small_regular,
  devices,
} from "../../styles/utils"

export const Container = styled.div`
  width: 100%;
  height: 15rem;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;

  > img {
    position: absolute;
    height: 15rem;
    left: -1rem;
    bottom: -0.5rem;
  }

  @media screen and ${devices.desktop} {
    height: 32rem;

    > img {
      height: calc(22rem + 7vw);

      object-fit: contain;
      bottom: -1rem;
    }
  }
`

export const TextBanner = styled.div`
  height: 12rem;
  width: 95%;
  background-image: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  > div {
    max-width: 95%;

    padding-left: 18rem;
    padding-top: 2.6rem;
    padding-bottom: 2.2rem;
    padding-right: 0.8rem;

    overflow: hidden;
    z-index: 1;
  }

  h3 {
    ${poppins_200_medium}
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    ${poppins_100_regular}
    text-overflow: ellipsis;
    line-height: 140%;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media only screen and ${devices.sx} {
    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and ${devices.desktop} {
    height: 26rem;
    align-items: center;

    > div {
      padding-top: 8.8rem;
      padding-left: calc(18rem + 6vw);

      min-width: 42.2rem;
    }

    h3 {
      ${poppins_500_medium}
    }

    p {
      ${roboto_small_regular}
    }
  }

  @media screen and ${devices.fullscreen} {
    > div {
      padding-left: 8rem;
    }

    h3 {
      ${poppins_500_medium}
      font-size: 4.8rem;
    }

    p {
      ${roboto_small_regular}
      font-size: 2rem;
    }
  }
`

import styled from "styled-components"

import {
  poppins_200_medium,
  poppins_100_regular,
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
    left: 0;
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
  align-items: start;

  > div {
    max-width: 95%;

    padding-left: 16rem;
    padding-top: 2.6rem;
    padding-bottom: 2.2rem;
    padding-right: 0.8rem;

    overflow: hidden;
  }

  h3 {
    ${poppins_200_medium}
    font-size: 1.8rem;
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
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

import styled from "styled-components"

import { devices } from "../../styles/utils"

export const HeaderMobile = styled.header`
  width: 100%;
  height: 11.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  @media screen and ${devices.desktop} {
    display: none;
  }
`
export const LogoBanner = styled.div`
  display: flex;

  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2.46rem;
    height: 2.46rem;
    object-fit: contain;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 2.11rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media screen and ${devices.desktop} {
    min-width: 16rem;
  }
`

export const ReceiptBanner = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  > span {
    width: 2rem;
    height: 2rem;
    position: absolute;
    font-size: 1.2rem;
    top: -8px;
    right: -8px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    text-align: center;
    border-radius: 9.9rem;
  }
`

export const HeaderDesktop = styled.header`
  display: none;

  @media screen and ${devices.desktop} {
    width: 100%;
    height: 10.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 3.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 2.8rem 12.3rem;

    > button {
      min-width: 10rem;
      max-width: 21.6rem;
    }

    > div {
      > svg {
        transform: rotate(90deg);
      }
    }
  }
`

export const InputBanner = styled.div`
  flex: 1;
  min-width: 22rem;
  max-width: 81rem;
`

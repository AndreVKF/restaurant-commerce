import styled from "styled-components"

import {
  roboto_smallest_regular,
  roboto_small_regular,
  roboto_bigger_bold,
  desktop_main_container_padding,
  devices,
} from "../../styles/utils"

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
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  h1 {
    ${roboto_bigger_bold}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    white-space: nowrap;
  }

  span {
    ${roboto_smallest_regular}
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  @media screen and ${devices.desktop} {
    min-width: 16rem;

    > div {
      position: relative;
    }

    span {
      position: absolute;
      bottom: -1.6rem;
      right: 0;
    }
  }
`

export const ReceiptBanner = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  cursor: pointer;

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

    padding: 2.8rem 0;
    ${desktop_main_container_padding}

    > button {
      min-width: 12rem;
      max-width: 21.6rem;
    }

    > div {
      > svg {
        transform: rotate(90deg);
        cursor: pointer;
      }
    }
  }
`

export const OptionsBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  cursor: pointer;

  span {
    ${roboto_small_regular}
    color: ${(props) =>
      props.$filterFavorites
        ? props.theme.COLORS.TOMATO_400
        : props.theme.COLORS.LIGHT_300};
    white-space: nowrap;
  }
`

export const InputBanner = styled.div`
  flex: 1;
  min-width: 22rem;
  max-width: 81rem;
`

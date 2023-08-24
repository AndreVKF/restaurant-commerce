import styled from "styled-components"

import {
  roboto_smaller_bold,
  roboto_smallest_regular,
} from "../../styles/utils"

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  padding: 2.9rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  > img {
    width: 2.2rem;
    height: 1.6rem;
  }

  > h4 {
    ${roboto_smaller_bold}
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`

export const CopyrightBanner = styled.div`
  span {
    ${roboto_smallest_regular}
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`

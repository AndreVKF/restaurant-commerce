import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  height: 11.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;
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

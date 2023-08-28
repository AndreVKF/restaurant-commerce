import styled from "styled-components"

import {
  roboto_big_bold,
  roboto_small_regular,
  poppins_400_medium,
  devices,
} from "../../styles/utils"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 15.8rem 8.5rem 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${devices.desktop} {
    display: grid;
    grid-template-areas: "header form";
    grid-template-columns: 1fr 1fr;

    justify-items: end;
    align-items: center;
    padding: 0;
    padding-bottom: 4rem;

    padding-right: 4rem;
    padding-left: 4rem;
    gap: calc(8rem + 8vw);
  }
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  gap: 1.2rem;

  > svg {
    transform: scale(1.6);
  }

  > h1 {
    ${roboto_big_bold}
    font-size: 3.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    white-space: nowrap;
  }

  @media screen and ${devices.desktop} {
    grid-area: header;
    padding-bottom: 12rem;
  }
`

export const FormContainer = styled.form`
  margin-top: 7.4rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-bottom: 3.2rem;

  > span,
  a {
    width: 100%;
    text-align: center;
    margin-top: 3.2rem;
  }

  > h2 {
    display: none;
  }

  @media screen and ${devices.desktop} {
    grid-area: form;
    margin: 0;

    background: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;
    min-width: 40rem;
    max-width: 47.6rem;
    justify-self: start;

    > h2 {
      ${poppins_400_medium}

      display: inline;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    ${roboto_small_regular}
    color: ${({ theme }) => {
      theme.COLORS.LIGHT_400
    }};
  }
`

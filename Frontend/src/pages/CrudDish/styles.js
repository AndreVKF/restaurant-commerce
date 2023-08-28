import styled from "styled-components"

import {
  poppins_100_medium,
  poppins_400_medium,
  roboto_small_regular,
  devices,
} from "../../styles/utils"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.div`
  padding: 1rem 3.2rem 5.3rem;
  flex: 1;

  h1 {
    ${poppins_400_medium}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }

  @media screen and ${devices.desktop} {
    padding: 4rem 12.3rem 12rem;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;

  @media screen and ${devices.desktop} {
    display: grid;
    grid-template:
      "upload-img dish-name dish-category" 8rem
      "dish-ingredients dish-ingredients dish-price" min-content
      "dish-description dish-description dish-description" 20.4rem / 1fr 1fr 1fr;
    gap: 3.2rem;
  }
`

export const FormInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > label {
    ${roboto_small_regular}
    color: ${({ theme }) => {
      theme.COLORS.LIGHT_400
    }};
  }

  @media screen and ${devices.desktop} {
    grid-area: ${(props) => props.$name};
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media screen and ${devices.desktop} {
    display: flex;
    justify-content: end;
    align-items: end;
    gap: 2rem;

    margin-top: 4.8rem;

    > button {
      max-width: 17.2rem;
    }
  }
`

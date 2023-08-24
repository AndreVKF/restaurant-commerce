import styled from "styled-components"

import {
  poppins_100_medium,
  poppins_400_medium,
  roboto_small_regular,
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
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
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

  > span {
    ${poppins_100_medium}
    color: ${({ theme }) => {
      theme.COLORS.LIGHT_100
    }};
  }
`

export const ButtonContainer = styled.div``

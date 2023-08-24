import styled from "styled-components"

import { roboto_big_bold, roboto_small_regular } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 15.8rem 8.5rem 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    width: 100%;
    text-align: center;
    margin-top: 3.2rem;
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
  }
`

export const FormContainer = styled.form`
  margin-top: 7.4rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-bottom: 3.2rem;
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

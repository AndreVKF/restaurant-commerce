import styled from "styled-components"

import { roboto_bigger_bold } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
`

export const PaymentOptions = styled.div`
  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PaymentOption = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  width: 100%;
  height: 100%;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  background-color: ${(props) =>
    props.$isSelected ? props.theme.COLORS.DARK_800 : "transparent"};

  cursor: pointer;

  > svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const PaymentStatus = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  place-items: center;
  padding: 1rem 0;

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    > h1 {
      text-align: center;
      ${roboto_bigger_bold}
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > img {
      width: 25rem;
      height: 25rem;
      object-fit: cover;
    }

    > svg {
      fill: ${({ theme }) => theme.COLORS.LIGHT_400};
      transform: scale(2);
    }
  }
`

export const FormPaymentContainer = styled.form`
  padding: 6rem 9rem 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 3.8rem;

  > div {
    display: flex;
    gap: 1.7rem;
  }
`
export const FormPaymentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  gap: 0.8rem;
`

import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;
  > img {
    width: 26.4rem;
    height: 26.4rem;
    object-fit: cover;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.4rem;

  > h2,
  > p {
    text-align: center;
  }
`

export const IngredientsContainer = styled.div`
  display: grid;

  width: 100%;

  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.4rem;
  place-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  width: 100%;

  > button {
    width: 140%;
  }
`

import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;
  text-align: center;

  padding-bottom: 12rem;

  > div {
    max-width: 80rem;

    > h1 {
      font-size: 4.8rem;
    }
  }
`

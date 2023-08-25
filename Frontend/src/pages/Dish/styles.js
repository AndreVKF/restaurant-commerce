import styled from "styled-components"

import { devices } from "../../styles/utils"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.main`
  flex: 1;

  padding: 1.6rem 5.6rem 3.4rem;

  > div {
    padding-top: 2rem;
    padding-left: 0.8rem;
  }

  @media screen and ${devices.desktop} {
    padding-left: 12.1rem;
    padding-right: 12.1rem;
  }
`

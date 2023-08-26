import { Container, LogoBanner, CopyrightBanner } from "./styles"

import LogoDark from "../../assets/icons/LogoDark.svg"

const Footer = () => {
  return (
    <Container>
      <LogoBanner>
        <img src={LogoDark} alt="Logo da food explorer" />
        <h4>food explorer</h4>
      </LogoBanner>
      <CopyrightBanner>
        <span>© 2023 - Todos os direitos reservados.</span>
      </CopyrightBanner>
    </Container>
  )
}

export default Footer

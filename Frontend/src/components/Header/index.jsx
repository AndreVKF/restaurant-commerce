import { Header, LogoBanner, ReceiptBanner } from "./styles"

import Menu from "../../assets/icons/Menu.svg"
import Logo from "../../assets/icons/Logo.svg"
import Receipt from "../../assets/icons/Receipt.svg"

const index = () => {
  return (
    <Header>
      <img src={Menu} alt="Ir para o menu" />

      <LogoBanner>
        <img src={Logo} alt="Logo food-explorer" />
        <h1>food explorer</h1>
      </LogoBanner>

      <ReceiptBanner>
        <img src={Receipt} alt="Icone de recibo" />
        <span>0</span>
      </ReceiptBanner>
    </Header>
  )
}

export default index

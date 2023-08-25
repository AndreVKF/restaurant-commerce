import {
  Header,
  LogoBanner,
  ReceiptBanner,
  HeaderDesktop,
  InputBanner,
} from "./styles"

import { FiSearch, FiUpload } from "react-icons/fi"
import { PiReceipt } from "react-icons/pi"

import Menu from "../../assets/icons/Menu.svg"
import Logo from "../../assets/icons/Logo.svg"
import Receipt from "../../assets/icons/Receipt.svg"

import Input from "../Input"
import Button from "../Button"

const index = () => {
  return (
    <>
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

      <HeaderDesktop>
        <LogoBanner>
          <img src={Logo} alt="Logo food-explorer" />
          <h1>food explorer</h1>
        </LogoBanner>
        <InputBanner>
          <Input
            type="text"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        </InputBanner>
        <Button>
          <PiReceipt size={22} />
          <span>Pedidos (0)</span>
        </Button>

        <div>
          <FiUpload size={28} />
        </div>
      </HeaderDesktop>
    </>
  )
}

export default index

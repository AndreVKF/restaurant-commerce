import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/authentication"

import {
  HeaderMobile,
  LogoBanner,
  ReceiptBanner,
  HeaderDesktop,
  InputBanner,
} from "./styles"

import { FiSearch, FiUpload } from "react-icons/fi"
import { ReactComponent as PiReceipt } from "../../assets/icons/Receipt.svg"

import Menu from "../../assets/icons/Menu.svg"
import Logo from "../../assets/icons/Logo.svg"
import Receipt from "../../assets/icons/Receipt.svg"

import Input from "../Input"
import Button from "../Button"

const Header = () => {
  const navigate = useNavigate()
  const { userData, logout, isAdmin } = useAuthContext()

  const handleGoToNewDish = () => {
    navigate("/create_dish")
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <>
      <HeaderMobile>
        <Link to="menu">
          <img src={Menu} alt="Ir para o menu" />
        </Link>

        <Link to="/">
          <LogoBanner>
            <img src={Logo} alt="Logo food-explorer" />
            <div>
              <h1>food explorer</h1>
              {isAdmin && <span>admin</span>}
            </div>
          </LogoBanner>
        </Link>

        <ReceiptBanner>
          <img src={Receipt} alt="Icone de recibo" />
          <span>0</span>
        </ReceiptBanner>
      </HeaderMobile>

      <HeaderDesktop>
        <Link to="/">
          <LogoBanner>
            <img src={Logo} alt="Logo food-explorer" />
            <div>
              <h1>food explorer</h1>
              {isAdmin && <span>admin</span>}
            </div>
          </LogoBanner>
        </Link>
        <InputBanner>
          <Input
            type="text"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        </InputBanner>
        {isAdmin ? (
          <Button onClick={handleGoToNewDish}>
            <span>Novo prato</span>
          </Button>
        ) : (
          <Button>
            <PiReceipt />
            <span>Pedidos (0)</span>
          </Button>
        )}

        <div>
          <FiUpload size={28} onClick={handleLogout} />
        </div>
      </HeaderDesktop>
    </>
  )
}

export default Header

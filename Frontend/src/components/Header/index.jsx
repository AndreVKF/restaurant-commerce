import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/authentication"
import { useCartContext } from "../../hooks/cart"

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

const Header = ({ filterText, setFilterText }) => {
  const navigate = useNavigate()
  const { userData, logout, isAdmin } = useAuthContext()
  const { cartState } = useCartContext()

  const [cartQuantity, setCartQuantity] = useState(0)

  const handleGoToNewDish = () => {
    navigate("/create_dish")
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  useEffect(() => {
    let quantity = 0

    cartState.forEach((item) => {
      quantity += item.quantity
    })

    setCartQuantity(quantity)
  }, [cartState])

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
          <span>{cartQuantity}</span>
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
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
        </InputBanner>
        {isAdmin ? (
          <Button onClick={handleGoToNewDish}>
            <span>Novo prato</span>
          </Button>
        ) : (
          <Button>
            <PiReceipt />
            <span>Pedidos ({cartQuantity})</span>
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

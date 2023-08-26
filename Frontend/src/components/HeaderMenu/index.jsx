import { Link, useNavigate } from "react-router-dom"

import { Header } from "./styles"

import { ReactComponent as Close } from "../../assets/icons/Close.svg"

const HeaderMenu = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Header>
      <Close onClick={handleClick} />
      <span>Menu</span>
    </Header>
  )
}

export default HeaderMenu

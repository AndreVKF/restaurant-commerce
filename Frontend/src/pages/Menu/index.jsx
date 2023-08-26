import { FiSearch } from "react-icons/fi"

import { Container, MainContainer, DishSearchContainer } from "./styles"

import HeaderMenu from "../../components/HeaderMenu"
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import DishSearch from "../../components/DishSearch"
import RedirectSearch from "../../components/RedirectSearch"

const Menu = () => {
  return (
    <Container>
      <HeaderMenu />
      <MainContainer>
        <Input
          icon={FiSearch}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
        <DishSearchContainer>
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <DishSearch />
          <RedirectSearch text={"Novo Prato"} />
          <RedirectSearch text={"Sair"} />
        </DishSearchContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default Menu

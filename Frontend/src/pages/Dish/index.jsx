import { Container, MainContainer } from "./styles"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import GoBack from "../../components/GoBack"
import DishDetails from "../../components/DishDetails"

const index = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <div>
          <GoBack />
        </div>
        <DishDetails />
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default index

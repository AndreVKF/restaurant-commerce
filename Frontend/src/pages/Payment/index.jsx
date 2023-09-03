import { useCartContext } from "../../hooks/cart"
import { useState } from "react"
import {
  Container,
  MainContentDesktop,
  MainContentMobile,
  PaymentContainer,
  GoBackContainer,
  DishesContainer,
} from "./styles"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import GoBack from "../../components/GoBack"
import CartDish from "../../components/CartDish"
import Button from "../../components/Button"
import PaymentMethodContainer from "../../components/PaymentMethodContainer"

const Payment = () => {
  const { cartState } = useCartContext()
  const [showPayment, setShowPayment] = useState(false)

  const calcTotalCartValue = () => {
    if (cartState.length === 0) return "0,00"

    let totalValue = cartState.reduce((acum, cart) => {
      return acum + (Number(cart.quantity) * Number(cart.price)) / 100
    }, 0)

    return totalValue.toLocaleString("pt-BR")
  }

  return (
    <Container>
      <Header />

      <MainContentDesktop>
        <GoBackContainer>
          <GoBack />
        </GoBackContainer>

        <DishesContainer>
          <h2>Meu pedido</h2>
          <div>
            {cartState &&
              cartState.map((dish) => {
                return <CartDish cartDish={dish} key={dish.id_dish} />
              })}
          </div>
          <h3>Total R$ {calcTotalCartValue()}</h3>
        </DishesContainer>
        <PaymentContainer>
          <h2>Pagamento</h2>
          <PaymentMethodContainer />
        </PaymentContainer>
      </MainContentDesktop>

      <MainContentMobile>
        {showPayment ? (
          <PaymentContainer>
            <h2>Pagamento</h2>
            <PaymentMethodContainer />
          </PaymentContainer>
        ) : (
          <DishesContainer>
            <h2>Meu pedido</h2>
            <div>
              {cartState &&
                cartState.map((dish) => {
                  return <CartDish cartDish={dish} key={dish.id_dish} />
                })}
            </div>
            <h3>Total R$ {calcTotalCartValue()}</h3>
          </DishesContainer>
        )}

        <Button onClick={() => setShowPayment(!showPayment)}>
          <span>
            {showPayment ? "Voltar para pedido" : "Ir para pagamento"}
          </span>
        </Button>
      </MainContentMobile>

      <Footer />
    </Container>
  )
}

export default Payment

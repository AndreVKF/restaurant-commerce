import { useState } from "react"
import { useCartContext } from "../../hooks/cart"
import theme from "../../styles/theme"

import {
  Container,
  PaymentOptions,
  PaymentOption,
  PaymentStatus,
  FormPaymentContainer,
  FormPaymentInputWrapper,
} from "./styles"

import { ReactComponent as Pix } from "../../assets/icons/PIX.svg"
import { ReactComponent as CreditCard } from "../../assets/icons/CreditCard.svg"
import { ReactComponent as ForkKnife } from "../../assets/icons/ForkKnife.svg"
import { ReactComponent as Receipt } from "../../assets/icons/Receipt.svg"

import Input from "../Input"
import Button from "../Button"

const PaymentMethodContainer = () => {
  const { cartState } = useCartContext()
  const paymentInitState = cartState.length > 0 ? "Pix" : ""

  const [paymentMethod, setPaymentMethod] = useState(paymentInitState)
  const [creditCardNumber, setCreditCardNumber] = useState("")
  const [creditCardMaturity, setCreditCardMaturity] = useState("")
  const [creditCardCode, setCreditCardCode] = useState("")

  const handleSetPaymentMethod = (type) => {
    if (cartState.length === 0) return

    setPaymentMethod(type)
  }

  const handleCreditCardNumber = (event) => {
    let value = event.target.value

    if (!/^\d{0,16}$/.test(value)) return

    if (value.length === 16) {
      let formatedCreditCardNumber = value.match(/(\d{4})/g).join(" ")
      setCreditCardNumber(formatedCreditCardNumber)
    } else {
      setCreditCardNumber(value)
    }
  }

  const handleCreditCardMaturity = (event) => {
    let value = event.target.value

    if (!/^\d{0,4}$/.test(value)) return

    if (value.length === 4) {
      let creditCardMaturity = `${value.slice(0, 2)}/${value.slice(2, 4)}`
      setCreditCardMaturity(creditCardMaturity)
    } else {
      setCreditCardMaturity(value)
    }
  }

  const handleCreditCardCode = (event) => {
    let value = event.target.value

    if (!/^\d{0,3}$/.test(value)) return

    setCreditCardCode(value)
  }

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <Container>
      <PaymentOptions>
        <PaymentOption
          $isSelected={paymentMethod === "Pix" ? true : false}
          onClick={() => handleSetPaymentMethod("Pix")}
        >
          <Pix />
          <span>Pix</span>
        </PaymentOption>
        <PaymentOption
          $isSelected={paymentMethod === "CreditCard" ? true : false}
          onClick={() => handleSetPaymentMethod("CreditCard")}
        >
          <CreditCard />
          <span>Crédito</span>
        </PaymentOption>
      </PaymentOptions>

      <PaymentStatus>
        {cartState.length > 0 ? (
          <PaymentStatus>
            {paymentMethod === "Pix" ? (
              <div>
                <img src="./images/Pix_QR.png" alt="Pix QR code" />
              </div>
            ) : paymentMethod === "CreditCard" ? (
              <div>
                <FormPaymentContainer>
                  <FormPaymentInputWrapper>
                    <label htmlFor="credit-card-number">Número do Cartão</label>
                    <Input
                      type="text"
                      id="credit-cart-number"
                      placeholder="0000 0000 0000 0000"
                      value={creditCardNumber}
                      onChange={handleCreditCardNumber}
                    />
                  </FormPaymentInputWrapper>

                  <div>
                    <FormPaymentInputWrapper>
                      <label htmlFor="credit-card-expiration">Validade</label>
                      <Input
                        type="text"
                        id="credit-cart-expiration"
                        placeholder="04/25"
                        value={creditCardMaturity}
                        onChange={handleCreditCardMaturity}
                      />
                    </FormPaymentInputWrapper>

                    <FormPaymentInputWrapper>
                      <label htmlFor="credit-card-code">CVC</label>
                      <Input
                        type="text"
                        id="credit-cart-code"
                        placeholder="000"
                        value={creditCardCode}
                        onChange={handleCreditCardCode}
                      />
                    </FormPaymentInputWrapper>
                  </div>

                  <Button color={theme.COLORS.TOMATO_100} onClick={handleClick}>
                    <Receipt />
                    <span>Finalizar pagamento</span>
                  </Button>
                </FormPaymentContainer>
              </div>
            ) : (
              <div></div>
            )}
          </PaymentStatus>
        ) : (
          <PaymentStatus>
            <div>
              <ForkKnife />
              <h1>Não existem pratos selecionados !</h1>
            </div>
          </PaymentStatus>
        )}
      </PaymentStatus>
    </Container>
  )
}

export default PaymentMethodContainer

import { createContext, useReducer, useContext, useEffect } from "react"

const initialState = []
const CartContext = createContext({})

const cartReducer = (state, action) => {
  let { type } = action
  let { id_dish, price, quantity } = action.data

  switch (type) {
    case "ADD":
      let addedToCart = false

      const newCart = state.map((item) => {
        if (item.id_dish === id_dish) {
          console.log(item.quantity)
          item.quantity = item.quantity + quantity
          item.price = price

          addedToCart = true
        }

        return item
      })

      if (!addedToCart) {
        newCart.push({ id_dish, price, quantity })
      }

      return newCart

    case "REMOVE":
      const cleanCart = state.filter((item) => {
        return item.id_dish !== id_dish
      })

      return cleanCart

    default:
      console.log(`Action ${action} desconhecida!!`)
  }
}

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  return context
}

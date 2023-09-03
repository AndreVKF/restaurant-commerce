import { createContext, useReducer, useContext, useEffect } from "react"
import { toast } from "react-toastify"

const CartContext = createContext({})
const initialState = []

const cartReducer = (state, action) => {
  let { type } = action

  switch (type) {
    case "ADD": {
      let { id_dish, dish_name, dish_image_url, price, quantity } = action.data
      let addedToCart = false

      const newCart = state.map((item) => {
        if (item.id_dish === id_dish) {
          item.quantity = item.quantity + quantity
          item.price = price

          addedToCart = true
        }

        return item
      })

      if (!addedToCart) {
        newCart.push({ id_dish, dish_name, dish_image_url, price, quantity })
      }

      toast.success("Prato adicionado com sucesso!")
      return newCart
    }

    case "REMOVE": {
      let { id_dish } = action.data

      const cleanCart = state.filter((item) => {
        return item.id_dish !== id_dish
      })

      return cleanCart
    }

    case "ERASE": {
      return initialState
    }

    default:
      console.log(`Action ${action} desconhecida!!`)
  }
}

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState)

  const handleAddToCart = ({ dish, quantity }) => {
    const purchase = {
      id_dish: dish.id_dish,
      dish_name: dish.dish_name,
      dish_image_url: dish.dish_image_url,
      price: dish.dish_price,
      quantity: Number(quantity),
    }

    cartDispatch({ type: "ADD", data: purchase })
  }

  const handleRemoveDish = ({ id_dish }) => {
    cartDispatch({ type: "REMOVE", data: { id_dish } })
  }

  const handleEraseCart = () => {
    cartDispatch({ type: "ERASE" })
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        handleAddToCart,
        handleRemoveDish,
        handleEraseCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)

  return context
}

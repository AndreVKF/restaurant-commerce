import React from "react"
import ReactDOM from "react-dom/client"

import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"

import { Toast } from "./services/toast"
import "react-toastify/dist/ReactToastify.css"

import { AuthProvider } from "./hooks/authentication"
import { CartProvider } from "./hooks/cart"
import Routes from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <CartProvider>
          <Routes />
          <Toast />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)

import React from "react"
import ReactDOM from "react-dom/client"

import theme from "./styles/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"

import Home from "./pages/Home"
import Dish from "./pages/Dish"
import Menu from "./pages/Menu"
import CrudDish from "./pages/CrudDish"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
)

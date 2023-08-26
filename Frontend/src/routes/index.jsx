import { BrowserRouter } from "react-router-dom"

import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"

import { useAuthContext } from "../hooks/authentication"

const Routes = () => {
  const { userData } = useAuthContext()

  return (
    <BrowserRouter>{userData ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}

export default Routes

/*
  <BrowserRouter>
    <Router>
      <Routes path="/" element={<Resource/>} />
      <Routes />
      <Routes />
      <Routes />
    </Router>
  </BrowserRouter>
*/

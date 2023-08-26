import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import NotFound from "../pages/NotFound"

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AuthRoutes

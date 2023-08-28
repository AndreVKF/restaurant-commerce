import { Routes, Route } from "react-router-dom"

import CrudDish from "../pages/CrudDish"
import Dish from "../pages/Dish"
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id_dish" element={<Dish />} />
      <Route path="/update_dish/:id_dish" element={<CrudDish />} />
      <Route path="/create_dish" element={<CrudDish />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes

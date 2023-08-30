import { useState } from "react"
import { Container } from "./styles"

import { ReactComponent as Plus } from "../../assets/icons/Plus.svg"
import { ReactComponent as Minus } from "../../assets/icons/Minus.svg"

const DishAdder = ({ size = "small", count, setCount }) => {
  const handleAdd = () => {
    setCount((prev) => {
      const prevCount = Number(prev)
      const newCount = String(prevCount + 1).padStart(2, "0")

      return newCount
    })
  }

  const handleMinus = () => {
    setCount((prev) => {
      const prevCount = Number(prev)
      let newCount = prevCount - 1

      if (newCount <= 1) {
        return "01"
      } else {
        return String(newCount).padStart(2, "0")
      }
    })
  }

  return (
    <Container $size={size}>
      <div onClick={handleMinus}>
        <Minus />
      </div>
      <p>{count}</p>
      <div onClick={handleAdd}>
        <Plus />
      </div>
    </Container>
  )
}

export default DishAdder

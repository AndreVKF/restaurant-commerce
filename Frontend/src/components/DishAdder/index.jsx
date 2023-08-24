import { Container } from "./styles"

import { ReactComponent as Plus } from "../../assets/icons/Plus.svg"
import { ReactComponent as Minus } from "../../assets/icons/Minus.svg"

const index = ({ size = "small" }) => {
  return (
    <Container $size={size}>
      <Minus />
      <p>01</p>
      <Plus />
    </Container>
  )
}

export default index

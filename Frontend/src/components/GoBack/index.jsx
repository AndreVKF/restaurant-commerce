import { Container } from "./styles"

import { ReactComponent as LeftArrow } from "../../assets/icons/CaretLeft.svg"

const GoBack = ({ size = "regular" }) => {
  return (
    <Container $size={size}>
      <LeftArrow />
      <span>voltar</span>
    </Container>
  )
}

export default GoBack

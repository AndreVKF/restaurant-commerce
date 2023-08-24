import { Container } from "./styles"

import { ReactComponent as LeftArrow } from "../../assets/icons/CaretLeft.svg"

const index = ({ size = "regular" }) => {
  return (
    <Container $size={size}>
      <LeftArrow />
      <span>voltar</span>
    </Container>
  )
}

export default index

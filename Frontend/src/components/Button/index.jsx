import { Container } from "./styles"

const index = ({ children, color, ...rest }) => {
  return (
    <Container $color={color} {...rest}>
      {children}
    </Container>
  )
}

export default index

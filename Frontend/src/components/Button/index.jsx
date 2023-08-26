import { Container } from "./styles"

const Button = ({ children, color, ...rest }) => {
  return (
    <Container $color={color} {...rest}>
      {children}
    </Container>
  )
}

export default Button

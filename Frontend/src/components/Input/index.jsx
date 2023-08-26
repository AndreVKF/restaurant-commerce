import { Container } from "./styles"

const Input = ({ icon: Icon, children, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon />}
      {children}

      <input {...rest} />
    </Container>
  )
}

export default Input

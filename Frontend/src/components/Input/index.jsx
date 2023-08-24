import { Container } from "./styles"

const index = ({ icon: Icon, children, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon />}
      {children}

      <input {...rest} />
    </Container>
  )
}

export default index

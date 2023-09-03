import { Container } from "./styles"

const RedirectSearch = ({ text, onClick, ...rest }) => {
  return (
    <Container onClick={onClick} {...rest}>
      <span>{text}</span>
    </Container>
  )
}

export default RedirectSearch

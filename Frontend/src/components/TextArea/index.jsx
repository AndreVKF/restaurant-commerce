import { Container } from "./styles"

const index = ({ ...rest }) => {
  return (
    <Container>
      <textarea cols="30" rows="10" {...rest}></textarea>
    </Container>
  )
}

export default index

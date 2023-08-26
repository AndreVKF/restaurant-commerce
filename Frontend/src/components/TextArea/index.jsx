import { Container } from "./styles"

const TextArea = ({ ...rest }) => {
  return (
    <Container>
      <textarea cols="30" rows="10" {...rest}></textarea>
    </Container>
  )
}

export default TextArea

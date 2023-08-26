import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

import { ReactComponent as LeftArrow } from "../../assets/icons/CaretLeft.svg"

const GoBack = ({ size = "regular" }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <Container $size={size} onClick={handleClick}>
      <LeftArrow />
      <span>voltar</span>
    </Container>
  )
}

export default GoBack

import {
  Container,
  PriceTag,
  ButtonContainer,
  MarkersContainer,
} from "./styles"

import { ReactComponent as Heart } from "../../assets/icons/Heart.svg"

import Button from "../Button"
import DishAdder from "../DishAdder"

const index = () => {
  return (
    <Container>
      <MarkersContainer>
        <Heart />
      </MarkersContainer>

      <img
        src="/images/Mask group-1.png"
        alt="Imagem de uma receita deliciosa"
      />
      <h2>Torradas de Parma</h2>
      <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
      <PriceTag>
        <span>R$ 25,97</span>
      </PriceTag>
      <ButtonContainer>
        <div>
          <DishAdder />
        </div>
        <Button>
          <span>Incluir</span>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default index

import { useAuthContext } from "../../hooks/authentication"

import {
  Container,
  PriceTag,
  ButtonContainer,
  MarkersContainer,
} from "./styles"

import { ReactComponent as Heart } from "../../assets/icons/Heart.svg"
import { ReactComponent as Pencil } from "../../assets/icons/Pencil.svg"

import Button from "../Button"
import DishAdder from "../DishAdder"

const DishCard = () => {
  const { userData } = useAuthContext()
  const isAdmin = { userData }

  return (
    <Container>
      <MarkersContainer>{isAdmin ? <Pencil /> : <Heart />}</MarkersContainer>

      <img
        src="/images/Mask group-1.png"
        alt="Imagem de uma receita deliciosa"
      />
      <h2>Torradas de Parma</h2>
      <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
      <PriceTag>
        <span>R$ 25,97</span>
      </PriceTag>

      {!isAdmin && (
        <ButtonContainer>
          <div>
            <DishAdder />
          </div>
          <Button>
            <span>Incluir</span>
          </Button>
        </ButtonContainer>
      )}
    </Container>
  )
}

export default DishCard

import { Container, TextBanner } from "./styles"

const HomeBanner = () => {
  return (
    <Container>
      <img
        src="/images/Mask group.png"
        alt="Imagem de comidas saborosas e saudáveis"
      />

      <TextBanner>
        <div>
          <h3>Sabores inigualáveis</h3>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </TextBanner>
    </Container>
  )
}

export default HomeBanner

import { H1, H2, TitleDiv } from '../Header/styles'
import { Container } from './style'

const Footer = () => {
  return (
    <Container>
      <TitleDiv>
        <H1 color={'var(--color-whiteFixed)'}>
          Motors <span>shop</span>
        </H1>
      </TitleDiv>
      <p>© 2022 - Todos os direitos reservados.</p>
      <button>^</button>
    </Container>
  )
}

export default Footer

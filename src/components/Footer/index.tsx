import { H1, H2, TitleDiv } from '../Header/styles'
import { Container } from './style'

const Footer = () => {
  return (
    <Container>
      <TitleDiv>
        <H1>Motors</H1>
        <H2>shop</H2>
      </TitleDiv>
      <p>© 2022 - Todos os direitos reservados.</p>
      <button>^</button>
    </Container>
  )
}

export default Footer

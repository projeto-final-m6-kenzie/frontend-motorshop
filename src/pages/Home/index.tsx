import { Cards } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import { Header, Header_info } from '../../components/Header'
import { Container, HomeDiv, Titulo } from './styles'

const Home = () => {
  return (
    <HomeDiv>
      <Header />
      <Header_info />
      <Titulo>Leilão</Titulo>
      <Carrossel />
      <Titulo>Carros</Titulo>
      <Container>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Container>
      <Titulo>Motos</Titulo>
      <Container>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Container>
    </HomeDiv>
  )
}

export default Home

import { Cards } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import { Header, Header_info } from '../../components/Header'
import { Container, HomeDiv, Titulo } from './styles'

const Home = () => {
  return (
    <HomeDiv>
      <Header />
      <Header_info
        title='Velocidade e experiência em um lugar feito para você'
        subtitle='Um ambiente feito para você explorar o seu melhor'
        button='carros'
      />
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

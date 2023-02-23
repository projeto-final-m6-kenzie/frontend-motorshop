import img_car from '../../assets/imgs/card_car1.png'
import { Cards } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import { Header, Header_info } from '../../components/Header'
import { Container, Container_header, HomeDiv, Titulo } from './styles'
const Home = () => {
  return (
    <HomeDiv>
      <Header />
      <Container_header>
        <Header_info
          title='Velocidade e experiência em um lugar feito para você'
          subtitle='Um ambiente feito para você explorar o seu melhor'
          button='carros'
        />
      </Container_header>
      <Titulo>Leilão</Titulo>
      <Carrossel />
      <Titulo>Carros</Titulo>
      <Container>
        <Cards
          img={img_car}
          descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
          name='Product title stays here - maximum 1 line'
          price='1.000'
        />
        <Cards
          img={img_car}
          descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
          name='Product title stays here - maximum 1 line'
          price='1.000'
        />
        <Cards
          img={img_car}
          descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
          name='Product title stays here - maximum 1 line'
          price='1.000'
        />
      </Container>
      <Titulo>Motos</Titulo>
      <Container>
        <Cards
          img={img_car}
          descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
          name='Product title stays here - maximum 1 line'
          price='1.000'
        />
        <Cards
          img={img_car}
          descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
          name='Product title stays here - maximum 1 line'
          price='1.000'
        />
        <Cards
          img={img_car}
          descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
          name='Product title stays here - maximum 1 line'
          price='1.000'
        />
      </Container>
    </HomeDiv>
  )
}

export default Home

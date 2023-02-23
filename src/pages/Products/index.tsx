import car1 from '../../assets/imgs/car3.png'
import Footer from '../../components/Footer'
import { Header, Header_info } from '../../components/Header'
import Product_View from '../../components/Products'
import { Container } from './style'

const Product = () => {
  return (
    <>
      <Container>
        <Header />
        <Container>
          <Header_info />
          <Product_View
            img={car1}
            name='Velocidade e experiência em um lugar feito para você'
            descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
          />
        </Container>
      </Container>
    </>
  )
}

export default Product

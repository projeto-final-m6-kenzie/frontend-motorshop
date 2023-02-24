import { Swiper, SwiperSlide } from 'swiper/react'

import img_car from '../../assets/imgs/card_car1.png'
import { Cards } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import { Header, Header_info } from '../../components/Header'
import { Container, Container_header, HomeDiv, Titulo } from './styles'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

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
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
        </Swiper>
      </Container>
      <Titulo>Motos</Titulo>
      <Container>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              img={img_car}
              name='Carro do ano 2023'
              descricao='O melhor carro ja visto do braisl maralhiso banco trazeiro'
              price='1000'
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </HomeDiv>
  )
}

export default Home

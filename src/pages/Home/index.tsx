import { Cards } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import { Header, Header_info } from '../../components/Header'
import { Container, HomeDiv, Titulo } from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

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
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
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
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
        </Swiper>
      </Container>
    </HomeDiv>
  )
}

export default Home

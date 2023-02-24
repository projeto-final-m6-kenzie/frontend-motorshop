import { Swiper, SwiperSlide } from 'swiper/react'

import background from '../../assets/imgs/car1.png'
import { Cards_carrossel } from '../Cards'
import { Container, Container_carrossel } from './style'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper'

const Carrossel = () => {
  return (
    <Container>
      <Container_carrossel>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          <SwiperSlide>
            <Cards_carrossel
              img={background}
              title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
              info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards_carrossel
              img={background}
              title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
              info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards_carrossel
              img={background}
              title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
              info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards_carrossel
              img={background}
              title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
              info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards_carrossel
              img={background}
              title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
              info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            />
          </SwiperSlide>
        </Swiper>
      </Container_carrossel>
    </Container>
  )
}

export default Carrossel

/* eslint-disable import-helpers/order-imports */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Cards } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import Footer from '../../components/Footer'
import { Header, Header_info } from '../../components/Header'
import { ICarrosselInfo } from '../../interfaces'
import { Container, HomeDiv, Titulo, ContainerMain } from './styles'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const Home = () => {
  const [vehicles, setVehicles] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3001/vehicles', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        },
      })
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <HomeDiv>
      <ContainerMain>
        <HomeDiv>
          <Header />
          <Header_info
            title='Velocidade e experiência em um lugar feito para você'
            subtitle='Um ambiente feito para você explorar o seu melhor'
            button='carros'
          />
          <Titulo id='leilao'>Leilão</Titulo>
          <Carrossel />
          <Titulo id='carros'>Carros</Titulo>
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
              {vehicles &&
                vehicles.map((vehicle: ICarrosselInfo) => {
                  if (vehicle.vehicleType == 'Car') {
                    return (
                      <>
                        <SwiperSlide>
                          <Cards
                            key={vehicle.id}
                            title={vehicle.title}
                            price={vehicle.price}
                            coverPhoto={vehicle.coverPhoto}
                            description={vehicle.description}
                          />
                        </SwiperSlide>
                      </>
                    )
                  }
                })}
            </Swiper>
          </Container>
          <Titulo id='motos'>Motos</Titulo>
          <Container>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className='mySwiper'
            >
              {vehicles &&
                vehicles.map((vehicle: ICarrosselInfo) => {
                  if (vehicle.vehicleType == 'Motorbike') {
                    return (
                      <>
                        <SwiperSlide>
                          <Cards
                            key={vehicle.id}
                            title={vehicle.title}
                            price={vehicle.price}
                            coverPhoto={vehicle.coverPhoto}
                            description={vehicle.description}
                          />
                        </SwiperSlide>
                      </>
                    )
                  }
                })}
            </Swiper>
          </Container>
          <Footer />
        </HomeDiv>
      </ContainerMain>
    </HomeDiv>
  )
}

export default Home

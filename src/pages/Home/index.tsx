import axios from 'axios'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import img_car from '../../assets/imgs/card_car1.png'
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

    console.log(vehicles)
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
              {vehicles &&
                vehicles.map((vehicle: ICarrosselInfo) => {
                  console.log(vehicle)
                  if (vehicle.vehicleType == 'Car') {
                    console.log(vehicle)
                    return (
                      <>
                        <SwiperSlide>
                          <Cards
                            title={vehicle.title}
                            key={vehicle.id}
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
          <Titulo>Motos</Titulo>
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
                    console.log(vehicle)
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
        </HomeDiv>
      </ContainerMain>
    </HomeDiv>
  )
}

export default Home

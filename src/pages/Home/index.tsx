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
        {vehicles &&
          vehicles.map((vehicle: ICarrosselInfo) => {
            console.log(vehicle)
            if (vehicle.vehicleType == 'Car') {
              console.log(vehicle)
              return (
                <Cards
                  title={vehicle.title}
                  key={vehicle.id}
                  price={vehicle.price}
                  coverPhoto={vehicle.coverPhoto}
                  description={vehicle.description}
                />
              )
            }
          })}
      </Container>
      <Titulo>Motos</Titulo>
      <Container>
        {vehicles.map((vehicle: ICarrosselInfo) => {
          if (vehicle.vehicleType == 'Motorbike') {
            return (
              <Cards
                title={vehicle.title}
                price={vehicle.price}
                coverPhoto={vehicle.coverPhoto}
                description={vehicle.description}
                key={vehicle.id}
              />
            )
          }
        })}
      </Container>
    </HomeDiv>
  )
}

export default Home

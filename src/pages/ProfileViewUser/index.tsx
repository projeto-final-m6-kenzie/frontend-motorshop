import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import car from '../../assets/imgs/car1.png'
import img_car from '../../assets/imgs/card_car1.png'
import { Button } from '../../components/Buttons/style'
import { Cards, Cards_carrossel_anunciante } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import { Container_carrossel } from '../../components/Carrossel/style'
import { Header, Header_info } from '../../components/Header'
import { CriarAnuncio } from '../../components/Modals'
import { RouterContext } from '../../contexts/RouterContext'
import { ICarrosselInfo, IContext } from '../../interfaces'
import { Titulo, Container } from '../Home/styles'
import UpdateUserForm from '../UpdateProfile'
import { Anunciante, Container_all, Container_Cards } from './style'

const ProfileViewUser = () => {
  const { openModal, vehicles } = useContext<IContext>(RouterContext)
  const navigate = useNavigate()

  return (
    <Container_all>
      <CriarAnuncio />
      <Header />
      <Container>
        <Anunciante>
          <div className='perfil'>
            <div className='icon'>
              <span>SL</span>
            </div>
            <h2 className='name'>Samuel Leandro</h2>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s
          </p>
          <Button onClick={openModal} backgroundColor='white' color='#4529E6' borderColor='#4529E6'>
            Criar Anuncio
          </Button>
          <Button
            onClick={() => navigate('/update')}
            backgroundColor='white'
            color='#4529E6'
            borderColor='#4529E6'
          >
            Editar perfil
          </Button>
        </Anunciante>
      </Container>
      <div className='container_anuncios'>
        <Titulo>Leilão</Titulo>
        <Container_carrossel>
          <Cards_carrossel_anunciante
            img={car}
            description='Mercedes Benz A 200'
            title='Lorem Ipsum is simply dummy text of the printing'
          />
          <Cards_carrossel_anunciante
            img={car}
            description='Mercedes Benz A 200'
            title='Lorem Ipsum is simply dummy text of the printing'
          />
          <Cards_carrossel_anunciante
            img={car}
            description='Mercedes Benz A 200'
            title='Lorem Ipsum is simply dummy text of the printing'
          />
          <Cards_carrossel_anunciante
            img={car}
            description='Mercedes Benz A 200'
            title='Lorem Ipsum is simply dummy text of the printing'
          />
          <Cards_carrossel_anunciante
            img={car}
            description='Mercedes Benz A 200'
            title='Lorem Ipsum is simply dummy text of the printing'
          />
          <Cards_carrossel_anunciante
            img={car}
            description='Mercedes Benz A 200'
            title='Lorem Ipsum is simply dummy text of the printing'
          />
        </Container_carrossel>
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
                if (vehicle.vehicleType == 'Car') {
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
      </div>
    </Container_all>
  )
}

export default ProfileViewUser

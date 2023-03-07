import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../../components/Buttons/style'
import { Cards } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import Footer from '../../components/Footer'
import { Header } from '../../components/Header'
import { CriarAnuncio } from '../../components/Modals'
import { RouterContext } from '../../contexts/RouterContext'
import { ICarrosselInfo, IContext } from '../../interfaces'
import { Titulo } from '../Home/styles'
import UpdateUserForm from '../UpdateProfile'
import { Container, Anunciante, ContainerMain, HomeDiv, BoxZ, Container_all, BoxGap } from './style'

const ProfileViewUser = () => {
  const { openModal, vehicles } = useContext<IContext>(RouterContext)
  const navigate = useNavigate()

  return (
    <HomeDiv>
      <ContainerMain>
        <HomeDiv>
          <CriarAnuncio /> {/* modal */}
          <Header />
          <BoxZ>
            <BoxGap>
              <Anunciante>
                <div className='perfil'>
                  <div className='icon'>
                    <span>SL</span>
                  </div>
                  <h2 className='name'>Samuel Leandro</h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard dummy text ever since the 1500s
                </p>
                <div className='rows'>
                  <Button
                    onClick={openModal}
                    backgroundColor='white'
                    color='#4529E6'
                    borderColor='#4529E6'
                    padding='4vh'
                    fontSize='1rem'
                  >
                    Criar Anuncio
                  </Button>
                  <Button
                    onClick={() => navigate('/update')}
                    backgroundColor='white'
                    color='#4529E6'
                    borderColor='#4529E6'
                    fontSize='1rem'
                    padding='4vh'
                  >
                    Editar perfil
                  </Button>
                </div>
              </Anunciante>
            </BoxGap>
          </BoxZ>
          <Titulo>Leilão</Titulo>
          <Carrossel />
          <Titulo>Carros</Titulo>
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
          <Footer />
        </HomeDiv>
      </ContainerMain>
    </HomeDiv>
  )
}

export default ProfileViewUser

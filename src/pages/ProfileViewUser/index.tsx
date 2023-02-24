import { useContext } from 'react'

import car from '../../assets/imgs/car1.png'
import img_car from '../../assets/imgs/card_car1.png'
import { Button } from '../../components/Buttons/style'
import { Cards, Cards_carrossel_anunciante } from '../../components/Cards'
import Carrossel from '../../components/Carrossel'
import { Container_carrossel } from '../../components/Carrossel/style'
import { Header, Header_info } from '../../components/Header'
import { CriarAnuncio } from '../../components/Modals'
import { RouterContext } from '../../contexts/RouterContext'
import { IContext } from '../../interfaces'
import { Titulo } from '../Home/styles'
import { Anunciante, Container, Container_all, Container_Cards } from './style'

const ProfileViewUser = () => {
  const { openModal, closeModal, modalIsOpen } = useContext<IContext>(RouterContext)
  console.log(modalIsOpen)
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
        <Container_Cards>
          <Cards
            img={img_car}
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            title='Product title stays here - maximum 1 line'
            price='1.000'
          />
          <Cards
            img={img_car}
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            title='Product title stays here - maximum 1 line'
            price='1.000'
          />
          <Cards
            img={img_car}
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            title='Product title stays here - maximum 1 line'
            price='1.000'
          />
        </Container_Cards>
        <Titulo>Motos</Titulo>
        <Container_Cards>
          <Cards
            img={img_car}
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            title='Product title stays here - maximum 1 line'
            price='1.000'
          />
          <Cards
            img={img_car}
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            title='Product title stays here - maximum 1 line'
            price='1.000'
          />
          <Cards
            img={img_car}
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
            title='Product title stays here - maximum 1 line'
            price='1.000'
          />
        </Container_Cards>
      </div>
    </Container_all>
  )
}

export default ProfileViewUser

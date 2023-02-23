/* eslint-disable import/no-extraneous-dependencies */
import { BsArrowRight, BsClockHistory } from 'react-icons/bs'

import { ICarrosselInfo, IProductView } from '../../interfaces'
import { Button } from '../Buttons/style'
import { Container, Container_all, Container_categoria, Perfil_container } from './style'

const Perfil = () => {
  return (
    <Perfil_container>
      <button className='icon'>
        <span>SL</span>
      </button>
      <button className='name'>Samuel Leeandro</button>
    </Perfil_container>
  )
}

const Categoria = () => {
  return (
    <Container_categoria>
      <p>0 KM</p>
    </Container_categoria>
  )
}

const Cards_carrossel = (props: ICarrosselInfo) => {
  return (
    <Container img={props.img}>
      <div className='card'>
        <div className='info_car'>
          <div className='hora'>
            <BsClockHistory />
            <p>01:58:00</p>
          </div>
          <div className='info'>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
          </div>
          <Perfil />
          <div className='categoria_preco'>
            <Categoria />
            <Categoria />
            <div>
              <span>R$ 1000,000</span>
            </div>
          </div>
        </div>
      </div>
      <button>
        <span>Acessar página leilão</span>
        <BsArrowRight />
      </button>
    </Container>
  )
}

const Cards_carrossel_anunciante = (props: ICarrosselInfo) => {
  return (
    <Container img={props.img}>
      <div className='card'>
        <div className='info_car'>
          <div className='hora'>
            <BsClockHistory />
            <p>01:58:00</p>
          </div>
          <div className='info'>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
          </div>
          <Perfil />
          <div className='categoria_preco'>
            <Categoria />
            <Categoria />
            <div>
              <span>R$ 1000,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className='buttonsCarrossel'>
        <Button height='2rem' borderColor='#EDEAFD' backgroundColor='none'>
          Editar
        </Button>
        <Button height='2rem' borderColor='#EDEAFD' backgroundColor='none'>
          Ver como
        </Button>
      </div>
    </Container>
  )
}

const Cards = (props: IProductView) => {
  return (
    <Container_all>
      <div className='card_car'>
        <div className='img'>
          <img src={props.img} alt='' />
        </div>
        <h3>{props.name} </h3>
        <p>{props.descricao}</p>
        <div className='perfil'>
          <Perfil />
        </div>
        <div className='categoria_preco'>
          <Categoria />
          <Categoria />
          <div>
            <span>{props.price}</span>
          </div>
        </div>
      </div>
    </Container_all>
  )
}

const Fotos = () => {
  return <div></div>
}

export { Cards_carrossel, Cards, Categoria, Perfil, Cards_carrossel_anunciante }

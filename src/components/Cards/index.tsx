/* eslint-disable import/no-extraneous-dependencies */
import { BsArrowRight, BsClock } from 'react-icons/bs'

import { ICarrosselInfo, IPerfilProps, IProductView } from '../../interfaces'
import { Button } from '../Buttons/style'
import { Container, Container_all, Container_categoria, Perfil_container } from './style'

const Perfil = (props: IPerfilProps) => {
  return (
    <Perfil_container>
      <button className='icon'>
        <span>{props.icon}</span>
      </button>
      <button className='name'>{props.name}</button>
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
    <Container img={props.img as string}>
      <div className='card'>
        <div className='info_car'>
          <div className='hora'>
            <div className='icons-hora'>
              <BsClock id='icon-hour' />
              <p>01:58:00</p>
            </div>
          </div>
          <div className='info'>
            <h2>{props.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit tempore as
            </p>
          </div>
          <Perfil icon='SF' name='Samuel Ferreira' />
          <div className='categoria_preco'>
            <Categoria />
            <div>
              <span>R$ 10000,00</span>
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
    <Container img={props.imageCar as string}>
      <div className='card'>
        <div className='info_car'>
          <div className='hora'>
            <BsClock id='icon-hour' />
            <p>01:58:00</p>
          </div>
          <div className='info'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <Perfil icon='SF' name='Samuel Ferreira' />
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

const Cards = (props: ICarrosselInfo) => {
  return (
    <Container_all img={props.coverPhoto?.url as string}>
      <div className='card_car'>
        <div className='img'>
          <img src={props.coverPhoto?.url} alt='' />
        </div>
        <h3>{props.title} </h3>

        <p>{props.description}</p>

        <div className='perfil'>
          <Perfil icon='SF' name='Samuel Ferreira' />
        </div>
        <div className='categoria_preco'>
          <Categoria />
          <div>
            <span>
              {props.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
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

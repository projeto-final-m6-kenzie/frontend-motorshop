import React from 'react'

import { IProductView } from '../../interfaces'
import { Button } from '../Buttons/style'
import { Categoria, Perfil } from '../Cards'
import {
  Container,
  Container_comentarios,
  Container_input,
  Descricao,
  ImgCar,
  InfoCar,
  Section,
} from './style'

const Comentarios = () => {
  return (
    <>
      <Section>
        <Perfil icon='SF' name='Samuel Ferreira' />
        <svg width='4' height='4' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='2' cy='2' r='2' fill='#ADB5BD' />
        </svg>
        <p>há 3 dias</p>
      </Section>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
    </>
  )
}

const Input_comentario = () => {
  return (
    <Container_input>
      <Perfil icon='SF' name='Samuel Ferreira' />
      <textarea
        name=''
        id=''
        cols={30}
        rows={5}
        placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
      ></textarea>
      <Button width='9rem' backgroundColor='#4529E6' color='#edeafd'>
        Comentar
      </Button>
    </Container_input>
  )
}

const Product_View = (props: IProductView) => {
  return (
    <Container>
      <div className='info'>
        <ImgCar>
          <img src={props.img} alt='Foto do carro' />
        </ImgCar>
        <InfoCar>
          <h2>{props.name}</h2>
          <div className='price_info'>
            <Categoria />
            <Categoria />
            <div>
              <span>R$ 1000,000</span>
            </div>
          </div>
          <Button width='9rem' backgroundColor='#4529E6' color='#edeafd'>
            Comprar
          </Button>
        </InfoCar>
        <Descricao>
          <h2>Descrição</h2>
          <p>{props.descricao}</p>
        </Descricao>
        <Container_comentarios>
          <h2>Comentários</h2>
          <Comentarios />
          <Comentarios />
          <Comentarios />
          <Comentarios />
        </Container_comentarios>
        <Input_comentario />
      </div>
      <div className='foto-dono'></div>
    </Container>
  )
}

export default Product_View

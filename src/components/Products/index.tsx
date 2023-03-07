import React, { useContext, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../../contexts/AuthContext'
import { ICarrosselInfo, IComments } from '../../interfaces'
import api from '../../services/api'
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

const Comentarios = (props: any) => {
  return (
    <>
      <Section>
        <Perfil icon='SF' name={props.name} />
        <svg width='4' height='4' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='2' cy='2' r='2' fill='#ADB5BD' />
        </svg>
        <p>{props.createdAt}</p>
      </Section>
      <p>{props.commentText}</p>
    </>
  )
}

const Input_comentario = (props: ICarrosselInfo) => {
  const { user } = useContext(AuthContext)

  const { register, handleSubmit } = useForm()
  const formRef = useRef<HTMLFormElement>(null)

  const createComment = (data: any) => {
    api.post(`/comments/${props.vehicleId}`, data).then((res) => {
      formRef.current?.reset()
      props.setComments(props.comments ? [...props.comments, res.data] : res.data)
    })
  }

  return (
    <Container_input onSubmit={handleSubmit(createComment)} ref={formRef}>
      <Perfil icon='SF' name={user ? user.name : 'anônimo'} />
      <textarea
        cols={30}
        rows={5}
        placeholder='Carro muito confortável, foi uma ótima experiência de compra...'
        {...register('text')}
      ></textarea>
      <Button type='submit' width='9rem' backgroundColor='#4529E6' color='#edeafd'>
        Comentar
      </Button>
    </Container_input>
  )
}

const Product_View = (props: ICarrosselInfo) => {
  return (
    <Container>
      <div className='info'>
        <ImgCar>
          <img src={props.img} alt='Foto do carro' />
        </ImgCar>
        <InfoCar>
          <h2>{props.title}</h2>
          <div className='price_info'>
            <Categoria />
            <div>
              <span>{props.price}</span>
            </div>
          </div>
          <Button width='9rem' backgroundColor='#4529E6' color='#edeafd'>
            Comprar
          </Button>
        </InfoCar>
        <Descricao>
          <h2>Descrição</h2>
          <p>{props.description}</p>
        </Descricao>
        <Container_comentarios>
          <h2>Comentários</h2>
          {props.comments?.map((comment: IComments) => {
            return (
              <Comentarios
                key={comment.id}
                name={props.user?.name}
                createdAt={comment.createdAt}
                commentText={comment.text}
              />
            )
          })}
        </Container_comentarios>
        <Input_comentario
          vehicleId={props.vehicleId}
          comments={props.comments}
          setComments={props.setComments}
        />
      </div>
      <div className='foto-dono'></div>
    </Container>
  )
}

export default Product_View

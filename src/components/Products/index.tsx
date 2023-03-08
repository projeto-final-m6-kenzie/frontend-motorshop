import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GoPencil } from 'react-icons/go'
import Modal from 'react-modal'

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

const buttonStyle = {
  color: 'white',
  backgroundColor: '#6200E3',
  width: '30px',
  height: '30px',
  padding: '3px',
  borderRadius: '50%',
}

const modalStyle = {
  height: 'fit-content',
}

const Comentarios = (props: any) => {
  const [isOpenEditCommentModal, setIsOpenEditCommentModal] = useState(false)
  const [commentId, setCommentId] = useState('a')

  const openEditCommentModal = async (id: string) => {
    await setCommentId(id)
    setIsOpenEditCommentModal(true)
  }
  const closeEditCommentModal = () => setIsOpenEditCommentModal(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm()

  const updateComment = (data: any) => {
    api.patch(`/comments/${commentId}`, data)
  }

  const deleteComment = (data: any) => {
    api.delete(`/comments/${commentId}`)
  }

  const ModalEditarComentario = () => {
    return (
      <Modal
        isOpen={isOpenEditCommentModal}
        onRequestClose={closeEditCommentModal}
        shouldCloseOnOverlayClick={true}
        shouldFocusAfterRender={true}
        style={{ content: { height: 'fit-content', width: 'fit-content', margin: 'auto' } }}
      >
        {commentId}
        <form onSubmit={handleSubmit(updateComment)}>
          <h4>Editar comentário</h4>
          <textarea {...register('text')}></textarea>
          <br></br>

          <button type='button' style={{ background: 'red' }} onClick={deleteComment}>
            Deletar
          </button>
          <button type='button' onClick={closeEditCommentModal}>
            Cancelar
          </button>
          <button style={{ background: 'green' }}>Enviar</button>
        </form>
      </Modal>
    )
  }
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

      <ModalEditarComentario />

      {props.username == props.name && (
        <button
          type='button'
          style={buttonStyle}
          onClick={() => openEditCommentModal(props.commentid)}
        >
          <GoPencil />
        </button>
      )}
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
      props.setComments(props.comments ? [res.data, ...props.comments] : res.data)
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
                name={comment.user?.name}
                createdAt={comment.createdAt}
                commentText={comment.text}
                commentid={comment.id}
                username={props.user?.name}
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

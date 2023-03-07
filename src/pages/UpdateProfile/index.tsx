import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { AuthContext } from '../../contexts/AuthContext'
import { RouterContext } from '../../contexts/RouterContext'
import { IContext, IUser } from '../../interfaces'
import api from '../../services/api'
import Form from './styles'

const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  cpf: yup.string(),
  phone: yup.string(),
  dateOfBirth: yup.string(),
  description: yup.string(),
})

const UpdateUserForm = () => {
  const { openUpdateProfileModal, closeUpdateProfileModal, modalUpdateIsOpen } =
    useContext<IContext>(RouterContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })

  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

  const updateUser = async (data: any) => {
    api.patch(`/users/${user.id}`, data).then(() => navigate('/profileUser'))
  }

  const style = {
    content: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      display: 'flex',
      width: 'max-content',
      height: 'max-content',
      padding: '1rem 2rem 2rem',
      margin: 'auto',
      marginTop: '1px',
      zIndex: '0',
    },
    overlay: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  }

  return (
    <Modal
      isOpen={modalUpdateIsOpen}
      onRequestClose={closeUpdateProfileModal}
      shouldCloseOnOverlayClick={true}
      style={style}
      shouldFocusAfterRender={true}
    >
      <Form onSubmit={handleSubmit(updateUser)}>
        <h3>Editar perfil</h3>
        <p>Informações pessoais</p>

        <label htmlFor='name'>Nome</label>
        <input placeholder='Ex.: Samuel Leão' {...register('name')}></input>

        <label htmlFor='email'>Email</label>
        <input placeholder='Ex.: samuel@kenzie.com.br' {...register('email')}></input>

        <label htmlFor='cpf'>CPF</label>
        <input placeholder='000.000.000-00' {...register('cpf')}></input>

        <label htmlFor='phone'>Celular</label>
        <input placeholder='(084) 90909-9092' {...register('phone')}></input>

        <label htmlFor='dateOfBirth'>Data de nascimento</label>
        <input placeholder='09/12/99' {...register('dateOfBirth')}></input>

        <label htmlFor='description'>Descrição</label>
        <textarea placeholder='Digitar descrição' {...register('description')}></textarea>

        <div className='position-buttons'>
          <button className='cancelar' type='button' onClick={closeUpdateProfileModal}>
            Cancelar
          </button>
          <button type='submit'>Cadastrar</button>
        </div>
      </Form>
    </Modal>
  )
}

export default UpdateUserForm

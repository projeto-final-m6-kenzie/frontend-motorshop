/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/Buttons/style'
import Footer from '../../components/Footer'
import { Flex, Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { AuthContext } from '../../contexts/AuthContext'
import { ILoginUser } from '../../interfaces'
import { schema } from '../../validations/registerUser'

export const TokenEmail = () => {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const cadastrarEmail = (data: any) => {
    console.log(data)
    return navigate('/passwordRecovery1')
  }

  return (
    <Flex>
      <Header />
      <Form onSubmit={handleSubmit(cadastrarEmail)}>
        <h1>Recuperação de senha</h1>
        <label htmlFor='email'>Digite o seu Email</label>
        <input id='email' placeholder='Email' type='email' {...register('email')} />
        <Button type='submit'>Enviar</Button>
      </Form>
      <Footer />
    </Flex>
  )
}

export const RecuperacaoDeSenha = () => {
  const { register, handleSubmit } = useForm()

  const cadastrarEmail = (data: any) => {
    console.log(data)
  }

  return (
    <Flex>
      <Header />
      <Form onSubmit={handleSubmit(cadastrarEmail)}>
        <label htmlFor='email'>Token</label>
        <input id='email' placeholder='Digitar Código' type='email' {...register('email')} />

        <label htmlFor='password'>Nova Senha</label>
        <input
          id='password'
          placeholder='Digitar senha'
          type='password'
          {...register('password')}
        />
        <Button type='submit'>Enviar</Button>
      </Form>
      <Footer />
    </Flex>
  )
}

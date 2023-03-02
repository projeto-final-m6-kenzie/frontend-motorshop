/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/Buttons/style'
import Form from '../../components/Form'
import { AuthContext } from '../../contexts/AuthContext'
import { ILoginUser } from '../../interfaces'
import { schema } from '../../validations/registerUser'

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(schema),
  })

  return (
    <>
      <Form onSubmit={handleSubmit(loginUser)}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor='password'>Senha</label>
        <input id='password' type='text' {...register('password')} />
        <p>{errors.password?.message}</p>

        <Button type='submit'>Entrar</Button>
      </Form>
    </>
  )
}

export default Login

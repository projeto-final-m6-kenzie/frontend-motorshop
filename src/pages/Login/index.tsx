/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Buttons/style'
import Footer from '../../components/Footer'
import { Flex, Form } from '../../components/Form'
import { Header } from '../../components/Header'
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
    <Flex>
      <Header />
      <Form onSubmit={handleSubmit(loginUser)}>
        <h1>Login</h1>
        <label htmlFor='email'>Usuário</label>
        <input id='email' placeholder='Digitar usuário' type='email' {...register('email')} />
        {errors?.email?.message ? <p>{errors.email?.message}</p> : null}

        <label htmlFor='password'>Senha</label>
        <input
          id='password'
          placeholder='Digitar senha'
          type='password'
          {...register('password')}
        />
        {errors?.password ? <p>{errors.password?.message}</p> : null}

        <div>
          <button type='button' id='recuperate' onClick={() => console.log('recuperação de Senha')}>
            Esqueci minha senha
          </button>
        </div>
        <Button type='submit'>Entrar</Button>
        <p className='info'> Ainda não possui conta?</p>
        <Button className='cadastro'>
          <Link to={'/Register'}>Cadastrar</Link>
        </Button>
      </Form>
      <Footer />
    </Flex>
  )
}

export default Login

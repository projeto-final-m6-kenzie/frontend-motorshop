import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Header } from '../../components/Header'
import Form from './styles'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  dateOfBirth: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
})

const UpdateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })

  const updateUser = async (data: any) => {
    const user = data
    console.log(user, 'update') //trocar pela requisiçao de update aqui
  }

  return (
    <>
      <Form onSubmit={handleSubmit(updateUser)}>
        <h1>Editar perfil</h1>
        <p>Informações pessoais</p>

        <label htmlFor='name'>Nome</label>
        <input placeholder='Ex.: Samuel Leão' {...register('name')}></input>

        <label htmlFor='email'>Email</label>
        <input placeholder='Ex.: samuel@kenzie.com.br' {...register('email')}></input>

        <label htmlFor='cpf'>CPF</label>
        <input placeholder='000.000.000-00' {...register('cpf')}></input>

        <label htmlFor='phone'>Celular</label>
        <input placeholder='(DDD) 90000-0000' {...register('phone')}></input>

        <label htmlFor='dateOfBirth'>Data de nascimento</label>
        <input placeholder='00/00/00' {...register('dateOfBirth')}></input>

        <label htmlFor='description'>Descrição</label>
        <textarea placeholder='Digitar descrição' {...register('description')}></textarea>

        <button type='submit'>Cancelar</button>
        <button type='submit'>Cadastrar</button>
      </Form>
    </>
  )
}

export default UpdateUserForm

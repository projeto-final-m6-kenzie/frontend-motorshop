import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Footer from '../../components/Footer'
import { Header } from '../../components/Header'
import { Flex, Form } from './styles'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  dateOfBirth: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
  isAnnouncer: yup.boolean(),
  password: yup.string().required('Campo obrigatório'),
  cep: yup.string().required('Campo obrigatório'),
  state: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  street: yup.string().required('Campo obrigatório'),
  number: yup.number().required('Campo obrigatório'),
  complement: yup.string().required('Campo obrigatório'),
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) })

  const createUser = async (data: any) => {
    const { cep, state, city, street, number } = data
    const address = { cep, state, city, street, number }
    const user = data
    user.address = address
    delete user.cep
    delete user.state
    delete user.city
    delete user.street
    delete user.number
    console.log(user) //trocar pela requisiçao aqui
  }

  return (
    <Flex>
      <Header />
      <Form onSubmit={handleSubmit(createUser)}>
        <h1>Cadastro</h1>
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

        <span>Informações de endereço</span>

        <label htmlFor='cep'>CEP</label>
        <input placeholder='00000.000' {...register('cep')}></input>

        <div className='input-options-1'>
          <div>
            <label htmlFor='state'>Estado</label>
            <input placeholder='Digitar Estado' {...register('state')}></input>
          </div>
          <div>
            <label htmlFor='city'>Cidade</label>
            <input placeholder='Digitar cidade' {...register('city')}></input>
          </div>
        </div>

        <label htmlFor='street'>Rua</label>
        <input placeholder='Digitar rua' {...register('street')}></input>

        <div className='input-options-1'>
          <div>
            <label htmlFor='number'>Número</label>
            <input placeholder='Digitar número' {...register('number')}></input>
          </div>
          <div>
            <label htmlFor='complement'>Complemento</label>
            <input placeholder='Ex.: apart 307' {...register('complement')}></input>
          </div>
        </div>

        <div className='input-options-1'>
          <div className='radio'>
            <label>
              <input type='radio' value='false' defaultChecked {...register('isAnnouncer')} />
              <span>Comprador</span>
            </label>
          </div>
          <div className='radio'>
            <label>
              <input type='radio' value='true' {...register('isAnnouncer')} />
              <span>Anunciante</span>
            </label>
          </div>
        </div>

        <label htmlFor='password'>Senha</label>
        <input type='password' placeholder='Digitar senha' {...register('password')}></input>

        <label htmlFor='passwordConf'>Confirmar Senha</label>
        <input type='password' placeholder='Digitar senha'></input>

        <button>Finalizar Cadastro</button>
      </Form>
      <Footer />
    </Flex>
  )
}

export default Register

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import Form from '../../components/Form'
import { Header } from '../../components/Header'

// const schema = yup.object().shape({
//     name: ,
//     email: ,
//     cpf: ,
//     phone: ,
//     birthdate: ,
//     description: ,
//     password: ,
//     cep: ,
//     state: ,
//     city: ,
//     street: ,
//     number: ,
//     complement: ,
// })

const Register = () => {
  return (
    <>
      <Header />
      <Form>
        <h1>Cadastro</h1>
        <p>Informações pessoais</p>

        <label htmlFor='name'>Nome</label>
        <input placeholder='Ex.: Samuel Leão'></input>

        <label htmlFor='email'>Email</label>
        <input placeholder='Ex.: samuel@kenzie.com.br'></input>

        <label htmlFor='cpf'>CPF</label>
        <input placeholder='000.000.000-00'></input>

        <label htmlFor='phone'>Celular</label>
        <input placeholder='(DDD) 90000-0000'></input>

        <label htmlFor='birthdate'>Data de nascimento</label>
        <input placeholder='00/00/00'></input>

        <label htmlFor='birthdate'>Descrição</label>
        <textarea placeholder='Digitar descrição'></textarea>

        <span>Informações de endereço</span>

        <label htmlFor='cep'>CEP</label>
        <input placeholder='00000.000'></input>

        <label htmlFor='state'>Estado</label>
        <input placeholder='Digitar Estado'></input>

        <label htmlFor='city'>Cidade</label>
        <input placeholder='Digitar cidade'></input>

        <label htmlFor='street'>Rua</label>
        <input placeholder='Digitar rua'></input>

        <label htmlFor='number'>Número</label>
        <input placeholder='Digitar número'></input>

        <label htmlFor='complement'>Complemento</label>
        <input placeholder='Ex.: apart 307'></input>

        <p>TIPO DE CONTA</p>

        <label htmlFor='password'>Senha</label>
        <input type='password' placeholder='Digitar senha'></input>

        <label htmlFor='passwordConf'>Confirmar Senha</label>
        <input type='password' placeholder='Digitar senha'></input>
      </Form>
    </>
  )
}

export default Register

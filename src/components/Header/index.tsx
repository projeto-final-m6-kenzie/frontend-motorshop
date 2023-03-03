import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { RouterContext } from '../../contexts/RouterContext'
import { IHeaderInfo } from '../../interfaces'
import UpdateUserForm from '../../pages/UpdateProfile'
import { Button } from '../Buttons/style'
import {
  ButtonsDiv,
  ButtonsRightDiv,
  Container,
  H1,
  HeaderComponent,
  Container_info,
} from './styles'

export const Header = () => {
  const { openModal, closeModal, openUpdateProfileModal } = useContext(RouterContext)
  const { user } = useContext(AuthContext)
  const token = localStorage.getItem('@context-demo:token')
  return (
    <HeaderComponent height='10vh'>
      <Link to={'/'}>
        <H1>
          Motors
          <span> shop</span>
        </H1>
      </Link>
      <ButtonsDiv>
        <Button type='button' onClick={openUpdateProfileModal}>
          Editar Perfil
        </Button>
        <Button
          height='50%'
          backgroundColor='var(--color-whiteFixed)'
          borderColor='var(--color-whiteFixed)'
          fontSize='1.2rem'
        >
          Carros
        </Button>
        <Button
          height='50%'
          backgroundColor='var(--color-whiteFixed)'
          borderColor='var(--color-whiteFixed)'
          fontSize='1.2rem'
        >
          Motos
        </Button>
        <Button
          height='50%'
          backgroundColor='var(--color-whiteFixed)'
          borderColor='var(--color-whiteFixed)'
          fontSize='1.2rem'
        >
          Leilão
        </Button>
        <ButtonsRightDiv>
          {token ? (
            <Button
              height='50%'
              backgroundColor='var(--color-whiteFixed)'
              borderColor='var(--color-grey4)'
              fontSize='1.2rem'
              borderLine='0.15rem'
              marginLeft='1.5rem'
            >
              <Link to={`/profileUser`}>Perfil</Link>
            </Button>
          ) : (
            <>
              <Button
                height='50%'
                backgroundColor='var(--color-whiteFixed)'
                borderColor='var(--color-whiteFixed)'
                fontSize='1.2rem'
                borderLine='0.15rem'
                marginLeft='1.5rem'
              >
                <Link to={'/login'}>Fazer Login</Link>
              </Button>
              <Button
                height='50%'
                backgroundColor='var(--color-whiteFixed)'
                borderColor='var(--color-whiteFixed)'
                fontSize='1.2rem'
                borderLine='0.15rem'
                marginLeft='1.5rem'
              >
                <Link to={`/register`}>Cadastrar</Link>
              </Button>
            </>
          )}
        </ButtonsRightDiv>
      </ButtonsDiv>
      <UpdateUserForm />
    </HeaderComponent>
  )
}

export const Header_info = (props: IHeaderInfo) => {
  return (
    <Container>
      <Container_info>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
        <div className='buttons'>
          {props.button ? (
            <>
              <Button
                width='calc(70px + 6vw)'
                height='1.8vh'
                fontSize='1.1rem'
                backgroundColor='#4529E6'
                color='#edeafd'
                borderLine='2px'
              >
                Carros
              </Button>
              <Button
                width='calc(70px + 6vw)'
                height='1.8vh'
                fontSize='1.1rem'
                backgroundColor='#4529E6'
                color='#edeafd'
                borderLine='2px'
              >
                Motos
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
      </Container_info>
    </Container>
  )
}

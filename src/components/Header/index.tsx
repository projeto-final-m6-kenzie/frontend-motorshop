import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { RouterContext } from '../../contexts/RouterContext'
import { IHeaderInfo } from '../../interfaces'
import { Button } from '../Buttons/style'
import {
  ButtonsDiv,
  ButtonsRightDiv,
  ButtonsLeftDiv,
  Container,
  H1,
  HeaderComponent,
  Container_info,
  ContainerFixed,
} from './styles'

export const Header = () => {
  const { openModal, closeModal } = useContext(RouterContext)
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
        <ButtonsLeftDiv>
          <Button
            height='50%'
            backgroundColor='var(--color-whiteFixed)'
            borderColor='var(--color-whiteFixed)'
            fontSize='1.2rem'
            borderLine='0.15rem'
            marginLeft='0.5rem'
          >
            <a href='#footer'>Carros</a>
            {/* <Link to={`/profileUser`}>Carros</Link> */}
          </Button>
          <Button
            height='50%'
            backgroundColor='var(--color-whiteFixed)'
            borderColor='var(--color-whiteFixed)'
            fontSize='1.2rem'
            borderLine='0.15rem'
            marginLeft='0.5rem'
          >
            Motos
          </Button>
          <Button
            height='50%'
            backgroundColor='var(--color-whiteFixed)'
            borderColor='var(--color-whiteFixed)'
            fontSize='1.2rem'
            borderLine='0.15rem'
            marginLeft='0.5rem'
          >
            Leilão
          </Button>
        </ButtonsLeftDiv>
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
    </HeaderComponent>
  )
}

export const Header_info = (props: IHeaderInfo) => {
  return (
    <ContainerFixed>
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
    </ContainerFixed>
  )
}

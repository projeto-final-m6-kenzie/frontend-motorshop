import { Link } from 'react-router-dom'

import { IHeaderInfo } from '../../interfaces'
import { Button } from '../Buttons/style'
import {
  ButtonsDiv,
  ButtonsRightDiv,
  Container,
  H1,
  H2,
  HeaderComponent,
  Container_info,
} from './styles'

export const Header = () => {
  return (
    <HeaderComponent height='10vh'>
      <H1>
        Motors
        <span> shop</span>
      </H1>
      <ButtonsDiv>
        <Button
          height='100%'
          backgroundColor='var(--color-whiteFixed)'
          borderColor='var(--color-whiteFixed)'
          fontSize='1.2rem'
        >
          Carros
        </Button>
        <Button
          height='100%'
          backgroundColor='var(--color-whiteFixed)'
          borderColor='var(--color-whiteFixed)'
          fontSize='1.2rem'
        >
          Motos
        </Button>
        <Button
          height='100%'
          backgroundColor='var(--color-whiteFixed)'
          borderColor='var(--color-whiteFixed)'
          fontSize='1.2rem'
        >
          Leilão
        </Button>
        <ButtonsRightDiv>
          {/* <Button
            height='100%'
            backgroundColor='var(--color-whiteFixed)'
            borderColor='var(--color-whiteFixed)'
            fontSize='1.2rem'
          >
            Fazer Login
          </Button> */}
          <Link to={`/profileUser`}>
            <Button
              height='50%'
              backgroundColor='var(--color-whiteFixed)'
              borderColor='var(--color-grey4)'
              fontSize='1.2rem'
              borderLine='0.15rem'
              marginLeft='1.5rem'
            >
              {/* Cadastrar */}
              Criar Anuncio
            </Button>
          </Link>
        </ButtonsRightDiv>
      </ButtonsDiv>
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

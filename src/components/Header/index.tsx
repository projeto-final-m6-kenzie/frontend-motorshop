import { IHeaderInfo } from '../../interfaces'
import { Button } from '../Buttons/style'
import {
  ButtonsDiv,
  ButtonsRightDiv,
  Container,
  H1,
  H2,
  HeaderComponent,
  TitleDiv,
  Container_info,
} from './styles'

export const Header = () => {
  return (
    <HeaderComponent height='60px'>
      <TitleDiv>
        <H1>Motors</H1>
        <H2>shop</H2>
      </TitleDiv>
      <ButtonsDiv>
        <Button height='100%' backgroundColor='#edeafd' borderColor='#edeafd'>
          Carros
        </Button>
        <Button height='100%' backgroundColor='#edeafd' borderColor='#edeafd'>
          Motos
        </Button>
        <Button height='100%' backgroundColor='#edeafd' borderColor='#edeafd'>
          Leilão
        </Button>
        <ButtonsRightDiv>
          <Button height='100%' backgroundColor='#edeafd' borderColor='#edeafd'>
            Fazer Login
          </Button>
          <Button height='50%'>Cadastrar</Button>
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
              <Button width='9rem' backgroundColor='#4529E6' color='#edeafd'>
                Carros
              </Button>
              <Button width='9rem' backgroundColor='#4529E6' color='#edeafd'>
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

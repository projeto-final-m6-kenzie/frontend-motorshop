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

export const Header_info = () => {
  return (
    <Container>
      <Container_info>
        <h1>Velocidade e experiencia em um lugar feito para você</h1>
        <span>Um ambiente feito para você explorar o seu melhor</span>
        <div className='buttons'>
          <Button width='9rem' backgroundColor='#4529E6' color='#edeafd'>
            Carros
          </Button>
          <Button width='9rem' backgroundColor='#4529E6' color='#edeafd'>
            Motos
          </Button>
        </div>
      </Container_info>
    </Container>
  )
}

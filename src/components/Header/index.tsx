import { Button } from '../Buttons/style'
import { ButtonsDiv, ButtonsRightDiv, H1, H2, HeaderComponent, TitleDiv } from './styles'

const Header = () => {
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

export default Header

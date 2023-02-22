import background from '../../assets/imgs/car1.png'
import { Cards_carrossel } from '../Cards'
import { Container, Container_carrossel } from './style'

const Carrossel = () => {
  return (
    <Container>
      <div>
        <button>D</button>
        <button>D</button>
      </div>

      <Container_carrossel>
        <Cards_carrossel
          img={background}
          title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
          info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
        />
        <Cards_carrossel
          img={background}
          title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
          info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
        />
        <Cards_carrossel
          img={background}
          title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
          info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
        />
        <Cards_carrossel
          img={background}
          title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
          info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
        />
        <Cards_carrossel
          img={background}
          title='Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '
          info='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
        />
      </Container_carrossel>
    </Container>
  )
}

export default Carrossel

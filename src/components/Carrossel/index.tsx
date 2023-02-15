/* eslint-disable import/no-extraneous-dependencies */
import { BsArrowRight, BsClockHistory } from 'react-icons/bs'

import car1 from '../../assets/imgs/car1.png'
import { ICarrosselInfo } from '../../interfaces'
import { Container } from './style'

const Carrossel = (props: ICarrosselInfo) => {
  return (
    <Container>
      <img src={car1} alt='' />
      <div className='card'>
        <div className='info_car'>
          <div className='hora'>
            <BsClockHistory />
            <p>01:58:00</p>
          </div>
          <div className='info'>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
          </div>
        </div>
      </div>
      <div>
        <span>Acessar página leilão</span>
        <button>
          <BsArrowRight />
        </button>
      </div>
    </Container>
  )
}

export default Carrossel

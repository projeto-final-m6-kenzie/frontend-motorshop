import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import car1 from '../../assets/imgs/car3.png'
import Footer from '../../components/Footer'
import { Header, Header_info } from '../../components/Header'
import Product_View from '../../components/Products'
import { ICarrosselInfo } from '../../interfaces'
import api from '../../services/api'
import { Container } from './style'
const Product = () => {
  const { id } = useParams()
  const [vehicle, setVehicle] = useState<ICarrosselInfo>({} as ICarrosselInfo)
  useEffect(() => {
    api.get(`/vehicles/${id}`).then((response) => {
      setVehicle(response.data)
    })
  }, [id])
  return (
    <>
      <Container>
        <Header />
        <Container>
          <Header_info />
          {vehicle ? (
            <Product_View
              img={vehicle.coverPhoto?.url}
              title={vehicle.title}
              description={vehicle.description}
              price={vehicle.price}
              comments={vehicle.comments}
              vehicleId={vehicle.id}
            />
          ) : (
            <div>Veiculo nao encontrado</div>
          )}
        </Container>
      </Container>
    </>
  )
}
export default Product

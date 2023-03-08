import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import car1 from '../../assets/imgs/car3.png'
import Footer from '../../components/Footer'
import { Header, Header_info } from '../../components/Header'
import Product_View from '../../components/Products'
import { ICarrosselInfo, IComments, IUser } from '../../interfaces'
import api from '../../services/api'
import { Container } from './style'
const Product = () => {
  const { id } = useParams()
  const [vehicle, setVehicle] = useState<ICarrosselInfo>({} as ICarrosselInfo)
  const [comments, setComments] = useState<IComments[]>([] as IComments[])
  const [user, setUser] = useState<IUser>({} as IUser)

  useEffect(() => {
    api.get(`/vehicles/${id}`).then((response) => {
      setVehicle(response.data)
      //novo
      const commentList = response.data.comments
      commentList.sort(
        (a: IComments, b: IComments) => Date.parse(`${b.createdAt}`) - Date.parse(`${a.createdAt}`)
      )
      setComments(commentList)

      // antigo
      // setComments(response.data.comments)
      const user = localStorage.getItem('@context-demo:userId')
      api.get(`/users/${user}`).then((res) => setUser(res.data))

      //antigo
      //api.get(`/users/${response.data.user.id}`).then((res) => setUser(res.data))
    })
  }, [])

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
              comments={comments}
              vehicleId={vehicle.id}
              setComments={setComments}
              user={user}
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

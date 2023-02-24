import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'

import { CriarAnuncio } from '../components/Modals'
import RegisterForm from '../components/RegisterForm'
import Home from '../pages/Home'
import Product from '../pages/Products'
import ProfileViewUser from '../pages/ProfileViewUser'

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/profileUser' element={<ProfileViewUser />} />
    <Route path='/product' element={<Product />} />
    <Route path='/register' element={<RegisterForm />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default RoutesMain

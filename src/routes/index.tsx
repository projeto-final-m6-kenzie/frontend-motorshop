import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Products'
import ProfileViewUser from '../pages/ProfileViewUser'
import Register from '../pages/Register'

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/profileUser' element={<ProfileViewUser />} />
    <Route path='/product' element={<Product />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default RoutesMain

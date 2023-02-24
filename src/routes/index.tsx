import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'

import Modal from '../components/Modals'
import RegisterForm from '../components/RegisterForm'
import Home from '../pages/Home'
import Product from '../pages/Products'

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Modal />} />
    <Route path='/product' element={<Product />} />
    <Route path='/register' element={<RegisterForm />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default RoutesMain

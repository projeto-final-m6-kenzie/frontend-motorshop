import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Products'

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product' element={<Product />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default RoutesMain

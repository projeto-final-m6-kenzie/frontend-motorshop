import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'

import RegisterForm from '../components/RegisterForm'
import Home from '../pages/Home'

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<RegisterForm />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default RoutesMain

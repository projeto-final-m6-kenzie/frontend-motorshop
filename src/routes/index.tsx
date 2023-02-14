import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default RoutesMain

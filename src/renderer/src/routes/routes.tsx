import Home from '../page/Home/Home'
import Login from '../page/Login/Login'
import Tratamento from '../page/Tratamento/Tratamento'
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Tratamento" element={<Tratamento />} />
      </Routes>
    </Router>
  )
}

export default RoutesApp

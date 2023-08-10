import Home from './components/Home'
import Login from './components/Login'
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

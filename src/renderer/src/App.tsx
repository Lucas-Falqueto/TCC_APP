import Home from './components/Home'
import Login from './components/Login'
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

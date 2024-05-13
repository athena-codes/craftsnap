import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { AuthProvider } from './context/auth'

// cd into app & npm run dev to start application
function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route />
      </Routes>
    </AuthProvider>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { AuthProvider } from './context/auth'
import PublicRoute from './routes/PublicRoute'

// cd into app & npm run dev to start application
function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/signup'
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route />
      </Routes>
    </AuthProvider>
  )
}

export default App

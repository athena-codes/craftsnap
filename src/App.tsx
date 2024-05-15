import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { AuthProvider } from './context/auth'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

// cd into app & npm run dev to start application

function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App

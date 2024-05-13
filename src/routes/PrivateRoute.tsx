import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

// need to add interface to avoid errors importing children
interface PrivateRouteProps {
  children: React.ReactElement
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth()

  if (user) {
    return <Navigate to='/' replace={true} />
  }

  return children
}

export default PrivateRoute

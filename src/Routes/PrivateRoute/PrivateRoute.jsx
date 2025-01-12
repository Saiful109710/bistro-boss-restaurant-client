import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) return <p>Loading....</p>

    if(!user){
        return <Navigate to='/login' state={{form:location}} replace></Navigate>
    }
    
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute

import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate } from 'react-router';

export const RouteUser = ({children}) => {
    const {Useraccount,setUseraccount,loading} = useContext(AuthContext)
   if(loading) return <div>Loading...</div>;
     if (!Useraccount || Object.keys(Useraccount).length === 0) {
        return <Navigate to="/Login" replace />;
      }



    return children ;
}

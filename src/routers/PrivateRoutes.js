
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";



export const PrivateRoutes = () => {

   const {user} = useSelector((state)=> state.auth)
 


    return user.isAutho
     ? <Navigate to="/register" />
     : false
        
}
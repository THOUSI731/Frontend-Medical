import { useContext } from "react";
import { Route,Navigate,Routes } from "react-router-dom"
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({children,...rest}) => {
     console.log("children ===> ",children);
     console.log("...rest ====> ",rest);
     const {user} = useContext(AuthContext)
  return (
     <>
          {!user ? <Navigate to='/login' />  : 
          <Routes> 
               <Route {...rest}> {children} </Route> 
          </Routes>}     
     </>
  )
}

export default PrivateRoute
import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext"


const Header = () => {
     let {user,logoutUser} = useContext(AuthContext)
  return (
    <div>
     <Link to='/'>Home</Link>
     <span> | </span>
     {!user ? (
          <Link to='/login'>Login</Link>
          ):(
          <Link onClick={logoutUser}>Logout</Link> 
     )}
     {user && <p>Hello {user.username}</p>}
    </div>
  )
}

export default Header
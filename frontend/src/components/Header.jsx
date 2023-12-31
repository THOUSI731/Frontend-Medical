import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {
     let {user,logoutUser} = useContext(AuthContext)
  return (

     <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
          <Container>
            <Navbar.Brand href="#home">Medicos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Link style={{textDecoration:"None",color:"black",marginLeft:"1%"}} to='/'>Home</Link>                   
                    {!user ? (
                         <Link style={{textDecoration:"None",color:"black",marginLeft:"1%"}} to='/login'>Login</Link>
                         ):(
                         <Link style={{textDecoration:"None",color:"black",marginLeft:"1%"}} onClick={logoutUser}>Logout</Link> 
                    )}
                    <Link style={{textDecoration:"None",color:"black",marginLeft:"1%"}} to='/register'>Register</Link>
                    <Link style={{textDecoration:"None",color:"black",marginLeft:"1%"}} to='/dashboard'>Dashboard</Link>
                    <Link style={{textDecoration:"None",color:"black",marginLeft:"1%"}} to='/admin'>Admin</Link>
                    {user && <p>Hello {user.username}</p>}
            </Navbar.Collapse>
          </Container>
     </Navbar>
  )
}

export default Header
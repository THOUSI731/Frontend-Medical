import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AuthContext from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserList = () => {
     let [users,setUsers] = useState([])
     let {authTokens} = useContext(AuthContext)
     let navigation=useNavigate()

     useEffect(()=>{
          getUsers()
        },[])
     let getUsers = async () => {
     let response = await fetch('http://127.0.0.1:8000/api/admin/',{
          method:'GET',
          headers:{
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer ' + String(authTokens.access)
          }
     })
     let data = await response.json()
     if(response.status === 200){
          setUsers(data)
     }
     }
  return (
     <Container>
      <Row>
        <Col lg={12}>
          {users.map( user => (
               <Col key={user.id}>
                    <Card onClick={()=>navigation(`/admin/authentication/user/${user.id}/change/`)} >
                         <Card.Body>{user.email}</Card.Body>
                    </Card>
               </Col>
          ))}</Col>
      </Row>
    </Container>
  )
}

export default UserList
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import AuthContext from "../../context/AuthContext";

const UserUpdate = () => {
     const {id} = useParams();
     const navigation = useNavigate();
     let {authTokens,logoutUser} = useContext(AuthContext)
     const [formData, setFormData] = useState({
          first_name:'',
          last_name:'',
          username: '',
          email: '',
          account_type:'',
          password:'',
          date_joined:'',
          is_active:'',
          is_blocked:'',
          is_staff:'',
          is_superuser:'',
        });
      
     const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
          ...formData,
          [name]: value,
     });
     };
     useEffect(()=>{
          getProfile()
        },[])
        let getProfile = async () => {
          let response = await fetch(`http://127.0.0.1:8000/api/admin/user/${id}/`,{
            method:'GET',
            headers:{
              'Content-Type' : 'application/json',
              'Authorization' : 'Bearer ' + String(authTokens.access)
            }
          })
          let data = await response.json()
          console.log(data);
          if(response.status === 200){
            setFormData(data)
          } else if(response.statusText === 'Unauthorized'){
            logoutUser()
          } 
        }
     const handleSubmit = async (e) => {
          e.preventDefault();
          let response = await fetch(`http://127.0.0.1:8000/api/admin/user/${id}/`,{
               method:'PATCH',
               headers:{
                    'Content-Type':'application/json',
                    'Authorization' : 'Bearer ' + String(authTokens.access)
               },
               body: JSON.stringify({
                    first_name:formData.first_name,
                    last_name:formData.last_name,
                    username: formData.username,
                    email: formData.email,
                    account_type: formData.account_type,
                    is_blocked:formData.is_blocked,
                    is_staff:formData.is_staff,
                    is_superuser:formData.is_superuser
               }),
          })
          // let data = await response.json()
          console.log(response);
          if (response.status === 200){
               alert('User Updated Successfully')
               console.log('User Updated Successfully')
               navigation('/admin')
          } else {
               alert('Something error in ur validation')
          }
     }

  return (
     <Card style={{ width: '40rem',margin:"10vh 25vw"}}>
     <Card.Body>
     <Form onSubmit={handleSubmit}>
     <Container>
     <Row>
          <Col>
          <Form.Group className="mb-3">
               <Form.Label>First Name</Form.Label>
               <Form.Control type="text" name='first_name' onChange={handleChange} value={formData.first_name}  placeholder="Enter Your First Name" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3">
               <Form.Label>Last Name</Form.Label>
               <Form.Control type="text" name='last_name' onChange={handleChange} value={formData.last_name}  placeholder="Enter Your Last Name" />
          </Form.Group>
          </Col>  
     </Row>    
     <Row>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name='username' onChange={handleChange} value={formData.username}  placeholder="example1" />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' onChange={handleChange} value={formData.email}  placeholder="name123@example.com" />
          </Form.Group>
          </Col> 
     </Row>
     <Row>
          <Col>
          <Form.Label>Account Type</Form.Label>
          <Form.Select defaultValue="1">
               <option value="1">User</option>
               <option value="2">Doctor</option>
               <option value="3">Admin</option>
          </Form.Select>
          </Col>
          <Col>
          </Col>
     </Row>
     <Row>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" name='password' readOnly value={formData.password} />
          </Form.Group>
          </Col>
     </Row>
     <Row>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date Joined</Form.Label>
          <Form.Control type="text" name='date_joined' readOnly value={formData.date_joined} />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3">
          <Form.Label>is_active</Form.Label>
          <Form.Control type="text" name='username'  value={formData.is_active} />
          </Form.Group>
          </Col>
     </Row>
     <Row>
     <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>is_blocked</Form.Label>
          <Form.Control type="text" name='username'  value={formData.is_blocked} />
          </Form.Group>
          </Col>
          <Col>
               <Form.Label>is_blocked</Form.Label>
               <Form type="text" name='is_blocked'  checked={formData.is_blocked} />
          </Col>
     </Row>
     <Row>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>is_superuser</Form.Label>
          <Form.Control type="text" name='username'  value={formData.is_superuser} />
          </Form.Group>
          </Col>
     </Row>
          <Button style={{width:"100%"}} type="submit">Update</Button>
     </Container>
     </Form>
     </Card.Body>
     </Card>
  )
}

export default UserUpdate
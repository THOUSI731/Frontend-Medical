import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Register = () => {
     const navigation = useNavigate();
     const [formData, setFormData] = useState({
          first_name:'',
          last_name:'',
          username: '',
          email: '',
          account_type:'user',
          password: '',
          password2: '',
        });
      
     const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
          ...formData,
          [name]: value,
     });
     };
     const handleSubmit = async (e) => {
          e.preventDefault();
          let response = await fetch('http://127.0.0.1:8000/api/register/',{
               method:'POST',
               headers:{
                    'Content-Type':'application/json'
               },
               body: JSON.stringify({
                    first_name:formData.first_name,
                    last_name:formData.last_name,
                    username: formData.username,
                    email: formData.email,
                    account_type: formData.account_type,
                    password: formData.password,
                    password2: formData.password2
               }),
          })
          let data = await response.json()
          if (response.status === 201){
               console.log();('User Created Successfully')
               navigation('/login')
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
          <Form.Control type="password" name='password' onChange={handleChange} value={formData.password}  placeholder="example321" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name='password2' onChange={handleChange} value={formData.password2}  placeholder="example321" />
          </Form.Group>
        </Col> 
      </Row>
        <Button style={{width:"100%"}} type="submit">Register</Button>
       </Container>
     </Form>
     </Card.Body>
   </Card>
  )
}

export default Register
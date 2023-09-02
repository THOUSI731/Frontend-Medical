import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const {loginUser} = useContext(AuthContext)

  return (
    <Card style={{ width: '18rem',margin:"15% 37%"}}>
      <Card.Body>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="name@example.com" />
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="5">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" name='password' placeholder="Password" />
          </Col>
          <Col sm="10">
            <Button type="submit" style={{marginTop:"10%",marginLeft:"40%"}}variant="primary">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
      </Card.Body>
    </Card>
  )
}

export default Login
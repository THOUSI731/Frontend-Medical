  import { useState,useEffect, useContext } from "react"
  import AuthContext from "../context/AuthContext"
  import { Container,Row,Col,Card } from "react-bootstrap"

  const Home = () => {
    let [profiles,setProfile] = useState([])
    console.log(profiles);
    let {authTokens,logoutUser} = useContext(AuthContext)

    useEffect(()=>{
      getProfile()
    },[])
    let getProfile = async () => {
      let response = await fetch('http://127.0.0.1:8000/api/home/',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer ' + String(authTokens.access)
        }
      })
      let data = await response.json()
      if(response.status === 200){
        setProfile(data)
      } else if(response.statusText === 'Unauthorized'){
        logoutUser()
      } 
    }
    const cards = profiles && profiles.length > 0 ? profiles.map( profile => (
      <Col key={profile.id} lg={ 6 }>
        <Card>
          <Card.Body>
            <Card.Title>{profile.first_name}</Card.Title>
            <Card.Text>{profile.last_name}</Card.Text>
            <Card.Text>{profile.email}</Card.Text>
            <Card.Text>{profile.username}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )):null;
    const isUserDoctor = profiles.account_type === 'doctor';
    console.log(isUserDoctor);
    return (
      <div>
        <p>You Are Logged to the Home Page</p>
        <Container>
          {isUserDoctor ? (
            <Col lg={ 12 }>
            <Card>
              <Card.Body>
                <Card.Title>{profiles.first_name}</Card.Title>
                <Card.Text>{profiles.last_name}</Card.Text>
                <Card.Text>{profiles.email}</Card.Text>
                <Card.Text>{profiles.username}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          ):(
            <Row>{cards}</Row>
          )}
        </Container>
      </div>
    )
  }

  export default Home
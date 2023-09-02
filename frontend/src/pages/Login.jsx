import { useContext } from "react"
import AuthContext from "../context/AuthContext"

const Login = () => {
  const {loginUser} = useContext(AuthContext)

  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="email" name="email" placeholder="Enter Your Email"/>
        <input type="password" name="password" placeholder="Enter Your Password"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login
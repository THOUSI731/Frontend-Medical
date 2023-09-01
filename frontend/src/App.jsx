import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Navigation } from './Views/Navigation'
import { Login } from './Views/Login'

function App() {

  return (
      <Router>
        <Navigation></Navigation>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/logout" element={<Logout/>}/> */}
        </Routes>
      </Router>
  )
}

export default App

import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Logout from './pages/Logout'
import Login from './pages/Login'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'


function App() {

  return (
      <Router>
        <AuthProvider>
          <Header></Header>
          <PrivateRoute path="/" element={<Home/>}/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/logout" element={<Logout/>}/> */}
          </Routes>
        </AuthProvider>
      </Router>
  )
}

export default App

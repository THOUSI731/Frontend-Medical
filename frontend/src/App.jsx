import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Register from './pages/Register'

function App() {

  return (
      <Router>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </AuthProvider>
      </Router>
  )
}

export default App

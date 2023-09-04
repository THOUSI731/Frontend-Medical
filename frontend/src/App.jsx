import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import UserList from './components/Admin/UserList'
import UserUpdate from './components/Admin/UserUpdate'

function App() {

  return (
      <Router>
        <AuthProvider>
          <Header></Header>
          <PrivateRoute />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/admin" element={<UserList/>}/>
            <Route path='/admin/authentication/user/:id/change/' element={<UserUpdate/>}></Route>
          </Routes>
        </AuthProvider>
      </Router>
  )
}

export default App

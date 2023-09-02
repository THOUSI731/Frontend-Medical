import { useContext,createContext,useEffect, useState } from "react";
import jwtdecode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const AuthContext = createContext()
export default AuthContext


export const AuthProvider = ({ children }) =>{
     let [user,setUser] = useState(()=>localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);
     let [authTokens,setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
     let [loading,setLoading] = useState(true)
     const navigation = useNavigate();

     const loginUser = async (e) => {
          e.preventDefault();
          console.log('Form Submitted');
          let response = await fetch('http://127.0.0.1:8000/api/token/',{
               method:'POST',
               headers:{
                    'Content-Type':'application/json'
               },
               body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value})
          })
          // console.log(response);
          let data = await response.json()
          // console.log("data : ",data);
          if(response.status === 200){
               setAuthTokens(data)
               setUser(jwtdecode(data.access))
               localStorage.setItem('authTokens',JSON.stringify(data))
               navigation('/')
               console.log(authTokens,user);
          }else{
               alert('Something Went Wrong');
          } 
          
          
     }
     const logoutUser = () => {
          setAuthTokens(null)
          setUser(null)
          localStorage.clear()
          navigation('/login')
     }
     const updateToken = async () => {
          console.log('update token');
          let response = await fetch('http://127.0.0.1:8000/api/token/refresh/',{
               method:'POST',
               headers:{
                    'Content-Type':'application/json'
               },
               body:JSON.stringify({'refresh': authTokens.refresh})
          })
          let data = await response.json()

          if (response.status === 200){
               setAuthTokens(data)
               setUser(jwtdecode(data.access))
               localStorage.setItem('authTokens',JSON.stringify(data))
          } else {
               logoutUser()
          }
     }
     useEffect(()=>{
          let fourMinutes = 1000 * 600 * 4
          let interval = setInterval(()=>{
               if (authTokens){
                    updateToken()
               }
          },fourMinutes)
          return ()=> clearInterval(interval);

     }, [authTokens,loading])

     let contextData = {
          loginUser:loginUser,
          user:user,
          logoutUser:logoutUser,
     }
     return (
          <AuthContext.Provider value={contextData} >
               {children}
          </AuthContext.Provider>
     )

}
import React, { useState } from 'react';
import "./Login.css"
import {useDispatch , useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { loginSuccess } from '../../Redux/Login/Action';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const[password , setPassword] = useState("")
    const[userData , setUserData] = useState([])

    const handleAdd = () => {
        const data = {
            userName,
            password
        }

        console.log("data" , data)

        axios.get("http://localhost:8080/student")
        .then((res) => {
          const newArr = res.data.filter((e) => {
            if(e.email ===userName && e.password === password){
              return e
            }
          } )

          if(newArr.length){
            dispatch(loginSuccess(newArr))
            navigate("/")
            console.log("eee" , newArr)
          }
          else{
            alert("no")
          }
          
        }
        )
        
    }
  return (
    <div>
      <div className='LoginHeading'><p>Login</p></div>
      
      <div className='LoginDiv'>
      <input type="text" placeholder='UserName' onChange={(e) => setUserName(e.target.value)}/> <br /><br />
      <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/> <br /><br />
      <button onClick={() => handleAdd()}>Login</button>
      </div>
    </div>
  )
}

export default Login

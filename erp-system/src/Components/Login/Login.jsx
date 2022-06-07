import React, { useState } from 'react';
import axios from "axios"

const Login = () => {

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
        // .then((res) => { setUserData(res.data)

        //   // const neww = res.data.filter((e) => e.email)
        // const newArr = userData.filter((e) => e.email  === userName)
        //   console.log("eee",newArr)
        // })
        .then((res) => {
          const newArr = res.data.filter((e) => e.email ===userName )
          console.log("eee" , newArr)
        }
        )
        
    }
  return (
    <div>
      <p>Login</p>
      
      <input type="text" placeholder='UserName' onChange={(e) => setUserName(e.target.value)}/> <br /><br />
      <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/> <br /><br />
      <button onClick={() => handleAdd()}>Login</button>
    </div>
  )
}

export default Login

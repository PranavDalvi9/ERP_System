import React, { useState } from 'react'

const Login = () => {

    const [userName, setUserName] = useState("")
    const[password , setPassword] = useState("")

    const handleAdd = () => {
        const data = {
            userName,
            password
        }

        console.log("data" , data)
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

import axios from 'axios'
import React, { useState } from 'react'

export default function RegisterNewUser() {

    const[name , setName] = useState("")
    const[department , setDepartment] = useState("")
    const[academic , setAcademic] = useState("")
    const[phone, setPhone] = useState("")
    const[fees , setFees] = useState("")
    const[email , setEmail] = useState("")

    const handleAdd = () => {
        const data = {
            name,
            department,
            academic,
            phone,
            fees,
            email,
            password : "12345"
        }

        axios.post("http://localhost:8080/student", data).then((res) => console.log(res.data))
    }

  return (
    <div>
      <h1>Create new user</h1>

      <input type="text" placeholder='enter name'  />
      <input type="text" placeholder='enter department'  />
      <input type="text" placeholder='enter academic year'  />
      <input type="text" placeholder='enter phone'  />
      <input type="text" placeholder='enter fees'  />
      <input type="text" placeholder='enter email'  />
      {/* <input type="text" placeholder='enter '  /> */}

      <button onClick={() => handleAdd()}>ADD</button>
    </div>
  )
}

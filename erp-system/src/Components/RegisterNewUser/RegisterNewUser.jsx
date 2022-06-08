import axios from 'axios'
import React, { useState } from 'react'

export default function RegisterNewUser() {

    const[name , setName] = useState("")
    const[department , setDepartment] = useState("")
    const[academic , setAcademic] = useState("")
    const[phone, setPhone] = useState("")
    const[fees , setFees] = useState("")
    const[email , setEmail] = useState("")

    const[roll , setRoll] = useState("")
    const[term , setTerm] = useState("")

    const handleAdd = () => {
        const data = {
            name,
            department,
            academic,
            phone,
            fees,
            role:"Student",
            email,
            roll,
            term,
            password : "12345"
        }
        console.log(data)

        axios.post("http://localhost:8080/student", data).then((res) => {alert("User Added Successfully") }).catch((err) => alert("Cannot register"))
    }

  return (
    <div>
      <h1>Create new user</h1>

      <input type="text" value={name} onChange={(e) =>  setName(e.target.value)} placeholder='enter name'  /> <br /><br />
      <input type="text" value={department} onChange={(e) =>  setDepartment(e.target.value)} placeholder='enter department'  /><br /><br />
      <input type="text" value={academic} onChange={(e) =>  setAcademic(e.target.value)} placeholder='enter academic year'  /><br /><br />
      <input type="text" value={phone} onChange={(e) =>  setPhone(e.target.value)} placeholder='enter phone'  /><br /><br />
      <input type="text" value={fees} onChange={(e) =>  setFees(e.target.value)} placeholder='enter fees'  /><br /><br />
      <input type="text" value={email} onChange={(e) =>  setEmail(e.target.value)} placeholder='enter email'  /><br /><br />
      

      <select name="" id="" onClick={(e)=> setTerm(e.target.value)}>
        <option value="">---</option>
        <option value="First Year">First Year</option>
        <option value="Second Year">Second Year</option>
        <option value="Third Year">Third Year</option>
        <option value="Fourth Year">Fourth Year</option>
      </select><br /><br />


      <input type="text" value={roll} onChange={(e) => setRoll(e.target.value)} placeholder="roll number" /> <br /><br />
      {/* <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="term" /> <br /><br /> */}
      {/* <input type="text" placeholder='enter '  /> */}

      <button onClick={() => handleAdd()}>ADD</button>
    </div>
  )
}

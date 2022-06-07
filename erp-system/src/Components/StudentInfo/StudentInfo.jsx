import React from 'react'
import axios from "axios"
import { useSelector } from 'react-redux'

const StudentInfo = () => {

  const userData = useSelector((store) => store.loginUserData.userData[0])
  console.log("userdata ta" , userData[0])

const handleLogout = () => {
  
}

  return (
    <div>
      <p>info student</p>

      <p>Name : {userData[0].name} </p>
      <p>Department : {userData[0].department}</p>
      <p>Academic Year : {userData[0].academic}</p>
      <p>Email : {userData[0].email}</p>
      <p>Phone no : {userData[0].phone}</p>
      
      <p>Fees paid : {userData[0].fees}</p>

      <button onClick={() => handleLogout()}>Logout</button>

    </div>
  )
}

export default StudentInfo

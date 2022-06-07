import React from 'react'
import axios from "axios"
import {useDispatch , useSelector} from "react-redux"
import { logout } from '../../Redux/Login/Action'
import {useNavigate} from "react-router-dom"


const StudentInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector((store) => store.loginUserData.userData[0])
  console.log("userdata ta" , userData)

const handleLogout = () => {
  dispatch(logout())
  navigate("/login")
}

  return (
    <div>
      {/* <p>info student</p> */}

      {
        userData !== undefined ? <>
        <p>Name : {userData[0].name} </p>
      <p>Department : {userData[0].department}</p>
      <p>Academic Year : {userData[0].academic}</p>
      <p>Email : {userData[0].email}</p>
      <p>Phone no : {userData[0].phone}</p>
      
      <p>Fees paid : {userData[0].fees}</p>

      <button onClick={() => handleLogout()}>Logout</button>
        </> : <p>No Data Available</p>
      }

      

    </div>
  )
}

export default StudentInfo

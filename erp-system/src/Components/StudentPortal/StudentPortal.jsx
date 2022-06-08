import React from 'react'
import "./StudentPortal.css"
import StudentInfo from "../StudentInfo/StudentInfo"
import Evevts from '../Evevts/Evevts'
import ListStudents from '../ListStudents/ListStudents'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../Redux/Login/Action'




const StudentPortal = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((store) => store.loginUserData.userData[0][0])
  console.log("login stst", userData)

  return (
    <div className='StudentPortalMain'>

      {
        userData.role === "Student" ? <>
          <div className='StudentHeading'><p>Student Login</p></div>
          <div className='StudentPortal'>
            <div className='StudentInfo'>Student Information <StudentInfo /> </div>
            <div className='Events'><Evevts /> </div>
          </div>
        </> :
          <></>
      }

      {
        userData.role === "Admin" ? <>
          <div>
            {/* <h1>Hello Admin {userData.name}  </h1> */}
            <div className='StudentHeading'><p>Hello Admin {userData.name}</p></div>

            <div className='AdminDiv'>
              <button onClick={() => navigate("/register_student")} >Add Student</button>
              <button onClick={() => navigate("/event_register")} >Add Event</button>
              <button onClick={() => {
                dispatch(logout());
                navigate("/login")
              }}>Logout</button>


              <div className='StudentList'>
                <ListStudents />
              </div>
              <div>
                <Evevts />
              </div>
            </div>
          </div>
        </> : <></>
      }









    </div>
  )
}

export default StudentPortal

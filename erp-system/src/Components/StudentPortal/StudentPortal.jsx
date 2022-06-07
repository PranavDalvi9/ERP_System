import React from 'react'
import "./StudentPortal.css"
import StudentInfo from "../StudentInfo/StudentInfo"
import Evevts from '../Evevts/Evevts'
import { useSelector } from 'react-redux'
import ListStudents from '../ListStudents/ListStudents'
import { useNavigate } from 'react-router-dom'




const StudentPortal = () => {
const navigate = useNavigate()
  const userData = useSelector((store) => store.loginUserData.userData[0][0].role)
  // console.log("login stst", userData)

  return (
    <div>

      {
        userData === "Student" ? <>
          <div className='StudentPortal'>
            <div className='StudentInfo'>Student Information <StudentInfo /> </div>
            <div className='Events'><Evevts /> </div>
          </div>
        </> :
          <></>
      }

      {
        userData === "Admin" ? <>
          <div>
            <h1>hello admin</h1>
            <button onClick={()=> navigate("/register_student") } >Add Student</button>
            <button onClick={()=> navigate("/event_register") } >Add Event</button>
            <div className='StudentList'>
              <ListStudents />
            </div>
            <div>
              <Evevts />
            </div>
          </div>
        </> : <></>
      }









    </div>
  )
}

export default StudentPortal

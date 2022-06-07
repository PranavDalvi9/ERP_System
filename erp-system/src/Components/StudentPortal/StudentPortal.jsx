import React from 'react'
import "./StudentPortal.css"
import StudentInfo from "../StudentInfo/StudentInfo"
import Evevts from '../Evevts/Evevts'


const StudentPortal = () => {
  return (
    <div>
      

        <div className='StudentPortal'>
            <div className='StudentInfo'>Student Information <StudentInfo/> </div>
            <div className='Events'><Evevts/> </div>
        </div>
      
    </div>
  )
}

export default StudentPortal

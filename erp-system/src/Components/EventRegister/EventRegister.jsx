import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const EventRegister = () => {
  const navigate = useNavigate()
    const[eventName, setEventName] = useState("")
    const[eventInfo, setEventInfo] = useState("")
    const[start, setStart] = useState("")
    const[end, setEnd] = useState("")
    const[reglink, setReglink] = useState("")

    const handleAdd = () => {
        const data = {
            eventName,
            eventInfo,
            start,
            end,
            reglink
        }
        console.log('dara' , data)
        axios.post("http://localhost:8080/events" , data).then((res) => console.log(res)).catch((err) => console.log(err))
    }

    
  return (
    <div>
      <p>register events</p>
      <button onClick={() => navigate("/")}>Go To Home Pgae</button> <br /><br />

      <input type="text" name="" onChange={(e) => setEventName(e.target.value)} placeholder='Name' /> <br /><br />
      <input type="text" name="" onChange={(e) => setEventInfo(e.target.value)} placeholder='Information' /><br /><br />
     <label>Start</label> <input type="date" name="" onChange={(e) => setStart(e.target.value)} placeholder='Start' /><br /><br />
     <label>End</label> <input type="date" name="" onChange={(e) => setEnd(e.target.value)} placeholder='End' /><br /><br />
      <input type="text" name="" onChange={(e) => setReglink(e.target.value)} placeholder='Registration Link' /><br /><br />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  )
}

export default EventRegister

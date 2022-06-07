import axios from 'axios'
import "./ListStudents.css"
import React, { useEffect, useState } from 'react'

export default function ListStudents() {

const[data , setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/student").then((res) => setData(res.data))
    },[])
    console.log("dataa" , data)

    const filterData = data.filter((e) => e.role === "Student")
  return (
    <div>
        <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>Term</th>
                <th>Current Year</th>
                <th>Contact Number</th>
            </tr>

{
    filterData.map((e) => (
        <tr>
        <td>{e.name}</td>
        <td>{e.roll}</td>
        <td>{e.term}</td>
        <td>{e.academic}</td>
        <td>{e.phone}</td>
    </tr>
    ))
}
           
        </table>
        </div>
      
    </div>
  )
}

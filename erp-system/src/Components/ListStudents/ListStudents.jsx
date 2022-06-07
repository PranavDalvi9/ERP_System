import axios from 'axios'
import "./ListStudents.css"
import React, { useEffect, useState } from 'react'

export default function ListStudents() {

    const [data, setData] = useState([])
    const [name1, setName1] = useState("")
    const [roll1, setRoll1] = useState("")
    const [contact1, setContact1] = useState("")

    // console.log("name1111" , name1 , roll1 , contact1)

    // var filterDataOne ;

    var filterData;

    useEffect(() => {
        axios.get("http://localhost:8080/student").then((res) => { setData(res.data) })
        // const filterData = data.filter((e) => e.role === "Student")

    }, [])

    filterData = data.filter((e) => e.role === "Student")
    console.log("dataa", data)

    // const filterforStudent = data.filter((e) => e.role === "Student")


    
    useEffect(() => {
        //     if(name1.length > 0){
        var filterData22 = name1.length === 0 ? filterData : filterData.filter((e) => e.name.toLowerCase().includes(name1.toLowerCase()))
        console.log("name fill ", name1.length, filterData22)
        //     }
        //     if(roll1.length > 0){
        //         filterData = name1.length === 0 ? filterDataOne : filterDataOne.filter((e) => e.roll1.toLowerCase().includes(roll1.toLowerCase()))
        //         // console.log("roll fill ", filterData)
        //     }
        //     if(contact1.length > 0){
        //         filterData = name1.length === 0 ? filterDataOne : filterDataOne.filter((e) => e.phone.toLowerCase().includes(contact1.toLowerCase()))
        //         // console.log("contact fill ", filterData)
        //     }

        //     // console.log("filter name" , nameFilter)
    }, [name1, roll1, contact1])


    return (
        <div>
            <div>
                <table>

                    <tr>
                        <td><input type="text" onChange={(e) => setName1(e.target.value)} placeholder='Name' /></td>
                        <td><input type="text" value={roll1} onChange={(e) => setRoll1(e.target.value)} placeholder='Roll no' /></td>
                        <td><input type="text" placeholder='Term' /></td>
                        <td><input type="text" placeholder='Year' /></td>
                        <td><input type="text" value={contact1} onChange={(e) => setContact1(e.target.value)} placeholder='Contact' /></td>

                    </tr>

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

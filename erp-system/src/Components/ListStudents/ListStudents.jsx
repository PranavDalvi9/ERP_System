import axios from 'axios'
import "./ListStudents.css"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { dataSuccess } from '../../Redux/StudentData/Action'

export default function ListStudents() {

    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [dataappend, setDataappend] = useState([])
    const [name1, setName1] = useState("")
    const [roll1, setRoll1] = useState("")
    const [contact1, setContact1] = useState("")
    const[term , setTerm] = useState("")
    const[year, setYear] = useState("")

    useEffect(() => {
        dataget()
    }, [])

    function dataget() {
        axios.get("https://erp-pranav-dalvi.herokuapp.com/student").then((res) => { setData(res.data); setDataappend(res.data) })
    }

    useEffect(() => {
        nameSearch()
    }, [name1])

    useEffect(() => {
        rollSearch()
    }, [roll1])
    useEffect(() => {
        cotactSearch()
    }, [contact1])

    useEffect(() => {
        termFilter()
    },[term])
    useEffect(() => {
        yearFilter()
    },[year])


    function nameSearch() {
        var filterData22 = name1.length === 0 ? dataappend : data.filter((e) => e.name.toLowerCase().includes(name1.toLowerCase()))
        console.log("name fill ", name1.length, filterData22)
        setData(filterData22)
    }

    function rollSearch() {
        var filterData22 = roll1.length === 0 ? dataappend : data.filter((e) => e.roll.toLowerCase().includes(roll1.toLowerCase()))
        setData(filterData22)
    }

    function cotactSearch() {
        var filterData22 = contact1.length === 0 ? dataappend : data.filter((e) => e.phone.toLowerCase().includes(contact1.toLowerCase()))
        setData(filterData22)
    }

    function termFilter(){
        var filterData22 = term.length === 0 ? dataappend : data.filter((e) => e.term === term)
        setData(filterData22)
    }

    function yearFilter(){
        var filterData22 = year.length === 0 ? dataappend : data.filter((e) => e.academic === year)
        setData(filterData22)
    }


    return (
        <div>
            <div>
                <table>

                    <tr>
                        <td><input type="text" onChange={(e) => setName1(e.target.value)} placeholder='Name' /></td>
                        <td><input type="text" value={roll1} onChange={(e) => setRoll1(e.target.value)} placeholder='Roll no' /></td>
                        <td>
                            <select name="" id="" onClick={(e) => setTerm(e.target.value)}>
                                <option value="">---</option>
                                <option value="First Year">First Year</option>
                                <option value="Second Year">Second Year</option>
                                <option value="Third Year">Third Year</option>
                                <option value="Fourth Year">Fourth Year</option>
                            </select>
                        </td>
                        <td>
                        <select name="" id="" onClick={(e) => setYear(e.target.value)}>
                                <option value="">---</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>    
                        </td>
                        <td><input type="text" value={contact1} onChange={(e) => setContact1(e.target.value)} placeholder='Contact' /></td>

                    </tr>

                    <tr>
                        <th>Name</th>
                        <th>Roll no</th>
                        <th>Term</th>
                        <th>Current Year</th>
                        <th>Contact Number</th>
                    </tr>


                    {/* {
    filterData === undefined ? <>yes</> : <>no</>
} */}

                    {
                        data.map((e) => (
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

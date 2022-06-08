import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import axios from "axios"

const Evevts = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  console.log(data)

  useEffect(() => {
    axios.get("http://localhost:8080/events").then((res) => setData(res.data)).catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {/* <p>enemts</p> */}
      <p onClick={() => navigate("/event_register")}>Register Event</p>

      <table>
        {/* <tr>
          <td><input type="text" placeholder="Search by Name" /></td>
          <td><input type="text" placeholder="Search by Information" /></td>
          <td><input type="text" placeholder="Search by Date" /></td>
          <td><input type="text" placeholder="Search by Date" /></td>
          <td></td>
        </tr> */}

        <tr>
          <th>Event Name</th>
          <th>Event Information</th>
          <th>Start Date</th>
          <th>End Dtae</th>
          <th>Reistration</th>
        </tr>


        {
          data.map((e) => (
            <tr>
              <td>{e.eventName}</td>
              <td>{e.eventInfo}</td>
              <td>{e.start}</td>
              <td>{e.end}</td>
              <td><a href={e.reglink}>Link</a></td>
            </tr>
          ))
        }


        {/* <tr>
          <td>name</td>
          <td>info</td>
          <td>st</td>
          <td>end</td>
          <td>reg</td>
        </tr> */}

      </table>
    </div>
  );
};

export default Evevts;

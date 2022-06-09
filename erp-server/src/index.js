const express = require("express");
const cors = require("cors");

const connect = require("./configs/db")

const dotenv = require("dotenv");
const app = express();
app.use(express.json());

let port = process.env.PORT || 2348;


const studentApi = require("./controllers/StudentController");
const eventsApi = require("./controllers/EventsController")



app.use(cors());


app.use("/student", studentApi);
app.use("/events" , eventsApi);


app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
  console.log("working");
});

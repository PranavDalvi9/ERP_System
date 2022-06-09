import logo from "./logo.svg";
import "./App.css";
// import Admin from "./Components/Admin/Admin";
import Login from "./Components/Login/Login";
import StudentPortal from "./Components/StudentPortal/StudentPortal";
import EventRegister from "./Components/EventRegister/EventRegister";
import { Route, Routes } from "react-router";
import { Link, Navigate, useNavigate } from "react-router-dom";
import RegisterNewUser from "./Components/RegisterNewUser/RegisterNewUser";
import { useSelector } from "react-redux";

const PrivateRoute = ({ isAuthenticate, children }) => {
  return isAuthenticate ? children : <Navigate to={"/login"} />;
};
 
function App() {
  // const navigate = useNavigate()
  const isAuthenticate = useSelector(
    (store) => store.loginUserData.isAuthenticate
  );
  console.log("naviaaa is auth ", isAuthenticate);

  return (
    <div className="App">
      {/* <h1>hello</h1> */}

      {/* <Login/> */}
      {/* <Admin/> */}

      {/* <StudentPortal/> */}

      {/* <EventRegister/> */}
      {/* <RegisterNewUser/> */}

      <Routes>
        <Route path="/login" element={<Login />} />

        {/* <Route path='/' element={<StudentPortal/>}/> */}

        {/* <Route path="/event_register" element={<EventRegister />} />

        <Route path="/register_student" element={<RegisterNewUser />} /> */}

        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <StudentPortal />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/event_register"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <EventRegister />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/register_student"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <RegisterNewUser />
            </PrivateRoute>
          }
        ></Route>

        
      </Routes>
    </div>
  );
}

export default App;

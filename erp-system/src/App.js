import logo from './logo.svg';
import './App.css';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import StudentPortal from './Components/StudentPortal/StudentPortal';
import EventRegister from './Components/EventRegister/EventRegister';
import { Route, Routes } from 'react-router';
import RegisterNewUser from './Components/RegisterNewUser/RegisterNewUser';


function App() {
  return (
    <div className="App">
      <h1>hello</h1>

      {/* <Login/> */}
      {/* <Admin/> */}

      {/* <StudentPortal/> */}

      {/* <EventRegister/> */}
{/* <RegisterNewUser/> */}

      <Routes>

      <Route path='/login' element={<Login/>}/>

      <Route path='/' element={<StudentPortal/>}/>

        <Route path='/event_register' element={<EventRegister/>}/>

        <Route path='/register_student' element={<RegisterNewUser/>} />


      </Routes>
    </div>
  );
}

export default App;

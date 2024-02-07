import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import MainComponent from "./Routs/MainComponent"
import Login from "./Routs/Pages/Login"
import Navbar from "./atoms/Navbar"
import ProtectedRoutes from "./Middleware/ProtectedRoutes"
import VideoCall from "./Routs/Pages/VideoCall"
import GetStarted from "./Routs/Pages/GetStarted"
import Stepper from "./Routs/Pages/Stepper"
import Home from "./Routs/Pages/Home"

function App() {
  return (
    <div className='login-bg'>
      <Navbar />
      <Routes>
        {/* {localStorage.getItem("userIsLoggedIn") ? null : ( */}
        <Route path="/login" element={<Login />} />
        {/* // )} */}
        {/* <Route element={<ProtectedRoutes />}> */}
        <Route path="/*" element={<MainComponent />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* </Route> */}
        <Route path="home" element={<Home />} />
        <Route path="videocall/:roomID" element={<VideoCall />} />
        <Route path="GetStarted" element={<GetStarted />} />
        <Route path="Stepper" element={<Stepper />} />
      </Routes>
    </div>
  );
}

export default App;

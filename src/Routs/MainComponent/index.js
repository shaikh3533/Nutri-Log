import React from 'react'
import VideoCall from "../Pages/VideoCall"
import GetStarted from "../Pages/GetStarted"
import Home from "../Pages/Home"
import { Routes, Route } from "react-router-dom";


export default function Index() {
  return (
    <div className=''>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="videocall/:roomID" element={<VideoCall />} />
        <Route path="GetStarted" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

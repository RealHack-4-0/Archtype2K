import React from 'react'
import { Route, Routes } from "react-router-dom";
import CommonHeader from '../Common/CommonHeader';
import Home from './Components/Home';
import Appointments from './Components/Appointments';
import MakeAppointment from './Components/MakeAppointment';
import MyReports from './Components/MyReports';
import MyProfile from './Components/MyProfile';

const PatientRoutes = () => {
  return (
    <div>
        <CommonHeader />  
        <Routes>
            <Route path="" element={<Home/>} />
            <Route path="appointments" element={<Appointments/>} />
            <Route path="make-appointment" element={<MakeAppointment/>} />
            <Route path="reports" element={<MyReports/>} />
            <Route path="profile" element={<MyProfile/>} />
        </Routes>
    </div>
  )
}

export default PatientRoutes
import React from 'react'
import CommonHeader from '../Common/CommonHeader'
import { Routes, Route } from 'react-router-dom'
import DoctorHome from './Components/DoctorHome'
import DoctorAppointments from './Components/DoctorAppointments'
import DoctorProfile from './Components/DoctorProfile'

function DoctorRoutes() {
    return (
        <div>
            <CommonHeader/>
            <Routes>
                <Route path="" element={<DoctorHome/>} />
                <Route path="appointments" element={<DoctorAppointments/>} />
                <Route path="profile" element={<DoctorProfile/>} />
            </Routes>
        </div>
    )
}

export default DoctorRoutes

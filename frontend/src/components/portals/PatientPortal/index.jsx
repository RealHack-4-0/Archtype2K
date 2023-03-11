import React from 'react'
import { Route, Routes } from "react-router-dom";
import CommonHeader from '../Common/CommonHeader';

const PatientRoutes = () => {
  return (
    <div>
        <CommonHeader />  
        <h1>Patient Route</h1>
        <Routes>
            <Route path="" element={<div>Home</div>} />
            <Route path="profile" element={<div>Profile</div>} />
            <Route path="appointments" element={<div>Appointments</div>} />
            <Route path="prescriptions" element={<div>Prescriptions</div>} />
            <Route path="reports" element={<div>Reports</div>} />
            <Route path="payments" element={<div>Payments</div>} />
            <Route path="medicalhistory" element={<div>Medical History</div>} />
        </Routes>
    </div>
  )
}

export default PatientRoutes
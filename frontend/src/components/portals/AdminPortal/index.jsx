import React from 'react'
import { Route, Routes } from "react-router-dom";
import CommonHeader from '../Common/CommonHeader';

const AdminRoutes = () => {
    return (
        <div>
            <CommonHeader />
            <h1>Admin route</h1>
            <Routes>
                <Route path="" element={<div>Dashboard</div>} />
                <Route path="create-account" element={<div>Create Account</div>} />
                <Route path="view-doctors" element={<div>View Doctors</div>} />
                <Route path="view-patient" element={<div>View Patients</div>} />
            </Routes>
        </div>
    )
}

export default AdminRoutes
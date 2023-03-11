import React from 'react'
import { Route, Routes } from "react-router-dom";
import CommonHeader from '../Common/CommonHeader';
import AdminDashboard from './Components/AdminDashboard';
import AddHealthProfessionals from './Components/AddHealthProfessionals';
import ViewDoctors from './Components/ViewDoctors';
import ViewPatients from './Components/ViewPatients';

const AdminRoutes = () => {
    return (
        <div>
            <CommonHeader />
            <Routes>
                <Route path="" element={<AdminDashboard/>} />
                <Route path="create-account" element={<AddHealthProfessionals/>} />
                <Route path="view-doctors" element={<ViewDoctors/>} />
                <Route path="view-patients" element={<ViewPatients/>} />
            </Routes>
        </div>
    )
}

export default AdminRoutes

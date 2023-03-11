import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import PatientRoutes from './portals/PatientPortal'
import AdminRoutes from './portals/AdminPortal'
import HomePage from './home/HomePage'
import DoctorRoutes from './portals/DoctorPortal'

function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const renderPortals = (param) => {
    console.log(param);
    switch (param) {
      case 'super_admin':
        return <AdminRoutes />;
      case 'patient':
        return <PatientRoutes />;
      case 'doctor':
        return <DoctorRoutes/>;
      default:
        return <></>;
    }
  }

  return (
    <>
      {/* {user ? (<>    <div><pre> user id    - {user._id}</pre> </div>
        <div><pre> user name  - {user.name}</pre></div>
        <div><pre> user email - {user.email}</pre></div>
        <div><pre> user token - </pre> {user.token}</div>
        <div><pre> user role  - {user.role}</pre></div>
      </>) : (<></>)} */}
      {user ? renderPortals(user.role) : <></>}
      <HomePage/>
      
    </>
  )
}

export default Home
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

import AdminPortal from './portals/AdminPortal/AdminPortal'
import PatientRoutes from './portals/PatientPortal'
import AdminRoutes from './portals/AdminPortal'

function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const renderPortals = (param) => {
    console.log('param: ', param)
    switch (param) {
      case 'admin':
        console.log("Admin Portal");
        return <AdminRoutes />;
      case 'patient':
        console.log("Patient Portal");
        return <PatientRoutes />;
      // case 'SHELTER_MANAGER':
        // return <ShelterManagerPortal />;
      default:
        return <></>;
    }
  }

  return (
    <>
      <br />
      {/* {user ? (<>    <div><pre> user id    - {user._id}</pre> </div>
        <div><pre> user name  - {user.name}</pre></div>
        <div><pre> user email - {user.email}</pre></div>
        <div><pre> user token - </pre> {user.token}</div>
        <div><pre> user role  - {user.role}</pre></div>
      </>) : (<></>)} */}
      {user ? renderPortals(user.role) : <></>}
    </>
  )
}

export default Home
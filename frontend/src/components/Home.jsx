import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import HomePage from './home/HomePage'

import AdminPortal from './portals/AdminPortal'
import PatientPortal from './portals/PatientPortal'

function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const renderPortals = (param) => {
    switch (param) {
      case 'ADMIN':
        return <AdminPortal />;
      case 'patient':
        return <PatientPortal />;
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

      <HomePage/>

      {user ? renderPortals(user.role) : <></>}
    </>
  )
}

export default Home
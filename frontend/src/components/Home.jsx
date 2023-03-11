import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import AdminPortal from './portals/AdminPortal'
import EventManagerPortal from './portals/EventManagerPortal'
import ShelterManagerPortal from './portals/ShelterManagerPortal'

function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  
  const renderPortals = (param) => {
    switch(param) {
      case 'ADMIN':
        return <AdminPortal />;
      case 'EVENT_MANAGER':
        return <EventManagerPortal />;
      case 'SHELTER_MANAGER':
        return <ShelterManagerPortal />;
      default:
        return <></>;
    }
  }

  return (
    <>
    Home
    <br/>
     {user ? (<>    <div><pre> user id    - {user._id}</pre> </div>
    <div><pre> user name  - {user.name}</pre></div>
    <div><pre> user email - {user.email}</pre></div>
    <div><pre> user token - </pre> {user.token}</div>
    <div><pre> user role  - {user.role}</pre></div>
    </>):(<>please login</>)}

    { user ? renderPortals(user.role) : <></>}
    </>
  )
}

export default Home
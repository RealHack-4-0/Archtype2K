import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Home from './components/Home';
import PatientRoutes from './components/portals/PatientPortal';
import AdminRoutes from './components/portals/AdminPortal';


function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/patient/*' element={<PatientRoutes />}  />
            <Route path='/admin/*' element={<AdminRoutes />}  />
          </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;

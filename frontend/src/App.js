import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;

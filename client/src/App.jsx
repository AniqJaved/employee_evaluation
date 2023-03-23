import './App.css';
import { useContext } from 'react';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import WorkloadList from './pages/workloadlist/WorkloadList';
import Workload from './pages/workload/Workload'
import NewWorkload from './pages/newWorkload/NewWorkload';
import NewResearch from './pages/newResearch/NewResearch';
import Topbar from './components/topbar/Topbar'
import  {AuthContext}  from './context/authContext/AuthContext';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
const App = () => {
  const {user} = useContext(AuthContext); //Only if user is true then he will be able to see the /movies,/series,/watch,  //If no user then Navigate will redirect the user to register or login
  // const isUserVal = user.user ? true : false;
  // console.log(isUserVal)
  // const isUserBool = 0;
  // if(isUserVal != null){
  //   const isUserBool = true
  // }
  // else{
  //   const isUserBool = false
  // }
  return (
  <Router>
    <Topbar/>
      <Routes>
        <Route path='/' element={user ? <Navigate to="/workload" /> : <Navigate to="/register" replace />}/>  
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />}/>
        <Route path='/workload' element={user ? <WorkloadList/> : <Navigate to="/" replace />}/>
        <Route path="/workload/:workloadId" element={user ? <Workload /> : <Navigate to="/" replace />}/>
        <Route path="/newworkload" element={user ? <NewWorkload /> : <Navigate to="/" replace />}/>
        <Route path="/newresearch" element={user ? <NewResearch /> : <Navigate to="/" replace />}/>
        {user && 
          <>
            <Route path='/movies' element={<Home type="movie"/>}/> {/* This route will not be having effect of proxy so /movies will simply mean to add the /movies to localhost:3000 that is of client_2,it means proxy will be having effect only on axios */}
            <Route path='/series' element={<Home type="series"/>}/>
            <Route path='/watch' element={<Watch/>}/>
          </>
        }
      </Routes>
  </Router>
  );
}


export default App;

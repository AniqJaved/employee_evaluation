import './App.css';
import { useContext } from 'react';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import WorkloadList from './pages/workloadlist/WorkloadList';
import ResearchList from './pages/researchlist/ResearchList';
import Workload from './pages/workload/Workload'
import NewWorkload from './pages/newWorkload/NewWorkload';
import NewResearch from './pages/newResearch/NewResearch';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
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



  const Main = () => (
    <>
    <div className="container">
      <Routes>
        <Route path='/workload' element={user ? <WorkloadList/> : <Navigate to="/" replace />}/>
        <Route path='/research' element={user ? <ResearchList/> : <Navigate to="/" replace />}/>
        <Route path="/workload/:workloadId" element={user ? <Workload /> : <Navigate to="/" replace />}/>
        <Route path="/newworkload" element={user ? <NewWorkload /> : <Navigate to="/" replace />}/>
        <Route path="/newresearch" element={user ? <NewResearch /> : <Navigate to="/" replace />}/>
      </Routes>
    </div>
    </>
  );




  return (
  <Router>
    <Topbar/>
      <Routes>
        <Route path='/' element={user ? <Navigate to="/workload" /> : <Navigate to="/login" replace />}/>  
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />}/>
        <Route path="/*" element={<Main />} />
      </Routes>
  </Router>
  );
}


export default App;

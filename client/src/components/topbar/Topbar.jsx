import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {React, useState, useContext} from 'react'
import { AuthContext } from '../../context/authContext/AuthContext';
import { logoutUser } from '../../context/authContext/apiCalls';
import { Link } from "react-router-dom";

export default function Topbar() {

  const {isFetching, dispatch} = useContext(AuthContext);  //dispatch is just like a function which will be updating the isFetching variable, just as in case of useState we have a function setPassword.

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser(dispatch);
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Link to="/login" className="link">
              <button 
              className='loginButton' 
              onClick={handleLogout} 
              >
                Logout
              </button>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <Link to="/research" className="link">
              <button 
              className='loginButton' 
              >
                View Research
              </button>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <Link to="/workload" className="link">
              <button 
              className='loginButton' 
              >
                View Workload
              </button>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <Link to="/newworkload" className="link">
              <button 
              className='loginButton' 
              >
                Add Workload
              </button>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <Link to="/newresearch" className="link">
              <button 
              className='loginButton' 
              >
                Add Research
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

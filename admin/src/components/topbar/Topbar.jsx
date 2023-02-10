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
          <span className="logo">lamaadmin</span>
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
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

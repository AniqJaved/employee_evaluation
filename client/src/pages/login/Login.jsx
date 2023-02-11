import React from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';
import './login.scss'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext);  //dispatch is just like a function which will be updating the isFetching variable, just as in case of useState we have a function setPassword.
    const handleLogin = (e) => {
        e.preventDefault();
        login({email,password}, dispatch);
        navigate()
    }
    
    return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="text" placeholder='Email or phone number' onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Sign In</button>
                <span>New to Netflix? <b>Sign up now</b></span>
                <small>This page is protected by Google reCaptha to ensure you are not a bot.<b> Learn more</b></small>
            </form>
            
        </div>
    </div>
  )
}

export default Login
import { useContext } from 'react';
import {React, useState} from 'react'
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls';
import "./login.css"

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch} = useContext(AuthContext);  //dispatch is just like a function which will be updating the isFetching variable, just as in case of useState we have a function setPassword.
  const handleLogin = (e) => {
    e.preventDefault();
    login({email,password}, dispatch);
  }

  return (
    <>
  <div className="login">
    <form className="loginForm">
        <input type="text" placeholder='email' className="loginInput" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' className="loginInput" onChange={(e) => setPassword(e.target.value)}/>
        <button 
          className='loginButton' 
          onClick={handleLogin} 
          disabled={isFetching}
        >
          Login

        </button>
    </form>
  </div>
  </>
  )
}

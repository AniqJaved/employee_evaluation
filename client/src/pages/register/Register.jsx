import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useContext} from "react";
import { UserContext } from '../../context/userContext/UserContext';
import { createUser } from '../../context/userContext/apiCalls';
import './register.scss'

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const {dispatch} = useContext(UserContext)

    const handleChange = (e) =>{
        const value = e.target.value;
        setUser({...user, [e.target.name]: value})
    }

    console.log(user)
    const HandleSubmit = (e) =>{
        e.preventDefault();
        createUser(user, dispatch);
        navigate('/login')
    }
    
    return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                <button className='loginButton'>Sign Up</button>
            </div>
        </div>
        <div className="container">
            <form>
                <div className="addProductItem">
                    <label>Username</label>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Email</label>
                    <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
                </div>
                <div className="addProductItem">
                    <label>Password</label>
                    <input type="text" placeholder="Password" name="password" onChange={handleChange}/>
                </div>
                <button onClick={HandleSubmit} className="addProductButton">Create</button>
            </form>
        </div>
    </div>
  )
}

export default Register
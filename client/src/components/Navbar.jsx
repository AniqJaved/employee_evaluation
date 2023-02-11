import {  ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import "./navbar.scss"
const Navbar = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
    <>
    <div className={offset === 0 ? "navbar" : "navbar scrolled" }>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Hey" width={"20%"} className="span"/>
                <Link to="/" className='link'>
                <span>Home</span>
                </Link>
                <Link to="/series" className='link'>
                    <span>Series</span>
                </Link>
                <Link to="/movies" className='link'>
                    <span>Movies</span>
                </Link>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <p>KID</p>
                <span className='icon'><Notifications/></span>
                <img src="https://images.pexels.com/photos/5591708/pexels-photo-5591708.jpeg?auto=compress&cs=tinysrgb&w=800" width={"5%"} alt="" />
                <div className='dropDown icon'>
                    <ArrowDropDown />
                    <div className='options'>
                        <span>Settings</span>
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Navbar
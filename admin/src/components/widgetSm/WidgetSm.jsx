import React, { useEffect, useState } from 'react'
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([])
  
  useEffect(()=>{
    const getNewUsers = async ()=>{
      try{
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,  //Here we are fetching jwt token from the local storage that we have stored in case of the AuthContext
          }
        });
        
        setNewUsers(res.data)
      }
      catch(err){
        console.log(err)
      }
    };
    getNewUsers();
  }, []);

  //console.log(newUsers)
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user =>(
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"}
              alt=""
             className="widgetSmImg"
            />
           <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

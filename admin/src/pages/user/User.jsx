import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useState, useContext } from "react";
import { Link, Redirect, useLocation, useHistory  } from "react-router-dom";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import "./user.css";

export default function User() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const user = location.user;
  const userId = user._id;

  const [updatedUser, setUpdatedUser] = useState(null);

  const {dispatch} = useContext(UserContext)

  const handleChange = (e) =>{
    const value = e.target.value;
    setUpdatedUser({...updatedUser, [e.target.name]: value})
  }

  console.log(updatedUser)

  const HandleSubmit = (e) =>{
    e.preventDefault();
    updateUser(updatedUser, dispatch, userId);
    history.push("/users");
  }



  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">{user.email}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Admin: {user.isAdmin ? "Yes" : "No"}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Visiting: {user.isVisiting ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Admin</label>
                <select name="isAdmin" onChange={handleChange}>
                  <option value=""></option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="userUpdateItem">
                <label>Visiting</label>
                <select name="isVisiting" onChange={handleChange}>
                  <option value=""></option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <button onClick={HandleSubmit} className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

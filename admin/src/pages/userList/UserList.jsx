import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext} from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { useEffect } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";

export default function UserList() {
  //const [data, setData] = useState(userRows);
  const {users, dispatch} = useContext(UserContext)
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const handleDelete = (id) => {
    deleteUser(id,dispatch);
  };
  
  useEffect(()=>{
    getUsers(dispatch);
  }, [dispatch]);
  console.log(users)
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "isVisiting",
      headerName: "Visiting",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/user/" + params.row._id, user:params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  );
}

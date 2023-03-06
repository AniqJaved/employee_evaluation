import "./workloadList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext} from "react";
import { ResearchContext } from "../../context/researchContext/ResearchContext";
import { useEffect } from "react";
import { deleteResearch, getResearchs } from "../../context/researchContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";


export default function ResearchList() {
  


  
  const {researchs, dispatch} = useContext(ResearchContext)
  const [titles, setTitles] = useState([]);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  // const handleDelete = (id) => {
  //   deleteResearch(id,dispatch);
  // };
  
  useEffect(()=>{
    getResearchs(dispatch);
  }, [dispatch]);
  console.log(researchs)

//   const customStyles = {
//     row: {
//       height: 100
//     }
//   };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.owner.username}
          </div>
        );
      },
    },
    { field: "bs", headerName: "BS students", width: 200 },
    { field: "ms", headerName: "MS students", width: 200 },
    { field: "chapBook", headerName: "Chapters of Book", width: 200 },
    { field: "devProduct", headerName: "Developement Product", width: 200 },
    { field: "intBook", headerName: "International Book", width: 200 },
    { field: "intConf", headerName: "International Conference", width: 200 },
    { field: "intJournal", headerName: "International Journal", width: 200 },
    { field: "intPatent", headerName: "International Patent", width: 200 },
    { field: "natBook", headerName: "National Book", width: 200 },
    { field: "natConf", headerName: "National Conference", width: 200 },
    { field: "natJournal", headerName: "National Journal", width: 200 },
    { field: "natPatent", headerName: "National Patent", width: 200 },
    { field: "researchProject", headerName: "Research Project", width: 200 },
    { field: "revJournal", headerName: "Revised Journal", width: 200 },
    { field: "techReport", headerName: "Technical Report", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/workload/" + params.row._id, workload: params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
    <div className="userList">
      <DataGrid
        rows={researchs}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
        rowHeight = {100}
      />
    </div>
    </>
  );
}

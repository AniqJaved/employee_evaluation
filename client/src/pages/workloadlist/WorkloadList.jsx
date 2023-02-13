import "./workloadList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext} from "react";
import { WorkloadContext } from "../../context/workloadContext/WorkloadContext";
import { useEffect } from "react";
import { deleteWorkload, getWorkload } from "../../context/workloadContext/apiCalls";
import { CourseContext } from "../../context/courseContext/CourseContext";
import { deleteCourse, getCourses } from "../../context/courseContext/apiCalls";


export default function WorkloadList() {
  
  const {workload, dispatch} = useContext(WorkloadContext)
  const [titles, setTitles] = useState([]);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const handleDelete = (id) => {
    deleteWorkload(id,dispatch);
  };
  
  useEffect(()=>{
    getWorkload(dispatch);
  }, [dispatch]);
  console.log(workload)


  const columns = [
    { field: "owner", headerName: "ID", width: 90 },
    {
      field: "employeeName",
      headerName: "Employee Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.employeeName}
            {console.log(params.row.employeeName)}
          </div>
        );
      },
    },
    { field: "semester", headerName: "Semester", width: 200 },
    { field: "year", headerName: "Year", width: 200 },
    { field: "managerialResponsibility", headerName: "Managerial Responsibility", width: 200 },
    { field: "noOfStudents", headerName: "No. of Students", width: 200 },
    { field: "managerialResponsibility", headerName: "Managerial Responsibility", width: 200 },
    {
      field: "title",
      headerName: "Course Title",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.courseDetails.map((courseDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{courseDetail.courseId ? courseDetail.courseId.title : 'No course assigned'}
                  </li>
                  );
                })
              }
      </ul>
          </div>
        );
        console.log(params)
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/workload/" + params.row._id}>
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
    <>
    <div className="userList">
      <DataGrid
        rows={workload}
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

import "./workloadList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext} from "react";
import { WorkloadContext } from "../../context/workloadContext/WorkloadContext";
import { useEffect } from "react";
import { deleteWorkload, getWorkloads } from "../../context/workloadContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";


export default function WorkloadList() {
  


  
  const {workloads, dispatch} = useContext(WorkloadContext)
  const [titles, setTitles] = useState([]);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const handleDelete = (id) => {
    deleteWorkload(id,dispatch);
  };
  
  useEffect(()=>{
    getWorkloads(dispatch);
  }, [dispatch]);
  console.log(workloads)

  const customStyles = {
    row: {
      height: 100
    }
  };

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
          </div>
        );
      },
    },
    { field: "semester", headerName: "Semester", width: 200 },
    { field: "year", headerName: "Year", width: 200 },
    { 
      field: "creditHour", 
      headerName: "Credit Hour", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.creditHour.map((creditDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{creditDetail.creditHourTypeId.researchType ? `${creditDetail.creditHourTypeId.researchType} (${creditDetail.noOfCreditHour})` : 'No credit hour assigned'}
                  </li>
                  );
                })
              }
      </ul>
          </div>
        );
        console.log(params)
      } 
    },
    { 
      field: "degreeProgram", 
      headerName: "Degree Program", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.degree.map((degreeDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{degreeDetail.degreeConfig.researchType ? `${degreeDetail.degreeConfig.researchType} (${degreeDetail.noOfStudents})` : 'No degree program assigned'}
                  </li>
                  );
                })
              }
      </ul>
          </div>
        );
        console.log(params)
      } 
    },
    { 
      field: "managerialResponsibility", 
      headerName: "Managerial Responsibility", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.managerialSection.map((managerialSectionDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{managerialSectionDetail.managerialPositionConfig.researchType ? managerialSectionDetail.managerialPositionConfig.researchType : 'No managerial position assigned'}
                  </li>
                  );
                })
              }
      </ul>
          </div>
        );
        console.log(params)
      } 
    },
    {
      field: "title",
      headerName: "Course Title",
      width: 200,
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
            <Link to={{pathname:"/workload/" + params.row._id, workload: params.row}}>
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
        rows={workloads}
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

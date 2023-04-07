import "./pointsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext} from "react";
import { ResearchContext } from "../../context/researchContext/ResearchContext";
import { deleteResearch, getResearchs } from "../../context/researchContext/apiCalls";
import { useEffect } from "react";
import { deleteWorkload, getWorkloads } from "../../context/workloadContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";


export default function PointsList() {
  

  function calculateContribution(data) {
    // Calculate total contribution for research projects
    let totalResearchProjectContribution = 0;
    data.researchProject.forEach((project) => {
      totalResearchProjectContribution += project.researchProjectConfig.contribution;
    });
    totalResearchProjectContribution *= data.bs + data.ms;
  
    // Calculate total contribution for journals
    let totalJournalContribution = 0;
    data.journal.forEach((journal) => {
      totalJournalContribution += journal.journalConfig.contribution * journal.noOfJournal;
    });
  
    // Calculate total contribution for conferences
    let totalConfContribution = 0;
    data.conf.forEach((conf) => {
      totalConfContribution += conf.confConfig.contribution * conf.noOfConf;
    });
  
    // Calculate total contribution for books
    let totalBookContribution = 0;
    data.book.forEach((book) => {
      totalBookContribution += book.bookConfig.contribution * book.noOfBook;
    });
  
    // Calculate total contribution for patents
    let totalPatentContribution = 0;
    data.patent.forEach((patent) => {
      totalPatentContribution += patent.patentConfig.contribution * patent.noOfPatent;
    });
  
    // Calculate total contribution for technical reports
    let totalTechReportContribution = 0;
    data.techReport.forEach((report) => {
      totalTechReportContribution += report.techReportConfig.contribution * report.noOfTechReport;
    });
  
    // Calculate total contribution for development products
    let totalDevProductContribution = 0;
    data.devProduct.forEach((product) => {
      totalDevProductContribution += product.devProductConfig.contribution * product.noOfDevProduct;
    });
  
    // Total contribution for all fields
    const totalContribution = totalResearchProjectContribution + totalJournalContribution + totalConfContribution + totalBookContribution + totalPatentContribution + totalTechReportContribution + totalDevProductContribution;
  
    return totalContribution;
  }


  
  //const {, dispatch} = useContext(WorkloadContext)
  const {researchs,dispatch} = useContext(ResearchContext)
  //const [titles, setTitles] = useState([]);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const handleDelete = (id) => {
    deleteWorkload(id,dispatch);
  };
  
  useEffect(()=>{
    getResearchs(dispatch);
  }, [dispatch]);
  console.log(researchs)

  const customStyles = {
    row: {
      height: 100
    }
  };

  const columns = [
    { 
      field: "owner", 
      headerName: "ID", 
      width: 90,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.owner._id}
          </div>
          
        );
      },  
    },
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
    {
      field: "points",
      headerName: "Workload Points",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {
              calculateContribution(params.row)
            }
          </div>
        );
      },
    },
    // { field: "semester", headerName: "Semester", width: 200 },
    // { field: "year", headerName: "Year", width: 200 },
    // { field: "managerialResponsibility", headerName: "Managerial Responsibility", width: 200 },
    // {
    //   field: "title",
    //   headerName: "Course Title",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <ul className="courseListul">
    //           {params.row.courseDetails.map((courseDetail, index) => {
    //             return (
    //               <li key={index} className="courseListli">
    //                 {index+1+". "}{courseDetail.courseId ? courseDetail.courseId.title : 'No course assigned'}
    //               </li>
    //               );
    //             })
    //           }
    //   </ul>
    //       </div>
    //     );
    //     console.log(params)
    //   },
    // },
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

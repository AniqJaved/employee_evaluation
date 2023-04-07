import "./researchList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext} from "react";
import { ResearchContext } from "../../context/researchContext/ResearchContext";
import { useEffect } from "react";
import { deleteResearch, getResearchs } from "../../context/researchContext/apiCalls";



export default function ResearchList() {
  

  
  const {researchs, dispatch} = useContext(ResearchContext)
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  // const handleDelete = (id) => {
  //   deleteResearch(id,dispatch);
  // };
  
  // useEffect(()=>{
  //   getResearchs(dispatch);
  // }, [dispatch]);
  // console.log(researchs)
  useEffect(() => {
    getResearchs(dispatch)
      .then(() => setIsLoading(false))
      .catch((error) => console.error(error));
  }, [dispatch]);
  const researchsArray = [researchs];

  console.log(researchsArray)

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
    { 
      field: "book", 
      headerName: "Book", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.book.map((bookDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{bookDetail.bookConfig.researchType ? `${bookDetail.bookConfig.researchType} (${bookDetail.noOfBook})` : 'No books written'}
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
      field: "conf", 
      headerName: "Conference", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.conf.map((confDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{confDetail.confConfig.researchType ? `${confDetail.confConfig.researchType} (${confDetail.noOfConf})` : 'No conference'}
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
      field: "devProduct", 
      headerName: "Products of Development", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.devProduct.map((devProductDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{devProductDetail.devProductConfig.researchType ? `(${devProductDetail.noOfDevProduct})` : 'No Development Products'}
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
      field: "journal", 
      headerName: "Journals", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.journal.map((journalDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{journalDetail.journalConfig.researchType ? `${journalDetail.journalConfig.researchType} (${journalDetail.noOfJournal})` : 'No Journals'}
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
      field: "patent", 
      headerName: "Patents", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.patent.map((patentDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{patentDetail.patentConfig.researchType ? `${patentDetail.patentConfig.researchType} (${patentDetail.noOfPatent})` : 'No Patent'}
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
      field: "researchProject", 
      headerName: "Research Project", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.researchProject.map((researchProjectDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{researchProjectDetail.researchProjectConfig.researchType ? `${researchProjectDetail.researchProjectConfig.researchType}` : 'No Research Project'}
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
      field: "techReport", 
      headerName: "Technical Report", 
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <ul className="courseListul">
              {params.row.techReport.map((techReportDetail, index) => {
                return (
                  <li key={index} className="courseListli">
                    {index+1+". "}{techReportDetail.techReportConfig.researchType ? `${techReportDetail.techReportConfig.researchType} ${techReportDetail.noOfTechReport}` : 'No Technical Report'}
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

  


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div className="userList">
      <DataGrid
        rows={researchsArray}
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

import { Link, useLocation } from "react-router-dom";
import "./workload.css";
import { useState } from "react";
import { useContext} from "react";
import { WorkloadContext } from "../../context/workloadContext/WorkloadContext";
import { useEffect } from "react";
import { deleteWorkload, getWorkload } from "../../context/workloadContext/apiCalls";


export default function Workload() {
    const {workload, dispatch} = useContext(WorkloadContext)
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
      return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Workload</h1>
        <Link to="/newworkload">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">
                      {
                      Array.isArray(workload) && workload.length > 0 ? (
                      <span className="productInfoValue">{workload[0]._id}</span>
                      ) : (
                      <span className="productInfoValue">Workload does not exist</span>
                      )
                      }
                      </span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Employee Name:</span>
                      <span className="productInfoValue">
                        {
                      Array.isArray(workload) && workload.length > 0 ? (
                      <span className="productInfoValue">{workload[0].employeeName}</span>
                      ) : (
                      <span className="productInfoValue">Workload does not exist</span>
                      )
                      }
                        </span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Semester:</span>
                      <span className="productInfoValue">
                        {
                      Array.isArray(workload) && workload.length > 0 ? (
                      <span className="productInfoValue">{workload[0].semester}</span>
                      ) : (
                      <span className="productInfoValue">Workload does not exist</span>
                      )
                      }
                        </span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Managerial Responsibility:</span>
                      <span className="productInfoValue">
                        {
                      Array.isArray(workload) && workload.length > 0 ? (
                      <span className="productInfoValue">{workload[0].managerialResponsibility}</span>
                      ) : (
                      <span className="productInfoValue">Workload does not exist</span>
                      )
                      }
                    </span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">No of Students:</span>
                      <span className="productInfoValue">
                        {
                      Array.isArray(workload) && workload.length > 0 ? (
                      <span className="productInfoValue">{workload[0].noOfStudents}</span>
                      ) : (
                      <span className="productInfoValue">Workload does not exist</span>
                      )
                      }
                      </span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey productInfoKeyCourse">Courses:</span>
                      <span className="productInfoValue">
                      <div className="userListUser">
                        <ul className="courseListul">
                            {
                            Array.isArray(workload) && workload.length > 0 ? (
                                workload[0].courseDetails.map((courseDetail, index) => {
                                    return (
                                        <li key={index} className="courseListli">
                                            {index+1+". "}{courseDetail.courseId ? `${courseDetail.courseId.title} (${courseDetail.courseContribution})`  : 'No course assigned'}
                                        </li>
                                    );
                                })
                            ) : (
                                <span className="productInfoValue">Workload does not exist</span>
                            )
                            }
                        </ul>
                    </div>
                    </span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                <label>Course No</label>
                <input type="text" placeholder={workload.courseNo} />
                <label>Theory Credits</label>
                <input type="text" placeholder={workload.theoryCredits} />
                <label>Lab Credits</label>
                <input type="text" placeholder={workload.labCredits} />
                <label>Degree</label>
                <input type="text" placeholder={workload.degree} />
                <label>Department</label>
                <input type="text" placeholder={workload.department} />
                <label>Program</label>
                <input type="text" placeholder={workload.program} />
              </div>
              <div className="productFormRight">
                  {/* <div className="productUpload">
                      <img src={movie.img} className="productUploadImg"/>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div> */}
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
      );
}

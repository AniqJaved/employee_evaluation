import { Link, useLocation } from "react-router-dom";
import "./workload.css";
import { useState } from "react";
import { useContext} from "react";
import { WorkloadContext } from "../../context/workloadContext/WorkloadContext";
import { useEffect } from "react";
import { deleteWorkload, getWorkload, updateWorkload } from "../../context/workloadContext/apiCalls";
//import { Card, Button } from 'react-bootstrap';


export default function Workload() {
    const {workload, dispatch} = useContext(WorkloadContext)
    const [isLoading, setIsLoading] = useState(true);
    const [workloadObj, setWorkloadObj] = useState(null);
    const [courseDetailsArray, setCourseDetailsArray] = useState([]);
    const [degreeDetailsArray, setDegreeDetailsArray] = useState([]);
    const [creditHourDetailsArray, setCreditHourDetailsArray] = useState([]);
    const [managerialDetailsArray, setManagerialDetailsArray] = useState([]);
    // const handleDelete = (id) => {
    //   setData(data.filter((item) => item.id !== id));
    // };
    const handleDelete = (id) => {
        deleteWorkload(id,dispatch);
    };
  
    useEffect(()=>{
        getWorkload(dispatch)
        .then(() => setIsLoading(false))
        .catch((error) => console.error(error));
    }, [dispatch]);

    useEffect(() => {
      if (workload.length > 0) {
        setWorkloadObj(workload[0]);
        setCreditHourDetailsArray(workload[0].creditHour || []);
        setCourseDetailsArray(workload[0].courseDetails || []);
        setDegreeDetailsArray(workload[0].degree || []);
        setManagerialDetailsArray(workload[0].managerialSection || []);
      }
    }, [workload]);

    

    //REMOVE CREDIT HOUR
    const handleRemoveCreditHour = (creditHourIndex, event) => {
      event.preventDefault();
      console.log(creditHourIndex)
      setCreditHourDetailsArray(prevCreditHourDetailsArray => prevCreditHourDetailsArray.filter((_, index) => index !== creditHourIndex));
    };


    //REMOVE COURSE
    const handleRemoveCourse = (courseDetailIndex, event) => {
      event.preventDefault();
      setCourseDetailsArray(courseDetailsArray.filter((_, index) => index !== courseDetailIndex));
    };



    //REMOVE DEGREE
    const handleRemoveDegree = (degreeDetailIndex, event) => {
      event.preventDefault();
      setDegreeDetailsArray(degreeDetailsArray.filter((_, index) => index !== degreeDetailIndex));
    };


    //REMOVE MANAGERIAL RESPONSIBILITY
    const handleRemoveManagerial = (managerialDetailIndex, event) => {
      event.preventDefault();
      setManagerialDetailsArray(managerialDetailsArray.filter((_, index) => index !== managerialDetailIndex));
    };



    //HANDLE CHANGE

    const handleChange = (e) =>{
      const value = e.target.value;
      const ownerId = JSON.parse(localStorage.getItem("user"))._id
      setWorkloadObj({...workloadObj, [e.target.name]: value, owner: ownerId, creditHour:[...creditHourDetailsArray], courseDetails:[...courseDetailsArray], degree:[...degreeDetailsArray], managerialSection:[...managerialDetailsArray]  })
    }



    //UPDATE WORKLOAD

    const HandleSubmit = (e) =>{
      e.preventDefault();
      updateWorkload(workloadObj, dispatch)
      //createWorkload(workload, dispatch);
      //navigate('/courses')
    }



    console.log(workloadObj)

    if (isLoading) {
      return <p>Loading...</p>;
    }
    
      return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Workload</h1>
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
                      <ul className="courseListul">
                            {
                            Array.isArray(workload) && workload.length > 0 ? (
                                workload[0].managerialSection.map((managerialSectionDetail, index) => {
                                    return (
                                        <li key={index} className="courseListli">
                                            {index+1+". "}{managerialSectionDetail._id ? `${managerialSectionDetail.managerialPositionConfig.researchType}`  : 'No position assigned'}
                                        </li>
                                    );
                                })
                            ) : (
                                <span className="productInfoValue">Workload does not exist</span>
                            )
                            }
                        </ul>
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
                  <div className="productInfoItem">
                      <span className="productInfoKey productInfoKeyCourse">Credit Hour:</span>
                      <span className="productInfoValue">
                      <div className="userListUser">
                        <ul className="courseListul">
                            {
                            Array.isArray(workload) && workload.length > 0 ? (
                                workload[0].creditHour.map((creditHourDetail, index) => {
                                    return (
                                        <li key={index} className="courseListli">
                                            {index+1+". "}{creditHourDetail._id ? `${creditHourDetail.creditHourTypeId.researchType} (${creditHourDetail.noOfCreditHour})`  : 'No credit hours assigned'}
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
                  <div className="productInfoItem">
                      <span className="productInfoKey productInfoKeyCourse">Degree Program:</span>
                      <span className="productInfoValue">
                      <div className="userListUser">
                        <ul className="courseListul">
                            {
                            Array.isArray(workload) && workload.length > 0 ? (
                                workload[0].degree.map((degreeDetail, index) => {
                                    return (
                                        <li key={index} className="courseListli">
                                            {index+1+". "}{degreeDetail._id ? `${degreeDetail.degreeConfig.researchType} (${degreeDetail.noOfStudents})`  : 'No degree assigned'}
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
                <h2>Credit Hour</h2>
                {creditHourDetailsArray.map((creditHourEntry, index) => (
                <div key={index}>
                    <p>{creditHourEntry.creditHourTypeId.researchType}</p>
                    <span>No of Credit Hours:<p>{creditHourEntry.creditHourTypeId.contribution}</p></span>
                    <button onClick={(event) => handleRemoveCreditHour(index, event)}>Remove</button>
                </div>
                ))}
                <h2>Course Details</h2>
                {courseDetailsArray.map((courseDetailsEntry, index) => (
                <div key={index}>
                    <p>{courseDetailsEntry.courseId.title}</p>
                    <span>Course Contribution:<p>{courseDetailsEntry.courseContribution}</p></span>
                    <button onClick={(event) => handleRemoveCourse(index, event)}>Remove</button>
                </div>
                ))}
                <h2>Degree</h2>
                {degreeDetailsArray.map((degreeDetailsEntry, index) => (
                <div key={index}>
                    <p>{degreeDetailsEntry.degreeConfig.researchType}</p>
                    <span>No of Students:<p>{degreeDetailsEntry.noOfStudents}</p></span>
                    <button onClick={(event) => handleRemoveDegree(index, event)}>Remove</button>
                </div>
                ))}
                <h2>Managerial Responsibilty</h2>
                {managerialDetailsArray.map((managerialDetailsEntry, index) => (
                <div key={index}>
                    <p>{managerialDetailsEntry.managerialPositionConfig.researchType}</p>
                    <button onClick={(event) => handleRemoveManagerial(index, event)}>Remove</button>
                </div>
                ))}

                <h2>Employee Name</h2>
                <input type="text" placeholder={workload[0].employeeName ? workload[0].employeeName : "No name specified"} onChange={handleChange}/>
                <h2>No of Students</h2>
                <input type="text" placeholder={workload[0].noOfStudents ? workload[0].noOfStudents : "No students assigned"} onChange={handleChange}/>
                <h2>Semester</h2>
                <input type="text" placeholder={workload[0].semester ? workload[0].semester : "No semester assigned"} onChange={handleChange}/>
                <h2>Year</h2>
                <input type="text" placeholder={workload[0].year ? workload[0].year : "No year assigned"} onChange={handleChange}/>

              </div>
              
              <div className="productFormRight">
                  {/* <div className="productUpload">
                      <img src={movie.img} className="productUploadImg"/>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div> */}
                  <button onClick={HandleSubmit} className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
      );
}

import { useContext, useState, useHistory, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddCourseForm from "../../components/addCourseForm/AddCourseForm";
import { createWorkload } from "../../context/workloadContext/apiCalls";
import { WorkloadContext } from "../../context/workloadContext/WorkloadContext";
import { CourseContext } from "../../context/courseContext/CourseContext";
import { getCourses } from "../../context/courseContext/apiCalls";
import "./newWorkload.css";

export default function NewWorkload() {
  //const navigate = useNavigate();
  
  const [workload, setWorkload] = useState(null);
  const {dispatch} = useContext(WorkloadContext)
  const [courseDetailsArray, setCourseDetailsArray] = useState([]);
  ////////////////

  const {courses, dispatch2} = useContext(CourseContext)

  
  useEffect(()=>{
    getCourses(dispatch2);
  }, [dispatch2]);

  
  const handleAddCourse = (courseIdVal, courseContributionVal) => {
    const courseDetailsObject = {
      courseId: courseIdVal,
      courseContribution: courseContributionVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setCourseDetailsArray(courseDetailsArray => [...courseDetailsArray, courseDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setWorkload(workload => ({...workload, courseDetails: [...courseDetailsArray, courseDetailsObject]}));
  };

  ////////////////

  const handleChange = (e) =>{
    const value = e.target.value;
    const ownerId = JSON.parse(localStorage.getItem("user"))._id
    setWorkload({...workload, [e.target.name]: value, owner: ownerId})
  }


  const HandleSubmit = (e) =>{
    e.preventDefault();
    createWorkload(workload, dispatch);
    //navigate('/courses')
  }
  console.log(workload)
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Workload</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Semester</label>
          <input type="text" placeholder="7" name="semester" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="2020" name="year" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Employee Name</label>
          <input type="text" placeholder="Ali Khan" name="employeeName" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Managerial Responsibility</label>
          <input type="text" placeholder="Coordinator" name="managerialResponsibility" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>No Of Students</label>
          <input type="text" placeholder="Degree" name="noOfStudents" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <AddCourseForm onAddCourse={handleAddCourse}/>
        </div>
        <button onClick={HandleSubmit} className="addProductButton">Create</button>
      </form>
    </div>
  );
}

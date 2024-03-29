import { useContext, useState, useHistory, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddCourseForm from "../../components/workload/addCourseForm/AddCourseForm";
import AddDegreeForm from "../../components/workload/addDegreeForm/AddDegreeForm";
import AddCreditHourForm from "../../components/workload/addCreditHourForm/AddCreditHourForm";
import AddManagerialForm from "../../components/workload/addManagerialForm/AddManagerialForm";
import CreditHourCard from "../../components/workload/creditHourCard/CreditHourCard";
import ManagerialCard from "../../components/workload/managerialCard/ManagerialCard";
import DegreeCard from "../../components/workload/degreeCard/DegreeCard";
import CourseCard from "../../components/workload/courseCard/CourseCard";
import { createWorkload, getWorkload } from "../../context/workloadContext/apiCalls";
import { WorkloadContext } from "../../context/workloadContext/WorkloadContext";
import { CourseContext } from "../../context/courseContext/CourseContext";
import { getCourses } from "../../context/courseContext/apiCalls";
import "./newWorkload.css";

export default function NewWorkload() {
  //const navigate = useNavigate();
  
  //const [workload, setWorkload] = useState(null);
  const {dispatch} = useContext(WorkloadContext);
  const [isLoading, setIsLoading] = useState(true);
  const [workload, setWorkload] = useState([])
  const [courseDetailsArray, setCourseDetailsArray] = useState([]);
  const [degreeDetailsArray, setDegreeDetailsArray] = useState([]);
  const [creditHourDetailsArray, setCreditHourDetailsArray] = useState([]);
  const [managerialDetailsArray, setManagerialDetailsArray] = useState([]);
  ////////////////

  //const {courses, dispatch2} = useContext(CourseContext)

  
  // useEffect(()=>{
  //   getCourses(dispatch2);
  // }, [dispatch2]);




  //FETCHING WORKLOAD

//   useEffect(()=>{
//     getWorkload(dispatch)
//     .then(() => setIsLoading(false))
//     .catch((error) => console.error(error));
// }, [dispatch]);

// useEffect(() => {
//   if (workload.length > 0) {
//     setWorkloadObj(workload[0]);
//     setCreditHourDetailsArray(workload[0].creditHour || []);
//     setCourseDetailsArray(workload[0].courseDetails || []);
//     setDegreeDetailsArray(workload[0].degree || []);
//     setManagerialDetailsArray(workload[0].managerialSection || []);
//   }
// }, [workload]);

// console.log(managerialDetailsArray)

// console.log(workload)

  
  




  //ADD COURSE
  
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


  // ADD DEGREE

  const handleAddDegree = (selectedDegreeId, noOfStudentsVal) =>{
    const degreeDetailsObject = {
      degreeConfig: selectedDegreeId,
      noOfStudents: noOfStudentsVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setDegreeDetailsArray(degreeDetailsArray => [...degreeDetailsArray, degreeDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setWorkload(workload => ({...workload, degree: [...degreeDetailsArray, degreeDetailsObject]}));
  }

  // ADD CREDIT HOUR


  const handleAddCreditHour = (selectedCreditHourId, noOfCreditHoursVal) =>{
    const creditHourDetailsObject = {
      creditHourTypeId: selectedCreditHourId,
      noOfCreditHour: noOfCreditHoursVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setCreditHourDetailsArray(creditHourDetailsArray => [...creditHourDetailsArray, creditHourDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setWorkload(workload => ({...workload, creditHour: [...creditHourDetailsArray, creditHourDetailsObject]}));
  }

  // ADD MANAGERIAL POSITION

  const handleAddManagerial = (selectedManagerialId) =>{
    const managerialDetailsObject = {
      managerialPositionConfig: selectedManagerialId
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setManagerialDetailsArray(managerialDetailsArray => [...managerialDetailsArray, managerialDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setWorkload(workload => ({...workload, managerialSection: [...managerialDetailsArray, managerialDetailsObject]}));
  }

  ////////////////

  // REMOVE CREDIT HOUR

  const handleRemoveCreditHour = (index) => {
    setCreditHourDetailsArray(
      creditHourDetailsArray.filter((_, i) => i !== index)
    );
  };


  // REMOVE MANAGERIAL CARD

  const handleRemoveManagerial = (index) => {
    setManagerialDetailsArray(
      managerialDetailsArray.filter((_, i) => i !== index)
    );
  };

  // REMOVE DEGREE CARD

  const handleRemoveDegree = (index) => {
    setDegreeDetailsArray(
      degreeDetailsArray.filter((_, i) => i !== index)
    );
  };


  // REMOVE COURSE CARD

  const handleRemoveCourse = (index) => {
    setCourseDetailsArray(
      courseDetailsArray.filter((_, i) => i !== index)
    );
  };




  /////////////////

  const handleChange = (e) =>{
    const value = e.target.value;
    const ownerId = JSON.parse(localStorage.getItem("user"))._id
    setWorkload({...workload, [e.target.name]: value, owner: ownerId, creditHour:[...creditHourDetailsArray], courseDetails:[...courseDetailsArray], degree:[...degreeDetailsArray], managerialSection:[...managerialDetailsArray]  })
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
          <label>Managerial Responsibility</label>
          <AddManagerialForm onAddManagerial={handleAddManagerial}/>
          {managerialDetailsArray.map((managerialDetails, index) => (
          <ManagerialCard
            key={index}
            managerialDetails={managerialDetails}
            onRemove={() => handleRemoveManagerial(index)}
          />
          ))}
        </div>
        <div className="addProductItem">
          <label>No Of Students</label>
          <input type="text" placeholder="Degree" name="noOfStudents" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Degree</label>
          <AddDegreeForm onAddDegree={handleAddDegree}/>
          {degreeDetailsArray.map((degreeDetails, index) => (
          <DegreeCard
            key={index}
            degreeDetails={degreeDetails}
            onRemove={() => handleRemoveDegree(index)}
          />
          ))}
        </div>
        <div className="addProductItem">
          <label>Credit Hour</label>
          <AddCreditHourForm onAddCreditHour={handleAddCreditHour}/>
          {creditHourDetailsArray.map((creditHourDetails, index) => (
          <CreditHourCard
            key={index}
            creditHourDetails={creditHourDetails}
            onRemove={() => handleRemoveCreditHour(index)}
          />
          ))}
        </div>
        <div className="addProductItem">
          <label>Course</label>
          <AddCourseForm onAddCourse={handleAddCourse}/>
          {courseDetailsArray.map((courseDetails, index) => (
          <CourseCard
            key={index}
            courseDetails={courseDetails}
            onRemove={() => handleRemoveCourse(index)}
          />
          ))}
        </div>
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
        <button onClick={HandleSubmit} className="addProductButton">Create</button>
      </form>


    


      {/* <h1 className="addProductTitle">New Research Workload</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>BS</label>
          <input type="text" placeholder="7" name="semester" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>MS</label>
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
      </form> */}





    </div>
  );
}

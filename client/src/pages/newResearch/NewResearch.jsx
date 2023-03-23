import { useContext, useState, useHistory, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddProjectForm from "../../components/research/addProjectForm/AddProjectForm";
import AddJournalForm from "../../components/research/addJournalForm/AddJournalForm";
import AddConfForm from "../../components/research/addConfForm/AddConfForm";
import AddBookForm from "../../components/research/addBookForm/AddBookForm";
import AddPatentForm from "../../components/research/addPatentForm/AddPatentForm";
import AddReportForm from "../../components/research/addReportForm/AddReportForm";
import AddProductForm from "../../components/research/addProductForm/AddProductForm";

import { createResearch } from "../../context/researchContext/apiCalls";
import { ResearchContext } from "../../context/researchContext/ResearchContext";
import { getResearchs } from "../../context/researchContext/apiCalls";
import "./newResearch.css";

export default function NewResearch() {
  //const navigate = useNavigate();

  const {researchs, dispatch} = useContext(ResearchContext)
    

  
  const [research, setResearch] = useState(null);
  // const {dispatch} = useContext(WorkloadContext)
  const [projectDetailsArray, setProjectDetailsArray] = useState([]);
  const [journalDetailsArray, setJournalDetailsArray] = useState([]);
  const [confDetailsArray, setConfDetailsArray] = useState([]);
  const [bookDetailsArray, setBookDetailsArray] = useState([]);
  const [patentDetailsArray, setPatentDetailsArray] = useState([]);
  const [reportDetailsArray, setReportDetailsArray] = useState([]);
  const [productDetailsArray, setProductDetailsArray] = useState([]);
  // const [creditHourDetailsArray, setCreditHourDetailsArray] = useState([]);
  // const [managerialDetailsArray, setManagerialDetailsArray] = useState([]);
  // ////////////////

  // const {courses, dispatch2} = useContext(CourseContext)

  
  // useEffect(()=>{
  //   getCourses(dispatch2);
  // }, [dispatch2]);


  //ADD PROJECT
  
  const handleAddProject = (selectedProjectId) => {
    const projectDetailsObject = {
      researchProjectConfig: selectedProjectId,
    };
    setProjectDetailsArray(projectDetailsArray => [...projectDetailsArray, projectDetailsObject]);          //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setResearch(research => ({...research, researchProject: [...projectDetailsArray, projectDetailsObject]}));
  };


  // ADD JOURNAL

  const handleAddJournal = (selectedJournalId, noOfJournalVal) =>{
    const journalDetailsObject = {
      journalConfig: selectedJournalId,
      noOfJournal: noOfJournalVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setJournalDetailsArray(journalDetailsArray => [...journalDetailsArray, journalDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setResearch(research => ({...research, journal: [...journalDetailsArray, journalDetailsObject]}));
  }




  // ADD CONFERENCE

  const handleAddConf = (selectedConfId, noOfConfVal) =>{
    const confDetailsObject = {
      confConfig: selectedConfId,
      noOfConf: noOfConfVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setConfDetailsArray(confDetailsArray => [...confDetailsArray, confDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setResearch(research => ({...research, conf: [...confDetailsArray, confDetailsObject]}));
  }


  // ADD BOOK

  const handleAddBook = (selectedBookId, noOfBookVal) =>{
    const bookDetailsObject = {
      bookConfig: selectedBookId,
      noOfBook: noOfBookVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setBookDetailsArray(bookDetailsArray => [...bookDetailsArray, bookDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setResearch(research => ({...research, book: [...bookDetailsArray, bookDetailsObject]}));
  }

  // ADD PATENT

  const handleAddPatent = (selectedPatentId, noOfPatentVal) =>{
    const patentDetailsObject = {
      patentConfig: selectedPatentId,
      noOfPatent: noOfPatentVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setPatentDetailsArray(patentDetailsArray => [...patentDetailsArray, patentDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setResearch(research => ({...research, patent: [...patentDetailsArray, patentDetailsObject]}));
  }

  // ADD REPORT

  const handleAddReport = (selectedReportId, noOfReportVal) =>{
    const reportDetailsObject = {
      techReportConfig: selectedReportId,
      noOfTechReport: noOfReportVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setReportDetailsArray(reportDetailsArray => [...reportDetailsArray, reportDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setResearch(research => ({...research, techReport: [...reportDetailsArray, reportDetailsObject]}));
  }

  // ADD PRODUCT

  const handleAddProduct = (selectedProductId, noOfProductVal) =>{
    const productDetailsObject = {
      devProductConfig: selectedProductId,
      noOfDevProduct: noOfProductVal
    };
    // setCourseDetails2([...courseDetails2, courseDetailsObject]);
    // setWorkload({...workload, courseDetails: courseDetails2})
    setProductDetailsArray(productDetailsArray => [...productDetailsArray, productDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
    setResearch(research => ({...research, devProduct: [...productDetailsArray, productDetailsObject]}));
  }




  // // ADD CREDIT HOUR


  // const handleAddCreditHour = (selectedCreditHourId, noOfCreditHoursVal) =>{
  //   const creditHourDetailsObject = {
  //     creditHourTypeId: selectedCreditHourId,
  //     noOfCreditHour: noOfCreditHoursVal
  //   };
  //   // setCourseDetails2([...courseDetails2, courseDetailsObject]);
  //   // setWorkload({...workload, courseDetails: courseDetails2})
  //   setCreditHourDetailsArray(creditHourDetailsArray => [...creditHourDetailsArray, creditHourDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
  //   setWorkload(workload => ({...workload, creditHour: [...creditHourDetailsArray, creditHourDetailsObject]}));
  // }

  // // ADD MANAGERIAL POSITION

  // const handleAddManagerial = (selectedManagerialId) =>{
  //   const managerialDetailsObject = {
  //     managerialPositionConfig: selectedManagerialId
  //   };
  //   // setCourseDetails2([...courseDetails2, courseDetailsObject]);
  //   // setWorkload({...workload, courseDetails: courseDetails2})
  //   setManagerialDetailsArray(managerialDetailsArray => [...managerialDetailsArray, managerialDetailsObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
  //   setWorkload(workload => ({...workload, managerialSection: [...managerialDetailsArray, managerialDetailsObject]}));
  // }

  // ////////////////

  const handleChange = (e) =>{
    const value = e.target.value;
    const ownerId = JSON.parse(localStorage.getItem("user"))._id
    setResearch({...research, [e.target.name]: value, owner: ownerId})
  }


  const HandleSubmit = (e) =>{
    e.preventDefault();
    createResearch(research, dispatch);
    //navigate('/courses')
  }

  console.log(research)
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Research</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>No of BS students</label>
          <input type="text" placeholder="7" name="bs" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>No of MS students</label>
          <input type="text" placeholder="2020" name="ms" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Research Project</label>
          <AddProjectForm onAddProject={handleAddProject} />
        </div>
        <div className="addProductItem">
          <label>Journal</label>
          <AddJournalForm onAddJournal={handleAddJournal} />
        </div>
        <div className="addProductItem">
          <label>Conference</label>
          <AddConfForm onAddConf={handleAddConf} />
        </div>
        <div className="addProductItem">
          <label>Book</label>
          <AddBookForm onAddBook={handleAddBook} />
        </div>
        <div className="addProductItem">
          <label>Patent</label>
          <AddPatentForm onAddPatent={handleAddPatent} />
        </div>
        <div className="addProductItem">
          <label>Report</label>
          <AddReportForm onAddReport={handleAddReport} />
        </div>
        <div className="addProductItem">
          <label>Product</label>
          <AddProductForm onAddProduct={handleAddProduct} />
        </div>
        
        <button onClick={HandleSubmit} className="addProductButton">Create</button>
      </form>
     </div>
  );
}

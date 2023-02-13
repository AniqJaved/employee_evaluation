import { useContext, useState, useHistory } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createWorkload } from "../../context/workloadContext/apiCalls";
import { WorkloadContext } from "../../context/workloadContext/WorkloadContext";
import "./newWorkload.css";

export default function NewWorkload() {
  //const navigate = useNavigate();
  const [workload, setWorkload] = useState(null);
  const location = useLocation()
  const {dispatch} = useContext(WorkloadContext)

  const handleChange = (e) =>{
    const value = e.target.value;
    const ownerId = JSON.parse(localStorage.getItem("user")).accessToken
    setWorkload({...workload, [e.target.name]: value, owner: ownerId})
  }

  console.log(workload)
  console.log(location)

  const HandleSubmit = (e) =>{
    e.preventDefault();
    createWorkload(workload, dispatch);
    //navigate('/courses')
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Course</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="CFP" name="title" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Course No</label>
          <input type="text" placeholder="Course Number" name="courseNo" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Theory Credits</label>
          <input type="text" placeholder="Theory Credits" name="theoryCredits" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Lab Credits</label>
          <input type="text" placeholder="Lab Credits" name="labCredits" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Degree</label>
          <input type="text" placeholder="Degree" name="degree" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Department</label>
          <input type="text" placeholder="Department" name="department" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Program</label>
          <input type="text" placeholder="Program" name="program" onChange={handleChange}/>
        </div>
        <button onClick={HandleSubmit} className="addProductButton">Create</button>
      </form>
    </div>
  );
}

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./newProduct.css";

export default function NewProduct() {
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  const {dispatch} = useContext(MovieContext)

  const handleChange = (e) =>{
    const value = e.target.value;
    setMovie({...movie, [e.target.name]: value})
  }

  console.log(movie)

  const HandleSubmit = (e) =>{
    e.preventDefault();
    createMovie(movie, dispatch);
    history.push("/courses");
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
          <label>Course No (Only Numbers Allowed)</label>
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

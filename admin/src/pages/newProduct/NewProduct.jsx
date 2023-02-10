import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {

  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) =>{
    const value = e.target.value;
    setMovie({...movie, [e.target.name]: value})
  }

  console.log(movie)

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
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

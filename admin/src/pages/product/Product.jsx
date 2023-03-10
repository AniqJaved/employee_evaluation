import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
    const location = useLocation();
    console.log(location);
    const course = location.course;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Course</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  {/* <img src={movie.img} alt="" className="productInfoImg"/> */}
                  <span className="productName">{course.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{course._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Course No:</span>
                      <span className="productInfoValue">{course.courseNo}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Theory Credits:</span>
                      <span className="productInfoValue">{course.theoryCredits}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Lab Credits:</span>
                      <span className="productInfoValue">{course.labCredits}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Degree:</span>
                      <span className="productInfoValue">{course.degree}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Department:</span>
                      <span className="productInfoValue">{course.department}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Program:</span>
                      <span className="productInfoValue">{course.program}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                <label>Course Title</label>
                <input type="text" placeholder={course.title} />
                <label>Course No</label>
                <input type="text" placeholder={course.courseNo} />
                <label>Theory Credits</label>
                <input type="text" placeholder={course.theoryCredits} />
                <label>Lab Credits</label>
                <input type="text" placeholder={course.labCredits} />
                <label>Degree</label>
                <input type="text" placeholder={course.degree} />
                <label>Department</label>
                <input type="text" placeholder={course.department} />
                <label>Program</label>
                <input type="text" placeholder={course.program} />
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

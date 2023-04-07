import { Link, useLocation } from "react-router-dom";
import "./workload.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
    const location = useLocation();
    console.log(location);
    const workload = location.workload;
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
              <div className="productInfoTop">
                  {/* <img src={movie.img} alt="" className="productInfoImg"/> */}
                  <span className="productName">{workload.employeeName}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{workload._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Semester:</span>
                      <span className="productInfoValue">{workload.semester}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Year:</span>
                      <span className="productInfoValue">{workload.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Managerial Responsibility:</span>
                      <span className="productInfoValue">{workload.managerialResponsibility}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">No Of Students:</span>
                      <span className="productInfoValue">{workload.noOfStudents}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey productInfoKeyCourse">Courses:</span>
                      <span className="productInfoValue">
                      <div className="userListUser">
                        <ul className="courseListul">
                            {
                                workload.courseDetails.map((courseDetail, index) => {
                                    return (
                                        <li key={index} className="courseListli">
                                            {index+1+". "}{courseDetail.courseId ? `${courseDetail.courseId.title} (${courseDetail.courseContribution})`  : 'No course assigned'}
                                        </li>
                                    );
                                })
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
                <label>Employee Name</label>
                <input type="text" placeholder={workload.employeeName} />
                <label>Semester</label>
                <input type="text" placeholder={workload.semester} />
                <label>Year</label>
                <input type="text" placeholder={workload.year} />
                <label>Managerial Responsibility</label>
                <input type="text" placeholder={workload.managerialSection[0].managerialPositionConfig.researchType}/>
                <label>No Of Students</label>
                <input type="text" placeholder={workload.noOfStudents} />
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

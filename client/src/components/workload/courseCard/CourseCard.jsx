import React from "react";
import { useContext } from "react";
import { CourseContext } from "../../../context/courseContext/CourseContext";
import { getConfig } from "../../../context/configContext/apiCalls";




const CourseCard = ({ courseDetails, onRemove }) => {

  const {courses, dispatch2} = useContext(CourseContext)
  

  const courseType = courses.find(
    (course) => course._id === courseDetails.courseId
  )

  return (
    <div className="degreeCard">
      <h3>{courseType.title}</h3>
      <p>Contribution: {courseDetails.courseContribution}</p>
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export default CourseCard;
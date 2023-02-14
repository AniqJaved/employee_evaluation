import React, { useState,useContext, useEffect } from 'react';
import { CourseContext } from "../../context/courseContext/CourseContext";
import { getCourses } from "../../context/courseContext/apiCalls";


export default function AddCourseForm ({onAddCourse}) {

    ////////////////
    const {courses, dispatch2} = useContext(CourseContext)
    
    useEffect(()=>{
        getCourses(dispatch2);
    }, [dispatch2]);

    ////////////////
    const [selectedCourse, setSelectedCourse] = useState('');
    const [courseContribution, setCourseContribution] = useState('');
    const handleAddCourse = (event) => {
        event.preventDefault();
        //console.log(selectedCourse)
        if (selectedCourse && courseContribution) {
            onAddCourse(selectedCourse, courseContribution);
            // setSelectedCourse('');
            // setCourseContribution('');
        }
    };
    
    return (
        <form>
        <label>
            Course:
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="">Select a course</option>
            {courses.map((course) => (
                <option key={course._id} value={course._id}>
                {course.title}
                </option>
            ))}
            </select>
        </label>
        <label>
            Contribution:
            <input type="number" value={courseContribution} onChange={(e) => setCourseContribution(e.target.value)} />
        </label>
        <button onClick={handleAddCourse} type="submit">Add Course</button>
        </form>
    );
};


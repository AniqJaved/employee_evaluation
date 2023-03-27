import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddDegreeForm ({onAddDegree}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const degreeList = config.filter(obj => obj.configType === "degree")

    const [selectedDegree, setSelectedDegree] = useState('');
    const [noOfStudents, setNoOfStudents] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const handleAddDegree = (event) => {
        event.preventDefault();
        if (selectedDegree && noOfStudents) {
            onAddDegree(selectedDegree, noOfStudents);
            // setSelectedCourse('');
            // setCourseContribution('');
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
    return (
        <form>
            <label>
                Degree:
                <select value={selectedDegree} onChange={(e) => setSelectedDegree(e.target.value)}>
                    <option value="">Select a Degree</option>
                    {
                    degreeList.map((deg) => (
                    <option key={deg._id} value={deg._id}>
                        {deg.researchType}
                    </option>
                    ))}
                </select>
            </label>
            <label>
            No of Students:
            <input type="number" value={noOfStudents} onChange={(e) => setNoOfStudents(e.target.value)} />
        </label>
        <button onClick={handleAddDegree} type="submit">Add Degree</button>
        </form>
    );
};


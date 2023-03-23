import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddManagerialForm ({onAddManagerial}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const managerialList = config.filter(obj => obj.configType === "managerialSection")

    const [selectedManagerial, setSelectedManagerial] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
    const handleAddManagerial = (event) => {
        event.preventDefault();
        if (selectedManagerial) {
            onAddManagerial(selectedManagerial);
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
                <select value={selectedManagerial} onChange={(e) => setSelectedManagerial(e.target.value)}>
                    <option value="">Select a Managerial Position</option>
                    {
                    managerialList.map((pos) => (
                    <option key={pos._id} value={pos._id}>
                        {pos.managerialPosition}
                    </option>
                    ))}
                </select>
            </label>
        <button onClick={handleAddManagerial} type="submit">Add Managerial Position</button>
        </form>
    );
};


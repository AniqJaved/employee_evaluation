import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddPatentForm ({onAddPatent}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const patentList = config.filter(obj => obj.configType === "patent")

    const [selectedPatent, setSelectedPatent] = useState('');
    const [noOfPatent, setNoOfPatent] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
    const handleAddPatent = (event) => {
        event.preventDefault();
        if (selectedPatent && noOfPatent) {
            onAddPatent(selectedPatent, noOfPatent);
            // setSelectedCourse('');
            // setCourseContribution('');
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
    return (
        <>
            <form>
                <label>
                    Patent:
                    <select value={selectedPatent} onChange={(e) => setSelectedPatent(e.target.value)}>
                        <option value="">Select a Patent</option>
                        {
                        patentList.map((patent) => (
                        <option key={patent._id} value={patent._id}>
                            {patent.patentType}
                        </option>
                        ))}
                    </select>
                </label>
                <label>
                    Number of Patents:
                    <input type="number" value={noOfPatent} onChange={(e) => setNoOfPatent(e.target.value)} />
                </label>
                <button onClick={handleAddPatent} type="submit">Add Patent</button>
            </form>
        </>
    );
};


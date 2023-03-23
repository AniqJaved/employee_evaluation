import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddCreditHourForm ({onAddCreditHour}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const creditHourList = config.filter(obj => obj.configType === "creditHour")

    const [selectedCreditHour, setSelectedCreditHour] = useState('');
    const [noOfCreditHours, setNoOfCreditHours] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const handleAddCreditHour = (event) => {
        event.preventDefault();
        if (selectedCreditHour && noOfCreditHours) {
            onAddCreditHour(selectedCreditHour, noOfCreditHours);
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
                <select value={selectedCreditHour} onChange={(e) => setSelectedCreditHour(e.target.value)}>
                    <option value="">Select a Credit Hour Type</option>
                    {
                    creditHourList.map((creditType) => (
                    <option key={creditType._id} value={creditType._id}>
                        {creditType.classType}
                    </option>
                    ))}
                </select>
            </label>
            <label>
            No of Credit Hours:
            <input type="number" value={noOfCreditHours} onChange={(e) => setNoOfCreditHours(e.target.value)} />
        </label>
        <button onClick={handleAddCreditHour} type="submit">Add CreditHour</button>
        </form>
    );
};


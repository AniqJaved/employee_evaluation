import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddReportForm ({onAddReport}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const reportList = config.filter(obj => obj.configType === "techReport")

    const [selectedReport, setSelectedReport] = useState('');
    const [noOfReport, setNoOfReport] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);

    function handleSelection(reportId, isSelected) {
        if (isSelected) {
            setSelectedReport(reportId);
        } else {
            setSelectedReport(null);
        }
      }

    const handleAddReport = (event) => {
        event.preventDefault();
        if (selectedReport && noOfReport) {
            onAddReport(selectedReport, noOfReport);
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
                    Report:
                    <ul>
                        {
                            reportList.map((report) => (
                            <li key={report._id}>
                                <label>
                                    <input
                                    type="radio"
                                    name="project-selection"
                                    checked={selectedReport === report._id}
                                    onChange={(e) =>
                                        handleSelection(report._id, e.target.checked)
                                    }
                                    />
                                    {report.researchType}
                                </label>
                            </li>
                            ))}
                    </ul>
                </label>
                <label>
                    Number of Reports:
                    <input type="number" value={noOfReport} onChange={(e) => setNoOfReport(e.target.value)} />
                </label>
                <button onClick={handleAddReport} type="submit">Add Report</button>
            </form>
        </>
    );
};


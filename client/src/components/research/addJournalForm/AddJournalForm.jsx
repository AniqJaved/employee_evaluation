import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddJournalForm ({onAddJournal}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const journalList = config.filter(obj => obj.configType === "journal")

    const [selectedJournal, setSelectedJournal] = useState('');
    const [noOfJournal, setNoOfJournal] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
    const handleAddJournal = (event) => {
        event.preventDefault();
        if (selectedJournal && noOfJournal) {
            onAddJournal(selectedJournal, noOfJournal);
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
                    Journal:
                    <select value={selectedJournal} onChange={(e) => setSelectedJournal(e.target.value)}>
                        <option value="">Select a Journal</option>
                        {
                        journalList.map((journal) => (
                        <option key={journal._id} value={journal._id}>
                            {journal.researchType}
                        </option>
                        ))}
                    </select>
                </label>
                <label>
                    Contribution:
                    <input type="number" value={noOfJournal} onChange={(e) => setNoOfJournal(e.target.value)} />
                </label>
                <button onClick={handleAddJournal} type="submit">Add Journal</button>
            </form>
        </>
    );
};


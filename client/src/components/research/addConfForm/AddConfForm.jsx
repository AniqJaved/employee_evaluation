import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddConfForm ({onAddConf}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const confList = config.filter(obj => obj.configType === "conference")

    const [selectedConf, setSelectedConf] = useState('');
    const [noOfConf, setNoOfConf] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
    const handleAddConf = (event) => {
        event.preventDefault();
        if (selectedConf && noOfConf) {
            onAddConf(selectedConf, noOfConf);
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
                    Conference:
                    <select value={selectedConf} onChange={(e) => setSelectedConf(e.target.value)}>
                        <option value="">Select a Conference</option>
                        {
                        confList.map((conf) => (
                        <option key={conf._id} value={conf._id}>
                            {conf.researchType}
                        </option>
                        ))}
                    </select>
                </label>
                <label>
                    Number of Conference:
                    <input type="number" value={noOfConf} onChange={(e) => setNoOfConf(e.target.value)} />
                </label>
                <button onClick={handleAddConf} type="submit">Add Conf</button>
            </form>
        </>
    );
};


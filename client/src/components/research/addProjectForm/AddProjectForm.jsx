import React, { useState,useContext, useEffect } from 'react';
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";




export default function AddPojectForm ({onAddProject}) {

    const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);

    const projectList = config.filter(obj => obj.configType === "projectGrantSection")

    const [selectedProject, setSelectedProject] = useState('');
    
    const [isLoading, setIsLoading] = useState(true);
    const handleAddProject = (event) => {
        event.preventDefault();
        if (selectedProject) {
            onAddProject(selectedProject);
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
                    Project:
                    <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
                        <option value="">Select a Project Grant</option>
                        {
                        projectList.map((project) => (
                        <option key={project._id} value={project._id}>
                            {project.projectGrant}
                        </option>
                        ))}
                    </select>
                </label>
                <button onClick={handleAddProject} type="submit">Add Project Position</button>
            </form>
        </>
    );
};


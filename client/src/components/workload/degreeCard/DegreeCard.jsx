import React from "react";
import { useContext } from "react";
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";

const DegreeCard = ({ degreeDetails, onRemove }) => {

  const {config, dispatch} = useContext(ConfigContext)

  const degreeType = config.find(
    (config) => config._id === degreeDetails.degreeConfig
  );

  return (
    <div className="degreeCard">
      <h3>{degreeType.researchType}</h3>
      <p>No of Students: {degreeDetails.noOfStudents}</p>
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export default DegreeCard;
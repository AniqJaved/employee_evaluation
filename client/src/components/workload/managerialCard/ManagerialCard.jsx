import React from "react";
import { useContext } from "react";
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";

const ManagerialCard = ({ managerialDetails, onRemove }) => {

  const {config, dispatch} = useContext(ConfigContext)

  
  const managerialType = config.find(
    (config) => config._id === managerialDetails.managerialPositionConfig
  );

  return (
    <div className="managerialCard">
      <h3>{managerialType.researchType}</h3>
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export default ManagerialCard;
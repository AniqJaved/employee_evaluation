import React from "react";
import { useContext } from "react";
import { ConfigContext } from "../../../context/configContext/ConfigContext";
import { getConfig } from "../../../context/configContext/apiCalls";

const CreditHourCard = ({ creditHourDetails, onRemove }) => {

  const {config, dispatch} = useContext(ConfigContext)

  const creditHourType = config.find(
    (config) => config._id === creditHourDetails.creditHourTypeId
  );

  return (
    <div className="creditHourCard">
      <h3>{creditHourType.researchType}</h3>
      <p>No of Credit Hours: {creditHourDetails.noOfCreditHour}</p>
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export default CreditHourCard;
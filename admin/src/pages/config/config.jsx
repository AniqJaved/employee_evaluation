import { useContext, useState, useEffect } from "react";

import {ConfigContext} from "../../context/configContext/ConfigContext"
import {getConfig} from "../../context/configContext/apiCalls"
import { updateConfig } from "../../context/configContext/apiCalls";

import "./config.css";

export default function Config() {


  const {config, dispatch} = useContext(ConfigContext)
    
    
    
    useEffect(() => {
        getConfig(dispatch)
          .then(() => setIsLoading(false))
          .catch((error) => console.error(error));
      }, [dispatch]);


  const [contributions, setContributions] = useState([]);
  const [configArray, setConfigArray] = useState([]);


  const [isLoading, setIsLoading] = useState(true);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setContributions((prevState) => ({
  //     ...prevState,
  //     _id: name,
  //     contribution: value
  //   }));
  //   console.log(name)
  //   console.log(value)
  // };


  const HandleSubmit = (e) =>{
    e.preventDefault();
    updateConfig(configArray, dispatch);
    //navigate('/courses')
  }



  const handleInputChange = (event) =>{
    const { name, value } = event.target;
    const configObject = {
      _id: name,
      contribution: value
    };
    setConfigArray(configArray => [...configArray, configObject]);                 //We are not using above lines of code because we are having problem due to asynchronus nature meaning setworkload is being called before setCourseDetailsArray has completed its function. We have solved it using the callback function.
  }





  const displayData = (key) => {
    const filteredData = config.filter(
      (item) => item[`configType`] === key
    );
    return (
    <div>
      <div>
    {
    filteredData.map((item) => (
        <div key={item._id}>
          <span>{item[`researchType`]}: </span>
          <input
            type="number"
            // value={contribution} 
            // onChange={(e) => setContribution(e.target.value)}
            //onChange={handleInputChange}
            name={`${item._id}`}
            placeholder={`${item.contribution}`}
            onChange={handleInputChange}
          />
        </div>
      ))
      }
      </div>
      </div>
    );
  };


  console.log(contributions)
  console.log(configArray)



  if (isLoading) {
    return <p className="newProduct">Loading...</p>;
  }

  return (
    <div className="newProduct">
      <h1>Configuration</h1>
      <div>
        <h2>Journal</h2>
        {displayData("journal")}
      </div>
      <div>
        <h2>Degree</h2>
        {displayData("degree")}
      </div>
      <div>
        <h2>Credit Hour</h2>
        {displayData("creditHour")}
      </div>
      <div>
        <h2>Managerial Section</h2>
        {displayData("managerialSection")}
      </div>
      <div>
        <h2>Conference</h2>
        {displayData("conference")}
      </div>
      <div>
        <h2>Book</h2>
        {displayData("book")}
      </div>
      <div>
        <h2>Patent</h2>
        {displayData("patent")}
      </div>
      <div>
        <h2>Technical Report</h2>
        {displayData("techReport")}
      </div>
      <div>
        <h2>Development Product</h2>
        {displayData("devProduct")}
      </div>
      <button onClick={HandleSubmit} type="submit">Add Config</button>
    </div>
  );
}

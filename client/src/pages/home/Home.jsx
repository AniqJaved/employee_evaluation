import React, { useState, useEffect } from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/Navbar'
import List from '../../components/list/List'
import axios from "axios"
import './home.scss'
const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async () =>{
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,  //Here we are just using axios to run the http:localhost:8800....,  but it is present as proxy key in the package.json file. So we are just adding the next logic
          {                                                                        //So the next logic is that if we have type==true then put type, same case for genre.
            headers: {                                                             //We also needed authentication so we are using headers to  send the required token to authenticate the user and fetch the  lists data.
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDNmYWRmMDNlYTEzMWY4OWFmYThiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDA0NjA1OSwiZXhwIjoxNjcwNDc4MDU5fQ.M-4OmIlYU-7kdxRmvfS0GwOFCsPGneoml3f4reGKQ0w"
            },
          }
          
          );  //bascially building a url after the localhost part

        setLists(res.data) //returing data in form of arrays
        console.log(res.data);
      }
      catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);   //type and genre here means that whenever we change type or genre then the useEffect is fired.
  return (
    <>
    <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        {lists.map((list) => (
          <List list={list}/>
        ))}
    </div>
    </>
  )
}

export default Home
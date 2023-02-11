import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState,useEffect } from 'react'
import { Link,BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from "axios"
import './listItem.scss'

const ListItem = ({index, item}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  
  useEffect(()=>{
    const getMovie = async () =>{
      try{
        const res = await axios.get("/movies/find/" + item,                      //Here we are just using axios to run the http:localhost:8800....,  but it is present as proxy key in the package.json file. So we are just adding the next logic
        {                                                                        //So the next logic is that if we have type==true then put type, same case for genre.
          headers: {                                                             //We also needed authentication so we are using headers to  send the required token to authenticate the user and fetch the  lists data.
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDNmYWRmMDNlYTEzMWY4OWFmYThiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDA0NjA1OSwiZXhwIjoxNjcwNDc4MDU5fQ.M-4OmIlYU-7kdxRmvfS0GwOFCsPGneoml3f4reGKQ0w"
          },
        }
        );
        setMovie(res.data);
      }
      catch(err){
        console.log(err);
      }
    };
    getMovie()
  }, [item]);   //item here means that whenever the item is changed then we are going to fire the useEffect.
  
  return (
    
    <>

        <Link to={"/watch"} state={{ movie: movie }}>  
          <div 
          className="listItem"
          style={{left: isHovered && index * 225 - 50 + index * 2.25}}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
          > 
            <img src={movie.img} alt="" />
            {isHovered &&
            <>
            <iframe src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownAltOutlined className='icon'/>
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className='limit'>{movie.limit}+</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div> 
            </>
            }
          </div>
        </Link>
    </>
    
    
  )
}

export default ListItem
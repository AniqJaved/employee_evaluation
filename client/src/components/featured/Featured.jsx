import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import './featured.scss'

const Featured = ({type}) => {
    const [content, setContent] = useState({});

    useEffect(()=>{
        const getRandomContent = async () =>{
            try{
                const res = await axios.get(
                    `/movies/random?type=${type}`,                                             //Fetching the proxy+(given url) to get the movie of required type. 
                    {                                                                        
                        headers: {                                                             //We also needed authentication so we are using headers to  send the required token to authenticate the user and fetch the  lists data.
                          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDNmYWRmMDNlYTEzMWY4OWFmYThiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDA0NjA1OSwiZXhwIjoxNjcwNDc4MDU5fQ.M-4OmIlYU-7kdxRmvfS0GwOFCsPGneoml3f4reGKQ0w"
                        },
                    }
                ) 
                setContent(res.data[0])
            }
            catch(err){
                console.log(err)
            }
        };
        getRandomContent();
    }, [type]);   //here type means that when the type will be changed then the useEffect will be triggered.

    return (
        <>
        <div className="featured">
            <img src={content.img} alt="" />
            <div className="featuredContainer">
                {type && (
                    <div className='category'>
                        <span>{type === 'movie' ? "Movies" : "Series"}</span>
                        <select className="genre">
                            <option value="Genre">Genre</option>
                            <option value="Animation">Animation</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Crime">Crime</option>
                            <option value="Drama">Drama</option>
                            <option value="Experimental">Experimental</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Historical">Historical</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                )}
                <div className="info">
                    <img src={content.imgTitle} alt="" />
                </div>
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Featured
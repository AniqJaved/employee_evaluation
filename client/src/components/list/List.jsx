import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'


/* So in this slider we are having three fucntionalites. 1. Left pointer will be hidden when we intially have the page due to 
isMoved .2. We cannot move the slide at start to left and at end to right due to slideNumber */


const List = ({list}) => {
    const listref = useRef(); 
    const [slideNumber,setSlideNumber] = useState(0);
    const [isMoved , setIsMoved] = useState(false);
    const handleClick = (direction) =>{
        setIsMoved(true);
        let distance = listref.current.getBoundingClientRect().x - 50;
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listref.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listref.current.style.transform = `translateX(${-230 + distance}px)`
        }            
    }

  return (
    <>
    <div className="list">
        <span className='listTitle'>{list.title}</span>
        <div className="wrapper">
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/> {/*We have used ()=>handleClick() instead of only handleClick because we are passing arguments and if we pass it in only the handleClick() format then it would have run start away */}
            <div className="container" ref={listref}>
                {
                    list.content.map((item,i)=>(
                        <ListItem index={i} item={item}/>
                    ))
                }
            </div>
            <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>  {/* isMoved is being checked if the isMoved is false by not operator it will be true and then display will be none */}
        </div>
    </div>
    </>
  )
}

export default List
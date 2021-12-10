import React, { useEffect, useState } from 'react'
import Movie from '../Home/Movie/Movie'
import './actor.css'
import Slider from "react-slick";
import Actordetail from './Actordetail';
 

const IMAGE_API='https://api.themoviedb.org/3/person/popular?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US&page=1'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

function Actor() {
    const [popular, setPopular]= useState([])

      useEffect(()=>{
        fetch(IMAGE_API)
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data.results);
          setPopular(data.results);
          window.scrollTo(0, 0);

    });
},[0])
    return (
        <Slider {...settings} className='slide' >
            {popular.map(populars=>(
                <div className='slider'>
               <Actordetail key={populars.id} data={populars} {...populars}/> 
               </div>
            ))}
          </Slider>  
        
    )
}

export default Actor

import React, { useEffect, useState } from 'react'
import Movie from '../Home/Movie/Movie'
import './popular.css'
import Slider from "react-slick";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
 

const IMAGE_API='https://api.themoviedb.org/3/trending/all/day?api_key=b56eea0a4ff03126e15187093c6c028d'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

function Popular() {
    const [popular, setPopular]= useState([])

      useEffect(()=>{
        fetch(IMAGE_API)
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data.results);
          setPopular(data.results)

    });
},[0])
    return (
        <Slider {...settings} className='slide' >
            {popular.map(populars=>(
              
                <div className='slider'>
               <Movie key={populars.id} data={populars} {...populars}/> 
               </div>
            ))}
          </Slider>  
        
    )
}

export default Popular

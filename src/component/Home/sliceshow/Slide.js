import React, { useEffect, useState } from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slide.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const IMG_API="https://image.tmdb.org/t/p/w1280";
const IMAGE_API='https://api.themoviedb.org/3/trending/all/day?api_key=b56eea0a4ff03126e15187093c6c028d'

function Slide() {
    
      const [image, setImage]= useState([])

      useEffect(()=>{
        fetch(IMAGE_API)
        .then((res)=>res.json())
        .then((data)=>{
         console.log(data.results)
          setImage(data.results)

    });
},[0])
    return (
      
        <div className="slide-container">
        <Fade className='fade'>
          {image.map(fadeImage => (
            <Link className='link-fade' to={`/detail/${fadeImage.id}`}>
            <img className='imgslide' src={IMG_API+fadeImage.backdrop_path}alt='' />
            <div className="each-fade" >
              
            <h className='fade-title' >{fadeImage.title?(fadeImage.title):fadeImage.original_name}</h>
            <p className='overview'>{fadeImage.overview}</p> 
            <button className='btnxemthem'> Xem thêm</button>
            
            
            </div>
            </Link>
          ))}
        </Fade>
      </div>
    )
}

export default Slide

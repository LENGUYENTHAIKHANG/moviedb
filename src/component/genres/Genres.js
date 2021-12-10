import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Movie from '../Home/Movie/Movie';

import './genres.css'


function Genres() {
    const {id}= useParams();
    const[movie,setmovie]=useState([])
    const API_KEY_GENRES=`https://api.themoviedb.org/3/keyword/${id}/movies?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US&include_adult=false`
    useEffect(()=>{
        fetch(API_KEY_GENRES)
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data.results)
          setmovie(data.results)
         

    });
  
},[0])
    return (
        <div className="genres">
            {movie.map(mv=>(
              
              <div className='actor-casts' >
             <Movie key={mv.id} data={mv} {...mv}/> 
             </div>
          ))}
        </div>
    )
}

export default Genres

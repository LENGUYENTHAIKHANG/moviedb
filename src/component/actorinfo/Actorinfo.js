import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Movie from '../Home/Movie/Movie';
import './actorinfo.css'



function Actorinfo() { 
    const { id } = useParams();
    const IMG_API="https://image.tmdb.org/t/p/w1280";
    const API_INFO=`https://api.themoviedb.org/3/person/${id}?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US`
   const API_ACTOR_MOVIE=`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US`
   const [info,setInfo]=useState([]);
   const [actorcast,setactorcast]=useState([]);
   const [actorcrew,setactorcrew]=useState([]);
    useEffect(() => {
        fetch(API_INFO)
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
          setInfo(data)
          

    });
    fetch(API_ACTOR_MOVIE)
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data.cast);
          setactorcast(data.cast);
          setactorcrew(data.crew);
          console.log(data.crew);
          

    });
        
    }, [])
   
   
    return (
        <div>
            <div className='actor-infoss'>
                <img className='actor-image' src={IMG_API+info.profile_path} alt=''/>
                <div className='actor-infos'>
                    <p className='actor-name'>{info.name}</p>
                    <p className='text-info'>{info.biography}</p>
                    <p>{info.birthday}</p>
                </div>
            </div>
            <h3 className='actor-tt'>Cast</h3>
            <div className='actor-cast'>
                
            {actorcrew.map(populars=>(
              
              <div className='actor-casts' >
             <Movie key={populars.id} data={populars} {...populars}/> 
             </div>
          ))}
            </div>
            <h3 className='actor-tt'>Crew</h3>
            <div className='actor-cast'>
                
            {actorcast.map(populars=>(
              
              <div className='actor-casts' >
             <Movie key={populars.id} data={populars} {...populars}/> 
             </div>
          ))}
            </div>
        </div>
    )
}

export default Actorinfo

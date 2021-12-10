import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from'react-router-dom'
import'./detail.css'
const IMG_API="https://image.tmdb.org/t/p/w1280";

 
function Detail() {
    const [movie, setMovie]= useState([]);
    const [genres, setgenres]= useState([]);
   
    
    
    const { id } = useParams();
    const DETAIL_API=`https://api.themoviedb.org/3/movie/${id}?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US`
    const API_GENRES=`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=b56eea0a4ff03126e15187093c6c028d`
   useEffect(()=>{
        fetch(DETAIL_API)
        .then((res)=>res.json())
        .then((data)=>{
          
          setMovie(data)
          //  setgenres(data.genres)

    });
  
},[0])
    useEffect(() => {
      fetch(API_GENRES)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data.keywords);
        setgenres(data.keywords);
        window.scrollTo(0, 0);
        
        

  });
    }, [0])
    return (
        <div className='detail'>
           
          <div>
              <img className='detail-back' src={IMG_API+movie.backdrop_path} alt=''/>
          </div>
          <div className='detail-info'>
              
              <img className='info-image' src={IMG_API+movie.poster_path } alt=""/>
              <div className='info-detail'>
              <p className='info-title'>{movie.title}</p>
              <p className='info-overview'>{movie.overview}</p>
              <div>
              <Link className='info-trailer'to={`/detail/${movie.id}/trailer`}>
              <span >Trailer...</span></Link>
              <Link className='info-trailer'to={`/detail/${movie.id}/review`}>
              <span >Review</span></Link>
              </div>
              <p className="popularity">Lượt xem : {movie.popularity}</p>
              <div className='info-genres'>{genres.map(tl=>(
             <Link className='tl' to={`/genres/${tl.id}`}> <h >{tl.name}</h></Link>
            ))}</div>
            
            <p className='runtime'>Thời lượng: {movie.runtime} min</p>
            <p className='original_language'>{movie.original_language}</p>
            <p className='vote_average'>Vote: {movie.vote_average}</p>
              </div>
          </div>
        </div>
    );
}

export default Detail

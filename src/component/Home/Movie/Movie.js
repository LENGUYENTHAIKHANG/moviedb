import React from 'react'
import { Link } from 'react-router-dom';
import './movie.css'
const IMG_API="https://image.tmdb.org/t/p/w1280";

function Movie({title,poster_path,overview,vote_average,id,original_name}) {
    const setVoteClass=(vote_average)=>{
        if(vote_average>=8){
            return "green"
        }
        else if(vote_average>=6){
            return "orange"
        }else{
            return "red"
        }
    }
    return (
        <Link className='porpularlink' to={`/detail/${id}`}>
        <div className='movie'>
            <img className='movie-poster' src={!IMG_API+poster_path?(IMG_API+poster_path):"https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg"} alt=''/>
            <div className='movie-info'>
            <h className='movie-title'>{title?(title):original_name}</h>
            <h className={`vote-movie ${setVoteClass(vote_average)}`}>{vote_average}</h>
            </div>

        </div>
        </Link>
    )
}

export default Movie

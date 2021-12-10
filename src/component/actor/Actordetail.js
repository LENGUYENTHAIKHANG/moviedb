import React from 'react'
import './actor.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const IMG_API="https://image.tmdb.org/t/p/w1280";


function Actordetail({profile_path,id,name}) {
    
    return (
        <Link className='actor-link' to={`./actor/${id}`}>
        <div className='actor'>
            <img className='actor-poster' src={!IMG_API+profile_path?(IMG_API+profile_path):'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'} alt=''/>
            <div className='actor-info'>
            <h className='actor-title'>{name}</h>
           
            </div>

        </div></Link>
    )
}

export default Actordetail

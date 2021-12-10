import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import'./trailer.css'

function Trailer() {
    const {id}=useParams();
    const API_TRAILER=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US`;
    const [trailer,settrailer]=useState([]);
    const [keys,setkeys]=useState();
    useEffect(()=>{
        fetch(API_TRAILER)
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data.results)
          settrailer(data.results)
          setkeys(data.results[0].key)
         

    });
  
},[0])


    return (
        <div className='trailer'>
            <iframe className='videos' width="420" height="345" src={`https://www.youtube.com/embed/${keys}?autoplay=0&mute=0`}></iframe>
            <div className='image-video'>
            {trailer.map(tl=>(
                <div >
                    <form >
                    <img onClick={()=>{setkeys(tl.key);window.scrollTo(0, 0);}} className='imageyoutube' src={`https://img.youtube.com/vi/${tl.key}/0.jpg`} alt=''/>
                    </form>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Trailer

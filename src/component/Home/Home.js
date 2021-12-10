import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Actor from '../actor/Actor'
import Popular from '../porular/Popular'
import './home.css'
import {useNavigate} from 'react-router-dom';

import Slide from './sliceshow/Slide'
 




function Home() {
    const history = useNavigate();
  const handleOnClick = useCallback(() => history.push(`/search/${ser}`), [history]);
    const [ser,setSer]=useState('')
    const searchs=(e)=>{
        setSer(e.target.value)
    }
    return (
        
        <div>
           
            <Slide/>
            <div className='search'>
                <form onSubmit={handleOnClick}>
                <input  value={ser} onChange={searchs} className='search-input' placeholder='search....'/>
                <Link to={`/search/${ser}`}>
                <button className='search-btn' >Search</button>
                </Link>
                </form>

            </div>
            <div className='home-popular'>
            <h3 className='title-popular'>Popular</h3>
                <Popular/>
            
            </div>
            <Actor/>
        </div>
    )
}

export default Home

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'

export default function Input() {
    const [searchs,setSearch]=useState('');
    
    const test =(e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }
   
    return (
        <div>
            
            <input  onChange={test} value={searchs} type="search" placeholder="Search..." className="tim-kiem" />
            <Link  to={`/search/${searchs}`}>ok</Link>
            
            
          
          
        </div>
    )
}

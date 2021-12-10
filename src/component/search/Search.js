import React, { useEffect, useState } from 'react'
import './search.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import Actordetail from '../actor/Actordetail';
import Movie from '../Home/Movie/Movie';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



function Search() {
    const [searchmovie, setSearchmovie] = useState([]);
    const [searchDV, setSearchDV] = useState([]);
    const [year, setYear] = useState('');

    const { sear } = useParams();
    const [testt, setTest] = useState('');
    const [ta, setta] = useState(sear);





    const API_SEARCHMOVIE = `https://api.themoviedb.org/3/search/movie?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US&page=1&include_adult=false&year=${year}&query=`;
    const API_SEARCHDV = `https://api.themoviedb.org/3/search/person?api_key=b56eea0a4ff03126e15187093c6c028d&language=en-US&page=1&include_adult=false&query=`;

    const getdata = async (api1, api2) => {
        setta(sear);

        const mov = await axios.get(api1);
        setSearchmovie(mov.data.results);
        console.log(mov.data.results);
        const dv = await axios.get(api2);
        setSearchDV(dv.data.results);
        console.log(dv.data.results);


    }


    useEffect(() => {

        getdata(API_SEARCHMOVIE + ta, API_SEARCHDV + ta);

    }

        , [2]);
    const test = (e) => {
        setTest(e.target.value);
        setta(e.target.value)

    }


    const handOnSubmit = (e) => {

        if (testt) {
            e.preventDefault();



            getdata(API_SEARCHMOVIE + ta, API_SEARCHDV + ta);


        }
        setTest(ta);

    }


    return (
        <div>


            <form onSubmit={handOnSubmit} >
                <input onChange={test} value={testt} type="search" placeholder="Search..." className="tim-kiems" />
                {/* <Link  to={`/search/${testt}`}>ok</Link> */}
            </form>


           

            

<Tabs>
    <TabList className='tab-list'>
      <Tab className='tab'><p className='tab-title'> Phim: {searchmovie.length}</p></Tab>
      <Tab className='tab'><p className='tab-title'> Dien Vien: {searchDV.length}</p></Tab>
    </TabList>

    <TabPanel>
    <div className='search-moive'>
                
                {searchmovie.map(move=>(
                    <div className='search-de-item'>
                    <Movie key={move.id} data={move} {...move}/>
                     </div>
                ))}

            </div>
    </TabPanel>
    <TabPanel>
    <div className='search-dv'>
               
               {searchDV.map(dv=>(
                   <div className='search-de-item'>
                   <Actordetail key={dv.id} data={dv} {...dv}/>
                    </div>
               ))}

           </div> 
    </TabPanel>
  </Tabs>

        </div>
    )
}

export default Search

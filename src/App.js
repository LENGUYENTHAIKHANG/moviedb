
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Detail from './component/Detail/Detail';
import Search from './component/search/Search';
import Actorinfo from './component/actorinfo/Actorinfo';
import Genres from './component/genres/Genres';
import Trailer from './component/trailer/Trailer';
import Review from './component/review/Review';

function App() {
  return (
    <Router>
    <div className='App' >
       <header className='header'>
              <Link className='logo' to='/'> <h>MovieDB...</h></Link>

            </header>
        <Routes>   
          <Route path='/' exact element={<Home/>}/>
          <Route path='/detail/:id' exact element={<Detail/>}/>
          <Route path='/search/:sear' exact element={<Search/>}/>
          <Route path='/actor/:id' exact element={<Actorinfo/>}/>
          <Route path='/genres/:id' exact element={<Genres/>}/>
          <Route path='/detail/:id/trailer' exact element={<Trailer/>}/>
          <Route path='/detail/:id/review' exact element={<Review/>}/>
          <Route  element={<h3>Not Found</h3>}/>
    
     </Routes> 
    </div>
    </Router>
  );
}

export default App;

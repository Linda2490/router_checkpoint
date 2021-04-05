import './App.css';
import MovieList from './components/movieList/MovieList';
import NavBar from './components/NavBar';
import React, {useState} from 'react'
import AddMovie from "./components/addMovie/AddMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './components/movieDetail/MovieDetail'

function App () {
   const [movies, setMovies] = useState([
  { 
    id : Math.random(),
    title: "The last samurai",
    description:
      "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
    posterUrl:
      "https://i.pinimg.com/originals/d3/3e/15/d33e15f261a60676fd6755cb21dcd6ea.jpg",
    rate : 4,
    trailer : <iframe width="560" height="315" src="https://www.youtube.com/embed/T50_qHEOahQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
  },
  
  { 
     id : Math.random(),
    title: "Eien no zero",
    description:
      "a Zero fighter story based on a fictional war.",
    posterUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdmEdefbDm-uVh8OI3gyPVVXcpcyRZYcY7HcWw_XkKBBcCJ1eK",
    rate : 4,
  trailer : <iframe width="560" height="315" src="https://www.youtube.com/embed/123ihd2TcFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {
    id : Math.random(),
    title: "Spirited away",
    description:
      "he story of Chihiro Ogino (Hiiragi), a 10-year-old girl who, while moving to a new neighbourhood, enters the world of Kami.",
    posterUrl:
      "http://image.tmdb.org/t/p/original/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
    rate : 5,
    trailer : <iframe width="560" height="315" src="https://www.youtube.com/embed/ByXuk9QqQkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  {  id : Math.random(),
    title: "The Great War of Archimedes",
    description:
      "Set in the 1930's, the headquarters of the Imperial Japanese Navy sets out to build the world's biggest battleship Yamato.",
    posterUrl:
      "https://i.mydramalist.com/dd0WWm.jpg",
    rate : 4,
   trailer : <iframe width="560" height="315" src="https://www.youtube.com/embed/BxyK1Z2m5rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  },
  
]);
   const [searchRate, setSearchRate] = useState(0);
   const [searchTitle, setSearchTitle] = useState("");
   const getRateSearch = (inputrate) => {
     setSearchRate (inputrate)
   }
   const getTitleSearch = (inputTitle) => {
     setSearchTitle (inputTitle)
   }
   const getNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <Router>
    <div>
       <NavBar getRateSearch={getRateSearch} getTitleSearch={getTitleSearch}/>
       <div className="addMovieBtn"> <AddMovie getNewMovie={getNewMovie}/>
       </div>
       
      
       
       <Switch>
       <Route path="/" exact render = {()=> <MovieList myMoviesList={movies} searchRate={searchRate} searchTitle={searchTitle}/>}/> 
       <Route path="/movies/:id" render={({match}) => <MovieDetail movies={movies} match={match}/> }/>
       
       </Switch>
       
    </div>
    </Router>
  );
}

export default App;

import React from 'react'
import MovieCard from '../movieCard/MovieCard.jsx'
import './MovieStyle.css'

function MovieList({myMoviesList,searchRate, searchTitle}) {
    return (
        <div className='moviesList'>
             {myMoviesList
              .filter(element=> element.rate>=searchRate && element.title.toLowerCase().includes(searchTitle.toLowerCase()))
              .map((element, i) => <MovieCard movies={element} key={i} />)} 
            
        </div>
    )
}

export default MovieList
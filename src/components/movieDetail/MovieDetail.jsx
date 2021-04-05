import React from 'react'

function MovieDetail({movies, match}) {
    // console.log("match :", match.params.id)
    const movie = movies.find(el=>Number(match.params.id) === el.id)
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}> {movie.title}</h1>
            <br/>
            
    
            <h3 style={{textAlign:'center'}}>  description : {movie.description} </h3>
           <h1 style={{textAlign:'center'}}> {movie.trailer} </h1>
        </div>
    )
}

export default MovieDetail

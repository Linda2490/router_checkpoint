import React from 'react'

function MovieDetail({movies}) {
    return (
        <div>
            {movies.title};
            {movies.description};
            {movies.trailer};
        </div>
    )
}

export default MovieDetail

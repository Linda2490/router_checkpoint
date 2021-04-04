import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './MovieCard.css'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetail from '../movieDetail/MovieDetail';

function MovieCard({movies}) {
    return (
        
        <div className='movieCard'>
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={movies.posterUrl} className="MovieImg" />
             <Card.Body>
             <Card.Title>{movies.title}</Card.Title>
             <Card.Text>
              {movies.description}
             </Card.Text>
             <h2> {"⭐".repeat(movies.rate)} </h2>
             </Card.Body>
             <Card.Footer>
             <Router>
                 <Link to='/MovieDetail'>
                     
                     <Button variant="primary" >more details</Button>
                 </Link>
                 <Route path="/movieCard/:id" component={MovieDetail}/>
             </Router>
             </Card.Footer>
             </Card>
             
        </div>
    )
}


export default MovieCard

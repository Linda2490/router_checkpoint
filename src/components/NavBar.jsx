import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"

function NavBar({getRateSearch, getTitleSearch}) {
    const ratingChanged = (newRating) => {
  getRateSearch(newRating);
};
    return (
        <div>
         <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">Movies</Navbar.Brand>
         <Nav className="mr-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#features">Features</Nav.Link>
         <Nav.Link href="#pricing">Watch Now</Nav.Link>
         </Nav>
         
         <Form inline>  
          <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#ffd700"
  />
    
         <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>getTitleSearch (e.target.value)} />
         <Button variant="outline-info">Search</Button>
         </Form>
         </Navbar>
        </div>
    )
}

export default NavBar

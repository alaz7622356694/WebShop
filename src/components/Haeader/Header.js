import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
          

  <Navbar sticky ="top" expand="xl" variant="dark" bg="dark" >
  <Container fluid>
   
  <Navbar.Brand href="/">     <img alt="logo"
       src="https://img.icons8.com/officel/80/000000/shop.png"
        width="40px"
        height="40px"
        className="d-inline-block align-bottom mr-2"
      /> {' '} FC Market</Navbar.Brand>
      <Nav className='d-flex flex-row ' >
     
          <Nav.Link  href="/cart"><i className='fa fa-shopping-cart '></i></Nav.Link>
         
          <Nav.Link href="/account"><i className='fa fa-user ml-3'></i></Nav.Link>
          
      </Nav>

      
  </Container>

  </Navbar>




        </header>
    )
}

export default Header

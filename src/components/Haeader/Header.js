import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Container,Navbar,Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
          

  <Navbar sticky ="top" expand="xl" variant="dark" bg="dark" >
  <Container fluid>
   
  <LinkContainer to="/">
  
  
  <Navbar.Brand >     <img alt="logo"
       src="https://img.icons8.com/officel/80/000000/shop.png"
        width="40px"
        height="40px"
        className="d-inline-block align-bottom mr-2"
      /> {' '} FC Market</Navbar.Brand>
  
  
  
  </LinkContainer>

      <Nav className='d-flex flex-row ' >

          <LinkContainer to="/cart">

          <Nav.Link  ><i className='fa fa-shopping-cart '></i></Nav.Link>
          
          </LinkContainer>
     
         <LinkContainer  to="/account">
         
         <Nav.Link ><i className='fa fa-user ml-3'></i></Nav.Link>
          
         </LinkContainer>
         
        
      </Nav>

      
  </Container>

  </Navbar>




        </header>
    )
}

export default Header

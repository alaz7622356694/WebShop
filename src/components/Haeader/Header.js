import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
          

  <Navbar sticky ="top" expand="xl" variant="dark" bg="dark" >
  <Container fluid>
   
  <Navbar.Brand href="/">     <img
       src="https://img.icons8.com/officel/80/000000/shop.png"
        width="40px"
        height="40px"
        className="d-inline-block align-bottom"
      /> {' '} FC Market</Navbar.Brand>
      <Nav >
      <img
        src="https://img.icons8.com/cotton/64/000000/shopping-cart.png"
        width="40px"
        height="40px"
        className="d-inline-block align-top"
      />
          <Nav.Link  href="/cart">Shopping Basket</Nav.Link>
          <img
        src="https://img.icons8.com/ultraviolet/40/000000/guest-male.png"
        width="40px"
        height="40px"
        className="d-inline-block align-top"
      />
          <Nav.Link href="/account">Account</Nav.Link>
      </Nav>

      
  </Container>

  </Navbar>




        </header>
    )
}

export default Header

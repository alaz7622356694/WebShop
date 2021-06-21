import React from 'react'
import Header from './components/Haeader/Header'
import Footer from './components/Footer/Footer'
import {Container} from 'react-bootstrap'
import Home from './pages/Home'
const App = () => {
    return (
        <div>
          <Header/>
          
          <Container fluid className="bg-primary h-100">
            <Home/>
          </Container> 
          <Footer/>
        </div>
    )
}

export default App

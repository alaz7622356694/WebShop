import React from 'react'
import Header from './components/Haeader/Header'
import Footer from './components/Footer/Footer'
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router , Route } from 'react-router-dom'

import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

const App = () => {
    return (
        <Router>

          <Header/>
          
          <Container fluid className="bg-primary h-100">

            <Route path='/' component={Home} exact/>
            <Route path='/product/:id' component={ProductPage} />

          </Container> 
          <Footer/>

        </Router>
    )
}

export default App

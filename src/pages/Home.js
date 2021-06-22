import React from 'react'
import products from '../products'
import {Row ,Col} from 'react-bootstrap'
import Product from '../components/product/Product'
const Home = () => {
    return (
        <div>
            <h2 className='text-center' >Products</h2><hr/>
            <Row>
                {products.map((item)=>{
return(
    <Col key={item._id} sm={12} md={6} lg={4}>
     <Product image={item.image} title={item.name} price={item.price} description={item.description} >
        
     </Product>
    </Col>
)
                })}
            </Row>
        </div>
    )
}

export default Home

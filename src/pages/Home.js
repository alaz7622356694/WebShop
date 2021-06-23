import React from 'react'
import {Row ,Col} from 'react-bootstrap'
import Product from '../components/product/Product'
import products from '../products'

const Home = () => {

    return (
        <div>
            <h2 className='text-center' >Products</h2><hr/>
            <Row>
                {products.map((item)=>{
return(
    <Col key={item._id} sm={12} md={6} lg={4}>
     <Product id={item._id} image={item.image} title={item.name} price={`${item.price}$`}  >
        
     </Product>
    </Col>
)
                })}
            </Row>
        </div>
    )
}

export default Home

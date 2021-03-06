import React from 'react'
import { Link } from 'react-router-dom'
import {Row , Col , Image , ListGroup , Button} from 'react-bootstrap' 
import products from '../products'

const ProductPage = ({history , match}) => {
  const product= products.find((item)=>{
return item._id=== match.params.id
   })
   
   const addToCartHandler =()=>{
history.push(`/cart/${match.params.id}`)

   }
    return (
<div>
<Link to="/" className='btn btn-light my-3'> Return to main page</Link>
<Row>
<Col md={3}>
    <ListGroup variant='flush' >
        <ListGroup.Item>
            <h3>{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
            {product.price}$
        </ListGroup.Item>
        <ListGroup.Item>
            {product.description}
        </ListGroup.Item>
        <ListGroup.Item>
           <Button onClick={addToCartHandler} className="btn-block " type='button'>Add to the basket</Button>
        </ListGroup.Item>
        
    </ListGroup>
</Col>

<Col md={6}>
    <Image src={product.image} fluid/> 
</Col>




</Row>


    </div>)
        
    
}

export default ProductPage

import React from 'react'
import {Card} from 'react-bootstrap'

const Product = (props) => {
    return (
       <Card className="my-3 p-3 rounded">
<a href={`/product/${props._id}`}>

    <Card.Img src={props.image} variant="top" />
</a>


       </Card>
    )
}

export default Product

import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Product = (props) => {
    return (
       <Card className="my-3 p-3 rounded">
<Link to={`/product/${props._id}`}>

    <Card.Img src={props.image} variant="top" />

</Link>
<Card.Body>

<Link to={`/product/${props._id}`}>

<Card.Title as='h3'>{props.title}</Card.Title>

</Link>

<Card.Text as ='h4' >{props.price} $</Card.Text>


    <Card.Text>
      {props.description}
    </Card.Text>



 </Card.Body>

       </Card>
    )
}

export default Product

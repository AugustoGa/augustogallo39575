import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item({producto}) {
    const {description , titulo, price } = producto
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
                description : {description}
                <br/>
                precio : {price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        );
    }
export default Item
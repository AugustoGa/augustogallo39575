import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Styles/Styles.css"


function Item({producto}) {
    const {description , titulo, price , Url , genero} = producto
    return (
        <div className="myDivItem">
            <Card style={{ width: '30rem' }}>
                <Card.Img className='imgs' src={Url} />
                <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    description : {description}
                    <br/>
                    precio : {price}
                    <br/>
                    {genero}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        );
    }
export default Item
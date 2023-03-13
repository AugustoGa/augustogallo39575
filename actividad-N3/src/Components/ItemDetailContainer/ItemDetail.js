import React from 'react'

export default function ItemDetail(productos) {
    return (
        <>  
        <div className='contenedorDetail'>
            <Card style={{ width: '30rem' }} key={item.id}>
                <Card.Img className='imgs' src = {item.Url} />
                <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Text>
                    description : {item.description}
                    <br/>
                    precio : {item.price}
                    <br/>
                    {item.genero}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        </>
        );
    }
}





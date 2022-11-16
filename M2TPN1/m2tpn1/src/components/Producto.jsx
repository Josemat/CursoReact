import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Producto = (data) => {
    const { title, price, urlImagen } = data.data
    return (
        <>

            <Card style={{ width: '18rem', height: '18rem' }} className="d-flex flex-row align-items-center">
                <Card.Img variant="top" src={urlImagen} className="w-75" />
                <Card.Body className='d-flex flex-column content-between'>
                    <Card.Title className='mb-4'>{title}</Card.Title>
                    <Card.Text>Precio: ${price}</Card.Text>
                    <Button variant="success" as={Link} className="w-100" to={`/sites/${data.id}`}>Detalles</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Producto
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alerta from '../components/Alert';

const Checkout = () => {
    const [productos, setProductos] = useState({})
    const [alerta, setAlerta] = useState(false)
    useEffect(() => {
        const producto = localStorage.getItem('productos')
        setProductos(JSON.parse(producto))

    }, [])

    function eliminarProducto() {
        localStorage.removeItem('productos')
        setProductos(false)
    }
    function compraRealizada() {
        setAlerta(true)
        setTimeout(() => {
            setAlerta(false)
            eliminarProducto()
        }, 3000);
    }
    return (
        <>
            {alerta && <Alerta text={`Muchas gracias por su compra de ${productos.title}, que lo disfrute!`} />}
            {productos ?
                <div>
                    <h2>Carrito de compra</h2>

                    <Card>
                        <Card.Body>
                            <Card.Title>{productos.title}</Card.Title>
                            <Card.Text>{productos.descripcion}</Card.Text>
                            <Card.Text className='text-end'>
                                Valor: ${productos.price}
                            </Card.Text>
                            <div className='d-flex justify-content-end my-3'>
                                <Button className='w-25' onClick={() => eliminarProducto()} variant='danger'>Eliminar del carrito</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <h4 className='text-end mt-3'>Total: ${productos.price}</h4>
                    <Button variant='success' className='w-100 p-3' onClick={() => compraRealizada(productos.title)}>Finalizar compra</Button>
                </div>
                :
                <div className='my-5'>
                    <h3>Carrito de compras vacío!</h3>
                    <Button variant='success' className='w-100' as={Link} to={'/'}>Ir a la tienda</Button>
                </div>
            }
        </>
    )
}

export default Checkout
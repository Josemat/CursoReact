import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import RequestItemDetail from '../services/RequestItemDetail'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const ProductoId = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const result = async () => {
            const prod = await RequestItemDetail(id)
            if (prod) setProducto(prod.data())

        }
        result()
    }, [id])

    function compra() {
        producto.id = id
        localStorage.setItem('productos', JSON.stringify(producto))
    }
    return (
        <Container>

            <h2 className='m-4'>{producto.title}</h2>

            <div className='row justify-content-evenly'>
                <div className='col-md-8 overflow-hidden'>

                    <img
                        className="rounded d-block"
                        alt={producto.title}
                        src={producto.urlImagen}
                        style={{ objectFit: 'cover', maxHeight: '400px', margin: 'auto' }}
                    />
                </div>
                <div className='col-md-4 m-auto p-5'>
                    <h4>Descripción:</h4>
                    <h5>{producto.descripcion}</h5>
                    <h4>Precio: ${producto.price}</h4>
                    <Button className="mt-5 w-100" onClick={() => compra()} as={Link} to={'/checkout'} variant='success'>Comprar</Button>

                </div>
            </div>

        </Container>
    )
}

export default ProductoId
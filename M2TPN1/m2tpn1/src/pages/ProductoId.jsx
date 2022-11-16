import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RequestItemDetail from '../services/RequestItemDetail'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Busqueda from '../components/Busqueda'

const ProductoId = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    useEffect(() => {
        const result = async () => {
            const prod = await RequestItemDetail(id)
            if (prod) setProducto(prod.data())

        }
        result()
    }, [id])
    return (
        <Container>

            <Busqueda />
            <h2 className='m-4'>{producto.title}</h2>

            <div className='row justify-content-evenly'>
                <div className='col-md-8'>

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
                    <Button className="mt-5 w-100" variant='success' onClick={() => alert(`Felicidades, acabas de comprar ${producto.title}`)}>Comprar</Button>
                </div>
            </div>

        </Container>
    )
}

export default ProductoId
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RequestItemDetail from '../services/RequestItemDetail'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Alerta from '../components/Alert'

const ProductoId = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState({})
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const result = async () => {
            const prod = await RequestItemDetail(id)
            if (prod) setProducto(prod.data())
        }
        result()
    }, [id])

    function compra() {
        if (!context.user.name) {
            setAlert(true)
            setTimeout(() => {
                navigate('/login')
            }, 3000);
            return
        }
        producto.id = id
        localStorage.setItem('productos', JSON.stringify(producto))
        navigate('/checkout')
    }
    return (
        <Container>
            {alert && <Alerta variant='danger' text={'Necesitas tener una cuenta para realizar la compra'} />}

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
                    <Button className="mt-5 w-100" onClick={() => compra()} variant='success'>Comprar</Button>

                </div>
            </div>

        </Container>
    )
}

export default ProductoId
import React, { useState, useEffect } from 'react'
import { RequestApiML } from '../services/RequestApiML';
// import { useParams } from 'react-router-dom';
import Producto from './Producto';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row';


const Productos = () => {
    // const { busqueda } = useParams()
    const [productos, setProductos] = useState('')
    useEffect(() => {
        RequestApiML().then(asd =>
            setProductos(asd))
    }, [setProductos])
    return (<>

        <div >
            <Row md={2} lg={3} xxl={4} className="g-2">
                {productos ?
                    productos.map(element => <Producto data={element.data()} id={element.id} key={element.id} />)
                    :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
            </Row>
        </div>
    </>
    )
}

export default Productos
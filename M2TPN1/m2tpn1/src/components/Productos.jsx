import React from 'react'
import { RequestApiML } from '../services/RequestApiML';
import { useParams } from 'react-router-dom';
import Producto from './Producto';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'



const Productos = () => {
    const { busqueda } = useParams()
    const [productos, setProductos] = useState('')
    useEffect(() => {
        RequestApiML(busqueda).then(asd =>
            setProductos(asd))
    }, [busqueda])
    return (<>

        <div className='d-flex flex-row flex-wrap justify-content-center gap-3'>
            {productos ?
                productos.map(element => <Producto data={element.data()} id={element.id} key={element.id} />)
                :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </div>
    </>
    )
}

export default Productos
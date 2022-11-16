import React from 'react'
import { RequestApiML } from '../services/RequestApiML';
import { useParams } from 'react-router-dom';
import Producto from './Producto';
import { useEffect } from 'react';
import { useState } from 'react';
import Busqueda from './Busqueda';



const Productos = () => {
    const { busqueda } = useParams()
    const [productos, setProductos] = useState('')
    useEffect(() => {
        RequestApiML(busqueda).then(asd =>
            setProductos(asd))
    }, [busqueda])
    return (<>
        <Busqueda />
        {busqueda && <h2>Su busqueda de "{busqueda}" dio los siguientes resultados:</h2>}
        <div className='d-flex flex-row flex-wrap justify-content-center gap-3'>
            {productos && productos.map(element => <Producto data={element.data()} id={element.id} key={element.id} />)}
        </div>
    </>
    )
}

export default Productos
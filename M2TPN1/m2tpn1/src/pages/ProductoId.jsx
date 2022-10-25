import React from 'react'
import { useParams } from 'react-router-dom'
import RequestItemDetail from '../services/RequestItemDetail'

const ProductoId = () => {
    const { id } = useParams()
    const producto = RequestItemDetail(id)
    return (
        <div>
            <h2>{producto.title}</h2>
            {producto.pictures && producto.pictures.map(res => <img key={res.id} src={res.url} />)}
            <p>Garantía: <small>{producto.warranty}</small></p>
            <p>Precio:$ {producto.price}</p>
            <p><small>Disponibles: {producto.available_quantity}</small></p>
            <p><small>Vendidos: {producto.sold_quantity}</small></p>
            <button onClick={() => alert(`Felicidades, acabas de comprar ${producto.title}`)}>Comprar</button>
        </div>
    )
}

export default ProductoId
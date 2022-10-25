import React from 'react'
import { Link } from 'react-router-dom';

const Producto = ({ data }) => {
    const { title, price, thumbnail, id } = data
    return (
        <div className="producto" id={id}>
            <img
                src={thumbnail}
                alt="imagen random"
                className="imagen"
            />
            <div className="descripcion">{title}</div>
            <div className="descripcion">${price}</div>
            <Link to={`/sites/${id}`}><p>Detalle</p></Link>
        </div>
    );
}

export default Producto
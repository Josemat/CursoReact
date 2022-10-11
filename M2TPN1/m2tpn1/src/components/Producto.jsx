import React from 'react'


const Producto = ({ data }) => {
    const { title, price, thumbnail, permalink } = data
    function handleClick() {
        console.log(`Se redigirá a:${permalink} en el proximo trabajo practico con React-router`)
    }
    return (
        <div className="producto" key={title} id={permalink}>
            <img
                src={thumbnail}
                alt="imagen random"
                className="imagen"
            />
            <div className="descripcion">{title}</div>
            <div className="descripcion">${price}</div>
            <button onClick={handleClick}>Comprar</button>
        </div>
    );
}

export default Producto
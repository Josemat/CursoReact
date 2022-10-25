import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Busqueda = () => {
    const [busqueda, setBusqueda] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/busqueda/${busqueda}`)
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={busqueda || ""}
                onChange={(e) => {
                    setBusqueda(e.target.value);
                }}
                placeholder="Inserte búsqueda aquí"
                className="inputBusqueda"
            ></input>
            <input type="submit" value={"Buscar"}></input>
        </form>
    );
}

export default Busqueda
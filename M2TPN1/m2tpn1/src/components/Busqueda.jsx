import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Busqueda = () => {
    const [busqueda, setBusqueda] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/busqueda/${busqueda}`)
    };
    return (
        <Form className="mb-3 d-flex flex-row" onSubmit={handleSubmit}>
            <Form.Group className='flex-fill'>
                <Form.Control type="text" placeholder="Ingrese la búsqueda" value={busqueda || ""}
                    onChange={(e) => {
                        setBusqueda(e.target.value);
                    }} />
            </Form.Group>
            <Button type='submit'>Buscar</Button>
        </Form>
    );
}

export default Busqueda
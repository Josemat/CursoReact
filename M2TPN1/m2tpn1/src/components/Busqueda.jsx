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
        <Form className="mb-3 d-flex flex-row justify-content-center" onSubmit={handleSubmit}>
            <Form.Group className='w-50'>
                <Form.Control className='p-3' type="text" placeholder="Ingrese la búsqueda" value={busqueda || ""}
                    onChange={(e) => {
                        setBusqueda(e.target.value);
                    }} />
            </Form.Group>
            <Button className='' type='submit'>Buscar 🔎</Button>
        </Form>
    );
}

export default Busqueda
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Firestore from '../config/Firestore'
import Alerta from './Alert';
import { AuthContext } from '../context/AuthContext';


const Producto = (data) => {
    const { title, price, urlImagen } = data.data
    const [show, setShow] = useState(false);
    const [alerta, setAlerta] = useState(false)
    const context = useContext(AuthContext)
    const usuario = context.user.uid
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleDelete(id) {
        setShow(false)
        setAlerta(true)
        try {
            const querySnapshot = await Firestore.firestore().doc(`producto/${id}`).delete()
            if (querySnapshot) setAlerta(true)
            navigate('/')

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>Estás seguro que deseas eliminar éste producto de la base de datos?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(data.id)}>
                        Borrar producto
                    </Button>
                </Modal.Footer>
            </Modal>
            {alerta ? <Alerta variant={'danger'} text={'Producto eliminado correctamente!'} />
                :
                <Col>
                    <Card style={{ width: '18rem' }}  >
                        <Image rounded={true} src={urlImagen} />
                        {/* <Card.Img variant="top" src={urlImagen} className="rounded" style={{ width: '150px' }} /> */}
                        <Card.Body className='d-flex flex-column content-between'>
                            <Card.Title className='mb-4'>{title}</Card.Title>
                            <Card.Text>Precio: ${price}</Card.Text>
                            <Button variant="success" className="mt-2" as={Link} to={`/sites/${data.id}`}>Detalles</Button>
                            {usuario && <><Button className="mt-2" to={`producto/modificar/${data.id}`} as={Link} >Modificar</Button>
                                <Button className="mt-2" variant="danger" onClick={() => handleShow()} >Borrar</Button></>}
                        </Card.Body>
                    </Card>
                </Col>
            }
        </>
    );
}

export default Producto
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navbare = () => {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>

                <Navbar.Brand as={Link} to="/">🏠</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link to="/login" as={Link}>Login</Nav.Link>
                    <Nav.Link to="registro" as={Link}>Registro</Nav.Link>
                    <Nav.Link to="productos/alta" as={Link}>Alta producto</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    </>
    )
}

export default Navbare
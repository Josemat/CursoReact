import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { AuthContext } from '../context/AuthContext';


const Navbare = () => {
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const nombre = context.user.name || localStorage.getItem('name')

    return (<>


        <Navbar bg="light" variant="light">
            <Container>

                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav>
                    {nombre && <Nav.Link to="productos/alta" as={Link}>Alta producto</Nav.Link>}
                    {!nombre ? <Nav.Link to="/login" as={Link}>Login</Nav.Link> : <Button variant="secondary" onClick={() => {
                        context.logOut()
                        navigate('/')
                    }}>Logout</Button>}
                </Nav>

            </Container>
        </Navbar>

    </>
    )
}

export default Navbare
import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const Login = () => {
    function handleSubmit() {
        alert('Felicidades poollloooo!!!')

    }
    return (<>

        <h2>Ingrese a su Cuenta</h2>
        <Form as={Row} className='p-1' >
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else (guiño guiño).
                </Form.Text>
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Button className='w-50' variant="primary" type="submit" onClick={() => handleSubmit()}>
                    Login
                </Button>
            </div>
        </Form>
    </>

    )
}

export default Login
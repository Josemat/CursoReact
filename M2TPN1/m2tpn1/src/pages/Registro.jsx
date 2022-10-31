import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const Registro = () => {
    function handleSubmit() {
        alert('Felicidades poollloooo!!!')

    }
    return (

        <Form as={Row} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else (guiño guiño).
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                Login
            </Button>
        </Form>
        //     <h2>Cree su Cuenta</h2>
        //     <form className="formLogin">
        //         <label>Usuario</label>
        //         <input type="text"></input>
        //         <label>Password</label>
        //         <input type="password"></input>
        //         <label>Repita Password</label>
        //         <input type="password"></input>

        //         <div>
        //             <button type="submit">Crear Cuenta</button>
        //         </div>
        //     </form>
        // </div>
    )
}

export default Registro